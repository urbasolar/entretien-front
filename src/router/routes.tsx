import { createBrowserRouter } from 'react-router-dom';

import { DatabasePage, OverviewPage, ProjectsPage } from '@pages/index';
import { Navbar } from '@components/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/overview',
        element: <OverviewPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/database',
        element: <DatabasePage />,
      },
    ],
  },
]);
