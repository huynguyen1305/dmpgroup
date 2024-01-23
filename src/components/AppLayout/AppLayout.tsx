import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
