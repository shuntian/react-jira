import { ReactNode } from 'react';
import { AuthProdiver } from './auth-provider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProdiver>{children}</AuthProdiver>;
};
