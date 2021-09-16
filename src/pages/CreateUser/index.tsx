import { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import backgroundImg from '../../assets/background.jpg'
import { useAuth } from '../../hooks/useAuth';
import {Container} from './styles';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';


const Register = ():JSX.Element => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState('');
  const [submitSucess, setSubmitsucess] = useState(false);

  const history = useHistory();

  const { user } = useAuth();

  function validate(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(name.length < 4){
      return 'O nome precisa ter ao menos 4 caracteres';
    }

    if(!re.test(String(email).toLowerCase())){
      return 'Email incorreto'
    }

    if(password.length < 6){
      return 'A senha precisa ter ao menos 6 caracteres'
    }

    if(password !== confirmationPassword){
      return 'Erro na confirmação da senha'
    }


    return '';
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
      setSubmitsucess(true);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmationPassword('');
      setMessage('');
      setAdmin(false);
    })
    .catch((error)=>{
      setMessage(error.message)
    });

  }
  return (
    <>
      <Header />
      <Container style={{ backgroundImage: `url(${backgroundImg})` }}>
        {!submitSucess ? 
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
        :
          <div>
            <h2>Usuário cadastrado com sucesso</h2>
            <button onClick={history.goBack}>Voltar</button>
          </div>
        } 
      </Container>
    </>
  )
}


export default Register;