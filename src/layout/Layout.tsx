import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';

import '../index.css';

export const Layout = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(authContext);

  return (
    <div className="grid__layout__container">
      <header className="grid__layout__header">header</header>
      <aside className="grid__layout__sidebar">SIDEBAR</aside>
      <main className="grid__layout__main">
        <Outlet />
      </main>
    </div>
  );
};
