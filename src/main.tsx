import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '@themes/tailwind.css';
import { router } from '@router/routes.tsx';
import { keycloak } from '@utils/authentication';
import { hasAccess } from '@api/authentication.api';
import setupI18n from '@translation/setupI18n';
import { ForbiddenPage } from './forbiddenPage';
import { getDataLocalStorage, saveDataLocalStorage } from '@utils/localStorage';
import { ETheme } from '@shared/enums';

setupI18n();

keycloak
  .init({
    onLoad: 'login-required',
    checkLoginIframe: false,
  })
  .then(async (authenticated: boolean) => {
    const themeMode = getDataLocalStorage('themeMode');
    if (themeMode === null) {
      saveDataLocalStorage('themeMode', ETheme.dark);
      document.documentElement.classList.add(ETheme.dark);
    }

    if (themeMode === ETheme.light) {
      document.documentElement.classList.remove(ETheme.dark);
    }

    if (themeMode === ETheme.dark) {
      document.documentElement.classList.add(ETheme.dark);
    }

    if (authenticated) {
      // DISPATCH THE USER
      try {
        await hasAccess();
        // Render the application
        ReactDOM.createRoot(document.getElementById('root')!).render(
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        );
      } catch (error) {
        // Render Forbidden page
        ReactDOM.createRoot(document.getElementById('root')!).render(
          <ForbiddenPage />
        );
      }
    }
  })
  .catch((error: unknown) => {
    throw new Error(`Cannot get response from keycloak.init : ${error}`);
  });
