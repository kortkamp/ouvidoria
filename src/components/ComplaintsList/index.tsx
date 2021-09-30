
import { useEffect, useState } from 'react';
import PaginationCursor from '../PaginationCursor';
import { api,getComplaints } from '../../services/api';
import {Container } from './styles';

// import { useAuth } from '../../hooks/useAuth';
import ComplaintItem, { IComplaint, IAnswer } from '../ComplaintItem';
import { useAuth } from '../../hooks/useAuth';


interface IComplaintsListProps {
  sourceType:'district'|'user'|'search';
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
    getComplaints({sourceType,sourceId,token: user.token, pageNumber,paginationLimit})
    .then((response) => {
        if(response){
          setTotalPages(response.total);
          setComplaints(response?.complaints)
        }
    });
    
  },[sourceType,sourceId,pageNumber,user]);

  function handleDeleteComplaint(districtId:string) {
    if(window.confirm("Deseja apagar esta reclamação?")){
      api.delete(`/complaints/${districtId}`,
        {
          headers: { Authorization: `Bearer ${user?.token}` 
        }
      })
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
              sourceType={sourceType}
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