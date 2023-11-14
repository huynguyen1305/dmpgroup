import ReactDOM from 'react-dom/client';

import AppLayout from './components/AppLayout/AppLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { QueryClientProvider } from '@tanstack/react-query';
import AppThemeProvider from './configs/mantineTheme';
import './global.scss';
import { queryClient } from './configs/queryClient';
import AboutPage from './pages/AboutPage/AboutPage';
import ActivePage from './pages/ActivePage/ActivePage';
// import ActivePageThietKe from './pages/ActivePage/ActivePageThietKe';
// import ActivePageSanXuat from './pages/ActivePage/ActivePageSanXuat';
// import ActivePageVanChuyen from './pages/ActivePage/ActivePageVanChuyen';
// import ActivePageLapDat from './pages/ActivePage/ActivePageLapDat';
import DuAnPage from './pages/DuAnPage/DuAnPage';
import DuAnDetail from './pages/DuAnPage/DuAnDetail';
import SanXuatNew from './pages/ActivePage/SanXuatNew';
import ThietKeNew from './pages/ActivePage/ThietKeNew';
import VanChuyenNew from './pages/ActivePage/VanChuyenNew';
import LapDungNew from './pages/ActivePage/LapDungNew';
import ActivePageLapDat from './pages/ActivePage/ActivePageLapDat';

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
        path: '/linh-vuc-hoat-dong',
        element: <ActivePage />,
      },
      {
        path: '/linh-vuc-hoat-dong/thiet-ke',
        element: <ThietKeNew />,
      },
      {
        path: '/linh-vuc-hoat-dong/thiet-ke-1',
        element: <ActivePageLapDat />,
      },
      {
        path: '/linh-vuc-hoat-dong/san-xuat',
        element: <SanXuatNew />,
      },
      {
        path: '/linh-vuc-hoat-dong/van-chuyen',
        element: <VanChuyenNew />,
      },
      {
        path: '/linh-vuc-hoat-dong/lap-dung',
        element: <LapDungNew />,
      },
      {
        path: '/du-an',
        element: <DuAnPage />,
      },
      {
        path: '/du-an/:value',
        element: <DuAnDetail />,
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
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
