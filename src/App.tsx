import React from 'react';
import Modal from 'react-modal'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './hooks/useAuth';

import Routes from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
