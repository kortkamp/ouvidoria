import {
  createContext, useEffect, useState, ReactNode, useContext,
} from 'react';
import { decode } from 'jsonwebtoken'
import { api } from '../services/api';
import { useHistory } from 'react-router-dom'

import { LoginModal } from '../components/LoginModal'


interface IUser {
  id:string;
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
  loadStoredUser: () => IUser|undefined;
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
    loadStoredUser();
  }, []);

  function loadStoredUser():IUser|undefined{
    const storedUser = localStorage.getItem('@ouvidoria:user');

    if (storedUser) {
      try{
        const decodedUser = decode(JSON.parse(storedUser))
        console.log(decodedUser)
        setUser(JSON.parse(storedUser));
        return(JSON.parse(storedUser));
      }catch(err){
        localStorage.removeItem('@ouvidoria:user');
      }
      return(undefined)
    }
  }

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
    <AuthContext.Provider value={{ user, loadStoredUser, authenticate, logout, handleOpenLoginModal }}>
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