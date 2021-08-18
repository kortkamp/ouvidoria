import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

const DistrictList = (): JSX.Element => {

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
        <h2>Escolha um distrito para iniciar uma reclamação</h2>
      </div>
      <ul>
        {districts.map((district) => (
          <li key={district.id}>
            <h3>{district.name}</h3>
            <div>
              <span>4 reclamaçoes abertas</span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default DistrictList;