import React from 'react';
import { Container, TitleArea } from './styles';

import megaphoneImg from '../../assets/megaphone.svg'

import UserTooltip from '../UserTooltip';


interface IHeaderProps {
  openLoginModal: () => void;
}

const Header = ({ openLoginModal }:IHeaderProps): JSX.Element => {

  
  return (
    <Container>
      <div>
        <TitleArea>
          <img src={megaphoneImg} alt="Imagem de megafone" />
          <span>Sistema de Ouvidoria</span>
        </TitleArea>

        <UserTooltip openLoginModal={openLoginModal}/>
      </div>
    </Container>
  );
};

export default Header;