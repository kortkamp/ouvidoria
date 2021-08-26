
import { useEffect, useState } from 'react';
import PaginationCursor from '../PaginationCursor';
import { api } from '../../services/api';
import {Container , Answer} from './styles'

import detailsImg from '../../assets/details.svg';
import closeImg from '../../assets/close.svg'

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
            <li key={complaint.id}>
              <div className='complaintTitle'>
                <span>{complaint.user.name}</span>
                <span> em {
                  new Intl.DateTimeFormat('pt-BR').format(
                  new Date(complaint.created_at),
                )}
                </span>
                <span className={status}>{status}</span>
              </div>
              <p>
                {complaint.message}
              </p>
              
              {complaint.id === complaintSelected && complaint.image? 
                <div className='imageArea'>
                  <img src={complaint.image} alt="imagem da reclamação" />
                </div>
              : 
                ''
              }

              {complaint.id === complaintSelected && complaint.image? 
                <img 
                  src={closeImg} 
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

              

              {complaint.id === complaintSelected ? 
                <Answer >
                  
                  {complaint.answers.map((answer)=>(
                    <li>
                      <div className='answerTitle'>
                        <span>{answer.user.name}</span>
                        <span> em {
                          new Intl.DateTimeFormat('pt-BR').format(
                            new Date(answer.created_at),
                            )}
                        </span>
                      </div>
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
              :
                ''
              }
            
            </li>
          )
          })}  
      </Container>

      <PaginationCursor currentPage={pageNumber} totalPages= {totalPages} setPage={setPageNumber}/>
    </>
  )
}

export default ComplaintsList;