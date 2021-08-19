import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';


import { Container } from './styles';

interface ILoginModalProps {
  isOpen: boolean;
  onRequestClose:() => void;
}

export function LoginModal({ isOpen, onRequestClose }: ILoginModalProps) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function handleLogin(event:FormEvent) {
    event.preventDefault();


    onRequestClose();
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

        

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  );
}