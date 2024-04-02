import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@router/routes.tsx';
import setupI18n from '@translation/setupI18n';
import '@themes/tailwind.css';
import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from './utils/localStorage';
import { UserContext } from './context';
import { useLogin } from './data/loginData';

setupI18n();

if (!getDataLocalStorage('user')) {
  saveDataLocalStorage('user', null);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContext.Provider value={useLogin}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);
