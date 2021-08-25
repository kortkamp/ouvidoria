
import { useEffect, useState } from 'react';
import PaginationCursor from '../PaginationCursor';
import { api } from '../../services/api';
import {Container} from './styles'

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

  useEffect(()=>{
    api.get(`/complaints/district/${districtId}`)
      .then((response) => {
        const loadedComplaints = (response.data.complaints);
        
        setComplaints(loadedComplaints)});
  },[districtId]);
  
  return(
    <>
      <Container>
        {complaints.map((complaint)=>{
          const status = complaint.answers.length ? 'fechada' : 'aberta';
          return(
            <li key={complaint.id} >
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
            
            </li>
          )
          })}  
      </Container>

      <PaginationCursor page={pageNumber} total= {5} setPage={setPageNumber}/>
    </>
  )
}

export default ComplaintsList;