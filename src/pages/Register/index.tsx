import { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import backgroundImg from '../../assets/background.jpg'
import {Container} from './styles';


const Register = ():JSX.Element => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [admin, setAdmin] = useState(false);

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();
    

  }
  return (
    <>
      <Header />
      <Container style={{ backgroundImage: `url(${backgroundImg})` }}>
        <form onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <input 
            type="text" 
            name="name" 
            id="name"
            placeholder="nome" 
            value={name}
            onChange={(event) => setName(event.target.value)} 
          />
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
          />
          
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="senha" 
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
          />
          <input 
            type="password" 
            name="confirmationPassword" 
            id="confirmationPassword" 
            placeholder="Confirme sua senha" 
            value={confirmationPassword}
            onChange={(event) => setConfirmationPassword(event.target.value)} 
          />
          <div>
            
            <input 
              type="checkbox" 
              name="admin" 
              id="admin" 
              checked={admin}
              onChange={(event) => setAdmin(event.target.checked)} 
            />
            <span>Admin</span>
          </div>

          <button type="submit">Registrar</button>
        </form>
      </Container>
    </>
  )
}


export default Register;