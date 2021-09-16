import { FormEvent, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { api } from '../../services/api';
import {useAuth} from '../../hooks/useAuth'

import { useHistory } from 'react-router-dom'

import {Container, Sucess} from './styles'
import backImg from '../../assets/back.svg'

interface IDistrict {
  id: number;
  name: string;
}

const Complaint = (): JSX.Element => {

  const {user} = useAuth();

  const history = useHistory();

  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [districtId, setDistrictId] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [submitSucess, setSubmitsucess] = useState(false);
  const [complaintId, setComplaintId] = useState('');

  useEffect(() => {
    api.get('/districts')
      .then((response) => setDistricts(response.data));
  }, []);

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();
    api.post('complaints', {
      district_id: districtId,
      message,
      image,
    },
    {
      headers: { Authorization: `Bearer ${user?.token}`
    }})
    .then((response)=>{
      setComplaintId(response.data.id)
      setSubmitsucess(true);
    });

  }

  return(
    <>
      <Header />
      {!submitSucess ? 
        <Container onSubmit={handleSubmit}>
          
          <h2>Iniciar uma reclamação</h2>
        
          <label htmlFor="district">Bairro:</label>
          <select 
            name="district" 
            id="district" 
            value={districtId}
            onChange={(event) => setDistrictId(event.target.value)} 

          >
            <option value="" disabled hidden>Escolha um bairro</option>
            {districts.map((district)=>(
              <option key={district.id} value={district.id}>{district.name}</option>
            ))}
          </select>

          <label htmlFor="message">Texto da reclamação:</label>
          <textarea 
            name="message" 
            id="message" 
            cols={30} 
            rows={10}
            placeholder="Escreva aqui a sua reclamação"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <input 
            type="text" 
            placeholder="[dev] link da imagem"
            value={image}
            onChange={(event) => setImage(event.target.value)} 
          />
          
          <button type="submit">Enviar Reclamação</button>
        </Container>
      :
      <Sucess>
        <h3>Obrigado por registrar sua reclamação</h3>
        <p>
          O número da sua reclamação é: {complaintId}
        </p>
        <button onClick={()=>history.goBack()}>
          <img src={backImg} alt="imagem de retornar" />
          <span>
            Voltar
          </span>
        </button>
      </Sucess>
      }
    </>

  )
}

export default Complaint;



