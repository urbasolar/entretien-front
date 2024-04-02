import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@layouts/mainLayout';
import { LoginPage } from '@/pages/login/login';

const PriveateRoute = (props: { children: JSX.Element }) => {
  const { children } = props;
  return false ? children : <Navigate to='/login' />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PriveateRoute>
        <Layout />
      </PriveateRoute>
    ),
    children: [],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
