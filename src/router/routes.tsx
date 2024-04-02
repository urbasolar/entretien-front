import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@layouts/mainLayout';
import { LoginPage } from '@/pages/login/login';
import { getDataLocalStorage } from '@/utils/localStorage';
import { ProfilPage } from '@/pages/profil/profil';

const PriveateRoute = (props: { children: JSX.Element }) => {
  const { children } = props;
  return getDataLocalStorage('user') ? children : <Navigate to='/login' />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PriveateRoute>
        <Layout />
      </PriveateRoute>
    ),
    children: [
      {
        path: '/profil',
        element: <ProfilPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
