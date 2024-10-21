import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';
import { AuthProvider } from './context/authContext.tsx';

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
};
