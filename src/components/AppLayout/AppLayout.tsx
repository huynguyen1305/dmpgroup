import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <div style={{ padding: '3rem' }}>aaaaaaaaaa</div>
    </>
  );
};

export default AppLayout;
