import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { Container } from './styles';

type DistrictParams = {
  id:string;
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
  user:{
    name:string;
    admin:boolean;
  }
  answers: IAnswer[];
}

interface IDistrict {
  id:string;
  name: string;
}

const District = (): JSX.Element => {

  const [district,setDistrict] = useState<IDistrict>();
  const [complaints, setComplaints] = useState<IComplaint[]>([]);
  const params = useParams<DistrictParams>();
  const districtId = params.id;

  useEffect(()=>{
    api.get(`/districts/${districtId}`)
      .then((response) => {
        
        setDistrict(response.data);
        setComplaints( response.data.complaints)});
  },[districtId]);


  return (
    <>
      <Header />
      <Container>
        <p>{district?.name}</p>
        <ul>
          {complaints.map((complaint)=>(
            <li key={complaint.id} >{complaint.message}</li>
          ))}  
        </ul>
      </Container>
    </>
  )
}

export default District;