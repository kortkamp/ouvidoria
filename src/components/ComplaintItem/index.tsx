import { useAuth } from '../../hooks/useAuth';
import {Container, Answer} from './styles'

import detailsImg from '../../assets/down-arrow.svg';
import replyImg from '../../assets/reply.svg';
import calendarImg from '../../assets/calendar.svg';
import deleteImg from '../../assets/delete.svg';

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
  user:{
    name:string;
    admin:boolean;
  }
  answers: IAnswer[];
}

interface IComplaintItemProps {
  key:string;
  complaint:IComplaint;
  complaintSelected: string|undefined;
  setComplaintSelected: (complaintId:string) => void;
}

const ComplaintItem = ({
  complaint,
  complaintSelected,
  setComplaintSelected
}:IComplaintItemProps): JSX.Element => {

  const {user} = useAuth();

  const status = complaint.answers.length ? 'resolvida' : 'pendente';

  function handleOpenDetails(complaintId:string) {
    setComplaintSelected(complaintId);
  }


  return (
    <Container
      key={complaint.id}
      className={complaint.id === complaintSelected ? 'selected' : ''}
    >
      <header>
        <div className='complaintData'>
          <span>{complaint.user.name}</span>
          <span> <img src={calendarImg} alt="calendário" /> {
            new Intl.DateTimeFormat('pt-BR').format(
            new Date(complaint.created_at),
          )}
          </span>
          <span><b>ID:</b> {complaint.id}</span>
          <span className={status}>{status}</span>
        </div>
        <div className='complaintTools'>
          {user?.admin ? <img src={replyImg} alt="responder reclamação" /> : ''}
          {user?.admin ? <img src={deleteImg} alt="apagar reclamação" /> : ''}
          {complaint.id === complaintSelected? 
            <img 
              className="rotate"
              src={detailsImg} 
              alt="fechar" 
              onClick={ ()=>handleOpenDetails('') }
            />
          : 
            <img 
              src={detailsImg} 
              alt="detalhes" 
              onClick={ ()=>handleOpenDetails(complaint.id) }
            />
          }
        </div>
      </header>

      <p>
        {complaint.message}
      </p>

      <div className={complaint.id === complaintSelected ? 'details show' : 'details'}>
        {complaint.image? 
          <div className='imageArea'>
            <img src={complaint.image} alt="imagem da reclamação" />
          </div>
        : 
          ''
        }
          <Answer >
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

            {complaint.answers.length === 0 ?
              'Esta reclamação ainda não foi respondida'
              : ''
            }
          </Answer> 

      </div>

    </Container>
  )
} 

export default ComplaintItem;