import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
