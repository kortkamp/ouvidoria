
import { useEffect, useState } from 'react';
import PaginationCursor from '../PaginationCursor';
import { api } from '../../services/api';
import {Container , Answer} from './styles';

import { useAuth } from '../../hooks/useAuth';

import detailsImg from '../../assets/down-arrow.svg';
import closeImg from '../../assets/close.svg';
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

interface IComplaintsListProps {
  districtId:string;
}
const ComplaintsList = ({districtId}:IComplaintsListProps): JSX.Element => {

  const [complaints, setComplaints] = useState<IComplaint[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [complaintSelected, setComplaintSelected] = useState<string|undefined>('');

  const {user} = useAuth();

  const paginationLimit = 3;

  useEffect(()=>{
    api.get(`/complaints/district/${districtId}?page=${pageNumber}&limit=${paginationLimit}`)
      .then((response) => {
        const loadedComplaints = (response.data.complaints);
        const total = Math.ceil(response.data.total / paginationLimit);
        setTotalPages(total);
        setComplaints(loadedComplaints)});
  },[districtId,pageNumber]);

  function handleOpenDetails(complaintId:string) {
    setComplaintSelected(complaintId);
  }
  
  return(
    <>
      <Container>
        {complaints.map((complaint)=>{
          const status = complaint.answers.length ? 'resolvida' : 'pendente';
          return(
            <li 
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
            </li>
          )
          })}  
      </Container>

      <PaginationCursor currentPage={pageNumber} totalPages= {totalPages} setPage={setPageNumber}/>
    </>
  )
}

export default ComplaintsList;