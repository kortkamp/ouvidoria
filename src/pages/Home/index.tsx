import DistrictList from "../../components/DistrictList";
import Header from "../../components/Header";
import { Container } from "./styles";

const Home = (): JSX.Element => {

  
  return(
    <>
      <Header />
      <Container>
        <DistrictList />
      </Container>
    </>
  )
}

export default Home;