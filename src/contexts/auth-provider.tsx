import React, {
  ReactNode,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { AuthForm, User } from 'interfaces';
import * as auth from '../auth-provider';
import { useMount } from 'utils/hooks';
import { http } from 'utils/http';

export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    user = await http('me', { token: token });
  }
  return user;
};

const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => void;
    }
  | undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProdiver = ({ children }: { children: ReactNode }) => {
  const app = useRef(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => {
    bootstrapUser().then((user) => {
      setUser(user);
      app.current = true;
    });
  });

  if (!app.current) {
    return <div>loading...</div>;
  }

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth need used within AuthProdiver');
  }

  return context;
};
