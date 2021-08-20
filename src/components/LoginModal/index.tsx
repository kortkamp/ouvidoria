import React, { FormEvent, useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { useAuth } from '../../hooks/useAuth';


import { Container } from './styles';

interface ILoginModalProps {
  isOpen: boolean;
  onRequestClose:() => void;
}

interface IAuthReturn {
  status: number;
  message: string;
}

export function LoginModal({ isOpen, onRequestClose }: ILoginModalProps) {

  const {authenticate} = useAuth();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState<IAuthReturn>();

  useEffect(()=>{
    setError({
      status:0,
      message:''
    })
  },[email,password]);

  async function handleLogin(event:FormEvent) {
    event.preventDefault();

    const authReturn = await authenticate({email,password});

    if(authReturn.status === 200){
      onRequestClose();
    }else{
      setError(authReturn)
    }

  }

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleLogin}>
        <h2>Fazer Login</h2>
        <input
          placeholder="Seu Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Seu Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Fazer Login</button>

        <div>
          <span>{error?.message}</span>
        </div>

      </Container>
    </Modal>

  );
}