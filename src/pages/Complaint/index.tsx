import { FormEvent, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { api } from '../../services/api';
import {Container} from './styles'
import {useAuth} from '../../hooks/useAuth'

interface IDistrict {
  id: number;
  name: string;
}

const Complaint = (): JSX.Element => {

  const {user} = useAuth();

  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [districtId, setDistrictId] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');

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
      headers: { Authorization: `bearer ${user?.token}` }
    }).then((response)=>{
      console.log(response.data)
    });

  }

  return(
    <>
      <Header />
      <Container onSubmit={handleSubmit}>
        
        <h2>Iniciar uma reclamação</h2>
       
        <label htmlFor="district">Selecione um bairro:</label>
        <select 
          name="district" 
          id="district" 
          value={districtId}
          onChange={(event) => setDistrictId(event.target.value)} 

        >
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
    </>

  )
}

export default Complaint;



