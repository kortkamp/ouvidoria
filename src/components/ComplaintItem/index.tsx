import { useAuth } from '../../hooks/useAuth';
import {Container, Answer} from './styles'

import detailsImg from '../../assets/down-arrow.svg';
import replyImg from '../../assets/reply.svg';
import calendarImg from '../../assets/calendar.svg';
import deleteImg from '../../assets/delete.svg';
import AnswerForm from '../AnswerForm';
import { api } from '../../services/api';
import { useState } from 'react';
import SolvedStatus from '../SolvedStatus';

interface ISubmitanswer {
  complaint_id:string;
  message:string;
}

interface IAnswer {
  id:string;
  message:string;
  deadline:number;
  created_at:string;
  user:{
    name:string;
    admin:boolean;
  }
}

interface IComplaint {
  id:string;
  message:string;
  image:string;
  created_at:string;
  solved:boolean|undefined;
  user:{
    name:string;
    admin:boolean;
  }
  districtData:{
    id:string;
    name:string;
  }
  answers: IAnswer[];
}

interface IComplaintItemProps {
  key:string;
  complaintData:IComplaint;
  sourceType:'district'|'user';
  handleDeleteComplaint: (complaintId:string) => void;
}

const ComplaintItem = ({
  complaintData,
  sourceType,
  handleDeleteComplaint
}:IComplaintItemProps): JSX.Element => {

  const {user} = useAuth();

  const [complaint, setComplaint] = useState<IComplaint>(complaintData);

  const [complaintSelected, setComplaintSelected] = useState(false);
  const [writeAnswer, setWriteAnswer] = useState(false);



  const status = complaint.answers.length ? 'resolvida' : 'pendente';

  function handleOpenDetails(select:boolean) {
    if(!select){
      setWriteAnswer(false);
    }
    setComplaintSelected(select);
  }

  function handleWriteAnswer(complaintId:string){
    setComplaintSelected(true);
    setWriteAnswer( !writeAnswer );
  }

  function handleSubmitAnswer(answer:ISubmitanswer){
    api.post('answers', {
      complaint_id: answer.complaint_id,
      message: answer.message,
    },
    {
      headers: { Authorization: `Bearer ${user?.token}`
    }})
    .then((response)=>{
      // build the new answer item
      const newAnswer:IAnswer = {...response.data , user:{name:user?.name, admin:user?.admin}}

      const updateComplaint = {...complaint};

      updateComplaint.answers.push(newAnswer);

      setComplaint(updateComplaint);
      
    });

  }


  return (
    <Container
      key={complaint.id}
      className={complaintSelected ? 'selected' : ''}
    >
      <header>
        <div className='complaintData'>
          { sourceType==='user' ?
            <span>Bairro {complaint.districtData.name}</span>
          :
            <span>{complaint.user.name}</span>
          } 
          <span> <img src={calendarImg} alt="calendário" /> {
            new Intl.DateTimeFormat('pt-BR').format(
            new Date(complaint.created_at),
          )}
          </span>
          <span><b>ID:</b> {complaint.id}</span>
          <span className={status}>{status}</span>
        </div>
        <div className='complaintTools'>
          {user?.admin ? <img 
            src={replyImg} 
            alt="responder reclamação" 
            onClick={()=>handleWriteAnswer(complaint.id)}
            /> : ''}
          {user?.admin ? <img 
            src={deleteImg} 
            alt="apagar reclamação" 
            onClick={()=>handleDeleteComplaint(complaint.id)}
            /> 
          : ''}
          {complaintSelected? 
            <img 
              className="rotate"
              src={detailsImg} 
              alt="fechar" 
              onClick={ ()=>handleOpenDetails(false) }
            />
          : 
            <img 
              src={detailsImg} 
              alt="detalhes" 
              onClick={ ()=>handleOpenDetails(true) }
            />
          }
        </div>
      </header>

      <p>
        {complaint.message}
      </p>

      <div className={complaintSelected ? 'details show' : 'details'}>
        {complaint.image && 
          <div className='imageArea'>
            <img src={complaint.image} alt="imagem da reclamação" />
          </div>
        }
        <Answer >
          {complaint.answers.length === 0 &&
            <li>
              <span>
                Esta reclamação ainda não foi respondida
              </span> 
            </li>
          }
          {complaint.answers.map((answer)=>(
            <li key={answer.id}>
                <header>
                  <strong>Resposta</strong> 
                  <span> em {
                    new Intl.DateTimeFormat('pt-BR').format(
                      new Date(answer.created_at),
                      )}
                  </span>
                </header>
              <p>
                {answer.message}
              </p>
            </li>
          ))} 
        </Answer> 
        
        {user?.admin && 
          <AnswerForm 
            show={writeAnswer}
            handleSubmitAnswer= {handleSubmitAnswer} 
            complaintId={complaint.id}
          />
        }

        <SolvedStatus status={complaint.solved} type={'edit'} />

      </div>

    </Container>
  )
} 

export default ComplaintItem;