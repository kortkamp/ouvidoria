import { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import backgroundImg from '../../assets/background.jpg'
import { useAuth } from '../../hooks/useAuth';
import {Container} from './styles';
import { api } from '../../services/api';


const Register = ():JSX.Element => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [submitSucess, setSubmitsucess] = useState(false);

  const { user } = useAuth();



  async function handleSubmit(event:FormEvent) {
    event.preventDefault();

    
    

  }
  return (
    <>
      <Header />
      <Container style={{ backgroundImage: `url(${backgroundImg})` }}>
        <form onSubmit={handleSubmit}>
          <h2>Cadastro de Bairros</h2>
          <div className='errorMessage'>
            <span>{message}</span>
          </div>
          <input 
            type="text" 
            name="name" 
            id="name"
            placeholder="nome" 
            value={name}
            onChange={(event) => setName(event.target.value)} 
          />
          
          <input 
            type="text" 
            name="image" 
            id="name"
            placeholder="url imagem" 
            value={image}
            onChange={(event) => setName(event.target.value)} 
          />
          
          

          
          <button type="submit">Registrar</button>
        </form>
      </Container>
    </>
  )
}


export default Register;