import { useAuth } from '../../hooks/useAuth';
import { Container } from './styles';

import Tooltip from 'react-tooltip';

interface IUserTooltipProps  {
  openLoginModal: () => void;
}

const UserTooltip = ({openLoginModal}:IUserTooltipProps ): JSX.Element => {

  const { user, logout } = useAuth();

  function handleLogin() {
    Tooltip.hide();
    openLoginModal();
  }
  function handleLogout(){
    Tooltip.hide();
    logout();
  }

  return (
    <Container>
          <a data-tip data-for='userMenu' data-event='click'> 
            {user?.name || 'entrar'}
          </a>

          <Tooltip 
            id='userMenu' 
            globalEventOff='click' 
            place='bottom' 
            type="light" 
            effect='solid' 
            clickable={true}
          >
            { user? 
              <>
                <button type='button' >Perfil</button>
                <button type='button' onClick={handleLogout}>Sair</button>
              </>
            : <>
                <button type='button' onClick={handleLogin}>Login</button>
                <button type='button' >Cadastrar</button>
              </>
            }
          </Tooltip>
          
    </Container>
  );
};

export default UserTooltip;