import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import useAppStore from '@/store/appStore';
import { useLayoutEffect, useRef } from 'react';
import bgVideo from '@/assets/images/logo_nobg_com.mp4';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AppLayout = () => {
  const { setFirstLoad } = useAppStore();

  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useLayoutEffect(() => {
    if (videoContainerRef.current && videoRef.current) {
      videoRef.current.playbackRate = 1.2;
      videoRef.current.play();

      videoRef.current.addEventListener(
        'ended',
        () => {
          console.log('aaaaaaa');
          videoContainerRef.current?.classList.add('slideOut');
          setFirstLoad && setFirstLoad(false);
        },
        false
      );
      // setTimeout(() => {
      //   // videoRef.current.stop();
      //   videoContainerRef.current?.classList.add('slideOut');
      //   setFirstLoad && setFirstLoad(false);
      // }, 7000);
    }
  }, []);
  return (
    <>
      <div
        ref={videoContainerRef}
        style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          position: 'fixed',
          inset: '0',
          zIndex: 100000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <video
          autoPlay
          muted
          controls={false}
          id="bgVideo"
          ref={videoRef}
          preload={'auto'}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <AppHeader />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
