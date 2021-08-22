import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from './styles';

type DistrictParams = {
  id:string;
}

const District = (): JSX.Element => {

  const params = useParams<DistrictParams>();

  const districtId = params.id;

  return (
    <>
      <Header />
      <Container>
        <p>{districtId}</p>
      </Container>
    </>
  )
}

export default District;