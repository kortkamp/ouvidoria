import React from 'react';
import { Container, TitleArea } from './styles';
import { useHistory } from 'react-router';

import megaphoneImg from '../../assets/megaphone.svg'

import UserTooltip from '../UserTooltip';
import SearchBar from '../SearchBar';

const Header = (): JSX.Element => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <TitleArea onClick={()=>{history.push('/')}}>
          <img src={megaphoneImg} alt="Imagem de megafone" />
          <span>Sistema de Ouvidoria</span>
        </TitleArea>

        <div>
          <SearchBar />
          <UserTooltip />

        </div>
      </div>
    </Container>
  );
};

export default Header;