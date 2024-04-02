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

setupI18n();

if (!getDataLocalStorage('user')) {
  saveDataLocalStorage('user', null);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
