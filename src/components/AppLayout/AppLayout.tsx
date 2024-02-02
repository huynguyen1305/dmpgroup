import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";

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
