import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Root } from '../layout/Root';
import { AuthRoot } from '../layout/AuthRoot';
import { DashboardPage } from '../pages/auth/DashboardPage';
import { TablePage } from '../pages/auth/TablePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/auth',
    element: <AuthRoot />,
    children: [
      {
        path: '/auth',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: 'table/',
            element: <TablePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
