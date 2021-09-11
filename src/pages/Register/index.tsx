import { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import backgroundImg from '../../assets/background.jpg'
import { useAuth } from '../../hooks/useAuth';
import {Container} from './styles';
import { api } from '../../services/api';


const Register = ():JSX.Element => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState('');
  const [submitSucess, setSubmitsucess] = useState(false);

  const { user } = useAuth();

  function validate(){
    

    return 'erro de teste';
  }

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();

    const validateError = validate();
    if(validateError){
      setMessage(validateError);
      return;
    }

    api.post('users', {
      name,
      email,
      admin,
      password
    },
    {
      headers: { Authorization: `Bearer ${user?.token}`
    }})
    .then((response)=>{
      console.log(response);
    });

  }
  return (
    <>
      <Header />
      <Container style={{ backgroundImage: `url(${backgroundImg})` }}>
        <form onSubmit={handleSubmit}>
          <h2>Cadastro de usuário</h2>
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

          {user?.admin && 
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
          }
          <button type="submit">Registrar</button>
        </form>
      </Container>
    </>
  )
}


export default Register;