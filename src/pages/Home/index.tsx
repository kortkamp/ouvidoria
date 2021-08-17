import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

const Home = (): JSX.Element => {

  interface IDistrict {
    id: number;
    name: string;
    custom_name:string;
  }

  const [districts, setDistricts] = useState<IDistrict[]>([]);

  useEffect(() => {
    api.get('/districts')
      .then((response) => setDistricts(response.data));
  }, []);

  return(
    <Container>
      <div>
        {districts.map((district) => (
          <div key={district.id}>
            <h3>{district.name}</h3>
            <div>
              <span>4 reclamaçoes abertas</span>
            </div>
          </div>
        ))}
        
      </div>
    </Container>
  )
}

export default Home;