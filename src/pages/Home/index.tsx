import ComplaintButton from "../../components/ComplaintButton";
import DistrictList from "../../components/DistrictList";
import Header from "../../components/Header";
import { Container } from "./styles";

const Home = (): JSX.Element => {

  
  return(
    <>
      <Header />
      <Container>
        <div className='pageTitle'>
          <h2>Escolha um bairro ou clique em</h2>
          <ComplaintButton />
        </div>
        <DistrictList />
      </Container>
    </>
  )
}

export default Home;