import { createContext, ReactNode, useState } from 'react';

const defaultValue = { isAuth: false, setIsAuth: (value: boolean) => {} };

export const authContext = createContext(defaultValue);

type AuthProviderProps = { children: ReactNode };
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(true);

  const value = { isAuth, setIsAuth };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
