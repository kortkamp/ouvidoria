import React, { useState } from 'react';
import Modal from 'react-modal'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { LoginModal } from './components/LoginModal'

import Routes from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header onLogin={handleOpenLoginModal}/>
        <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
