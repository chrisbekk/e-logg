import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';

import '../index.css';
import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';

export const Layout = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(authContext);

  return (
    <div className="grid__layout__container text-white">
      <Header title="eLogg" />
      <Sidebar />
      <main className="grid__layout__main">
        <Outlet />
      </main>
    </div>
  );
};
