import React from 'react';
import { Container, TitleArea, UserArea } from './styles';

import megaphoneImg from '../../assets/megaphone.svg'

const Header = (): JSX.Element => {
  
  return (
    <Container>
      <div>
        <TitleArea>
          <img src={megaphoneImg} alt="Imagem de megafone" />
          <span>Sistema de Ouvidoria</span>
        </TitleArea>
        <UserArea>
          <p>não logado</p>
        </UserArea>
      </div>
    </Container>
  );
};

export default Header;