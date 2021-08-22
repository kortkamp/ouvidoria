import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useHistory } from "react-router";

const DistrictList = (): JSX.Element => {

  const history = useHistory();

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

  function handleDistrictClick(districtId:number){
    history.push(`/district/${districtId}`)
  }

  return(
    <Container>
      <div>
        <h2>Escolha um bairro para iniciar uma reclamação</h2>
      </div>
      <ul>
        {districts.map((district) => (
          <li key={district.id} onClick={()=>{handleDistrictClick(district.id)}}>
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