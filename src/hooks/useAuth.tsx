import {
  createContext, useEffect, useState, ReactNode, useContext,
} from 'react';
import { api } from '../services/api';

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
}

interface IAuthReturn {
  status: number;
  message: string;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export function AuthProvider({ children }:IAuthProviderProps) {
  const [user, setUser] = useState<IUser>();

  // load from storage----
  useEffect(() => {
    const storagedUser = localStorage.getItem('@ouvidoria:user');

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }

  }, []);

  async function authenticate(loginInput:ILoginData) {
    try{
      const response = await api.post('/login', { ...loginInput });
      const userData = response.data;
      setUser(userData);
      return { status:response.status, message: ''};

    }catch(err){
      return { 
        status: err.response?.status, 
        message:err.response?.data.message || 'Error: NetworkError',
      };
    } 
  }

  async function logout(){
    setUser({} as IUser);
  }

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}