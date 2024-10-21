import { useContext } from 'react';
import { authContext } from '../context/authContext';
import { Navigate } from 'react-router-dom';
import { SignInPage } from '../pages/SignInPage';

export const Root = () => {
  const { isAuth } = useContext(authContext);

  return isAuth ? <Navigate to="/auth" /> : <SignInPage />;
};
