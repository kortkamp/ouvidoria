import React from 'react';
import { Container } from './styles';

const Header = (): JSX.Element => {
  
  return (
    <Container>
      <div>
        <p>Sistema de Ouvidoria</p>
      </div>
      <div>
        <p>não logado</p>
      </div>
    </Container>
  );
};

export default Header;