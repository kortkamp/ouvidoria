import { useAuth } from '../../hooks/useAuth';
import { Container } from './styles';

import Tooltip from 'react-tooltip';

const UserTooltip = (): JSX.Element => {

  const { user } = useAuth();

  return (
    <Container>
          <a data-tip data-for='userMenu' data-event='click'> 
            {user?.name || 'entrar'}
          </a>

          <Tooltip id='userMenu' place='bottom' type="light" effect='solid' clickable={true}>
            <button type='button' >
              login
            </button>
            <button type='button' >
              cadastrar
            </button>
          </Tooltip>
          
    </Container>
  );
};

export default UserTooltip;