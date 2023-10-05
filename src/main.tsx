import ReactDOM from 'react-dom/client';

import AppLayout from './components/AppLayout/AppLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import AppThemeProvider from './configs/mantineTheme';
import './global.scss';
import { queryClient } from './configs/queryClient';
import AboutPage from './pages/AboutPage/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/dashboard" replace />,
      // },
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
      {
        path: '/gioi-thieu',
        element: <AboutPage />,
      },

      {
        element: <PrivateRoute />,
        children: [
          // {
          //   path: '/:guildId/rank-customize',
          //   element: <RankCardCustom />,
          // },
          // {
          //   path: '/dashboard',
          //   element: <Dashboard />,
          // },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
