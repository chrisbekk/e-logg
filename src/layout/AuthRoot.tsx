import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { authContext } from '../context/authContext';

export const AuthRoot = () => {
  const { isAuth } = useContext(authContext);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
