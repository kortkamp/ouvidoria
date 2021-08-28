import React from 'react';
import { Container, TitleArea } from './styles';
import { useHistory } from 'react-router';

import megaphoneImg from '../../assets/megaphone.svg'

import UserTooltip from '../UserTooltip';

const Header = (): JSX.Element => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <TitleArea onClick={()=>{history.push('/')}}>
          <img src={megaphoneImg} alt="Imagem de megafone" />
          <span>Sistema de Ouvidoria</span>
        </TitleArea>

        <UserTooltip />
      </div>
    </Container>
  );
};

export default Header;