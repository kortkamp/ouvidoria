
import { useEffect, useState } from 'react';
import PaginationCursor from '../PaginationCursor';
import { api } from '../../services/api';
import {Container } from './styles';

// import { useAuth } from '../../hooks/useAuth';
import ComplaintItem from '../ComplaintItem';
import { useAuth } from '../../hooks/useAuth';



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
  sourceType:'district'|'user';
  sourceId:string;
}
const ComplaintsList = ({sourceType,sourceId}:IComplaintsListProps): JSX.Element => {

  const [complaints, setComplaints] = useState<IComplaint[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { user } = useAuth();
  
  const paginationLimit = 4;

  useEffect(()=>{

    if(!user){
      return;
    }

    api.get(`/complaints/${sourceType}/${sourceId}?page=${pageNumber}&limit=${paginationLimit}`,
      {
        headers: { Authorization: `Bearer ${user.token}`
      }
    })
    .then((response) => {
        const loadedComplaints = (response.data.complaints);
        const total = Math.ceil(response.data.total / paginationLimit);
        setTotalPages(total);
        setComplaints(loadedComplaints)});
    
  },[sourceType,sourceId,pageNumber,user]);

  function handleDeleteComplaint(districtId:string) {
    if(window.confirm("Deseja apagar esta reclamação?")){
      api.delete(`/complaints/${districtId}`,
      {headers: { Authorization: `Bearer ${user?.token}` }})
      .then((response) => {
        window.location.reload();
      })
    }
  }
  
  return(
    <>
      <Container>
        {complaints.map((complaint)=>{
          return(
            <ComplaintItem 
              key={complaint.id}
              complaintData={complaint} 
              handleDeleteComplaint={handleDeleteComplaint}
            />
          )
        })}  
      </Container>

      <PaginationCursor 
        currentPage={pageNumber} 
        totalPages= {totalPages} 
        setPage={setPageNumber}
      />
    </>
  )
}

export default ComplaintsList;