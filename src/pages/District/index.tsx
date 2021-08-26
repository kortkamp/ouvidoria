import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ComplaintsList from '../../components/ComplaintsList';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { Container } from './styles';

type DistrictParams = {
  id:string;
}

interface IDistrict {
  id:string;
  name: string;
}

const District = (): JSX.Element => {

  const [district,setDistrict] = useState<IDistrict>();
  
  const params = useParams<DistrictParams>();
  const districtId = params.id;

  useEffect(()=>{
    api.get(`/districts/${districtId}`)
      .then((response) => {
        setDistrict(response.data);
      }
    );
  },[districtId]);


  return (
    <>
      <Header />
      <Container>
        <div className='districtHeader'>
          <h2>Bairro {district?.name}</h2>
        </div>
        <ComplaintsList districtId={districtId}/>
      </Container>
    </>
  )
}

export default District;