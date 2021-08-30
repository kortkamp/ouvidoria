import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ComplaintButton from '../../components/ComplaintButton';
import ComplaintsList from '../../components/ComplaintsList';
import Header from '../../components/Header';
import { Container } from './styles';
import { useAuth } from '../../hooks/useAuth'

type DistrictParams = {
  id:string;
}



const District = (): JSX.Element => {

  const {user} =useAuth();
  
  const params = useParams<DistrictParams>();
  const userId = params.id;

  useEffect(()=>{
    
  },[]);


  return (
    <>
      <Header />
      <Container>
        <div className='districtHeader'>
          <h2>Usuário {user?.name}</h2>
          <ComplaintButton />
        </div>
        <ComplaintsList sourceType='user' sourceId={userId}/>
      </Container>
    </>
  )
}

export default District;