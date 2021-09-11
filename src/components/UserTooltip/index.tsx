import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import Tooltip from 'react-tooltip';
import userImg from '../../assets/user.svg'

import { Container } from './styles';

const UserTooltip = (): JSX.Element => {

  const history = useHistory();
  const { user, logout,handleOpenLoginModal } = useAuth();

  function handleLogin() {
    
    handleOpenLoginModal();
    hideTooltip();
  }
  function handleLogout(){
    
    hideTooltip();
    logout();
  }
  function hideTooltip(){
    Tooltip.hide();
    const tip = document.getElementById('userMenuTooltip');
    tip?.classList.remove('show');
  }

  return (
    <Container>
          <a data-tip data-for='userMenuTooltip' data-event='click' >
            <img src={userImg} alt="logo de usuário" />
            <span>{user?.name || 'entrar'}</span>
          </a>

          <Tooltip 
            id='userMenuTooltip' 
            globalEventOff='click'
            place='bottom' 
            type="light" 
            effect='solid' 
            clickable={true}
          >
            { user? 
              <>
                <button type='button' >Perfil</button>
                {user.admin && <button type='button' onClick={() => history.push('/register')}>Cadastrar</button>}
                <button type='button' onClick={()=> history.push('/complaint')}>Iniciar Reclamação</button>
                <button type='button' onClick={()=> history.push(`/user/${user.id}`)}>Minhas reclamações</button>
                <button type='button' onClick={handleLogout}>Sair</button>
              </>
            : <>
                <button type='button' onClick={handleLogin}>Login</button>
                <button type='button' onClick={() => history.push('/register')}>Cadastrar</button>
              </>
            }
          </Tooltip>
          
    </Container>
  );
};

export default UserTooltip;