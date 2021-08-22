import { useAuth } from '../../hooks/useAuth';
import { Container } from './styles';

import Tooltip from 'react-tooltip';

interface IUserTooltipProps  {
  openLoginModal: () => void;
}

const UserTooltip = (): JSX.Element => {

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
            {user?.name || 'entrar'}
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
                <button type='button' onClick={()=>{Tooltip.hide();hideTooltip()}}>Minhas reclamações</button>
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