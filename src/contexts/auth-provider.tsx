import React, { ReactNode, useContext, useState } from 'react';
import { AuthForm, User } from 'interfaces';
import * as auth from '../auth-provider';
import { useAsync, useMount } from 'utils/hooks';
import { http } from 'utils/http';

export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('me', { token: token });
    user = data.user;
  }
  return user;
};

const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    run,
    isIdle,
    isLoading,
    data: user,
    setData: setUser,
  } = useAsync<User | null>();

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(async () => {
    const user = await run(bootstrapUser());
    setUser(user);
  });

  if (isIdle || isLoading) {
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
    throw new Error('useAuth need used within AuthProvider');
  }

  return context;
};
