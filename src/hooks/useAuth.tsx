import {
  createContext, useEffect, useState, ReactNode, useContext,
} from 'react';
import { decode } from 'jsonwebtoken'
import { api } from '../services/api';
import { useHistory } from 'react-router-dom'

import { LoginModal } from '../components/LoginModal'


interface IUser {
  name: string;
  admin: boolean;
  token: string;
}
interface ILoginData {
  email:string;
  password: string;
}

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  user: IUser|undefined;

  authenticate: (login: ILoginData) => Promise<IAuthReturn>;
  logout: () => void;
  handleOpenLoginModal: () => void;
}

interface IAuthReturn {
  status: number;
  message: string;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export function AuthProvider({ children }:IAuthProviderProps) {
  const history = useHistory();
  const [user, setUser] = useState<IUser|undefined>();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  // load from storage----
  useEffect(() => {
    const storagedUser = localStorage.getItem('@ouvidoria:user');

    

    
    if (storagedUser) {
      try{
        const decodedUser = decode(JSON.parse(storagedUser).token)
        console.log(decodedUser)
        setUser(JSON.parse(storagedUser));
      }catch(err){

      }
    }

  }, []);

  async function authenticate(loginInput:ILoginData) {
    try{
      const response = await api.post('/login', { ...loginInput });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('@ouvidoria:user', JSON.stringify(userData))
      return { status:response.status, message: ''};

    }catch(err){
      return { 
        status: err.response?.status, 
        message:err.response?.data.message || 'Error: NetworkError',
      };
    } 
  }

  async function logout(){
    setUser(undefined);
    localStorage.removeItem('@ouvidoria:user');
    
    history.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, authenticate, logout, handleOpenLoginModal }}>
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}