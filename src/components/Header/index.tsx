import React, { useEffect, useState } from 'react';
import { Container, TitleArea, UserArea } from './styles';

import megaphoneImg from '../../assets/megaphone.svg'

interface IUser {
  name: string;
  admin:boolean;
  token:string;
}

interface IHeaderProps {
  onLogin: () => void;
}

const Header = ({ onLogin }:IHeaderProps): JSX.Element => {

  const [user,setUser] = useState<IUser>(() => {
    const storagedUser = localStorage.getItem('@ouvidoria:user');

    if (storagedUser) {
      return JSON.parse(storagedUser);
    }
    return {};
  });

  useEffect(() => {
    //get user from localstorage
  }, []);
  
  return (
    <Container>
      <div>
        <TitleArea>
          <img src={megaphoneImg} alt="Imagem de megafone" />
          <span>Sistema de Ouvidoria</span>
        </TitleArea>
        <UserArea>
          <button type='button' onClick={onLogin}>
            <span>{user.name || 'fazer login'}</span>
          </button>
        </UserArea>
      </div>
    </Container>
  );
};

export default Header;