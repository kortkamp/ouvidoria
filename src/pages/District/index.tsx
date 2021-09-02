import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ComplaintButton from '../../components/ComplaintButton';
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
  image: string;
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
          <ComplaintButton />
        </div>
        <ComplaintsList sourceType='district' sourceId={districtId}/>
      </Container>
    </>
  )
}

export default District;