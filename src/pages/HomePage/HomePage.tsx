import { Box } from '@mantine/core';

import { useEffect, useRef } from 'react';
import Welcome from './Welcome/Welcome';
import AboutUs from './AboutUs/AboutUs';
// import Activity from './Activity/Activity';
// import Contruct from './Contruct/Contruct';
import FooterSection from './FooterSection/FooterSection';

import News from './News/News';
// @ts-ignore
import PageAble from 'pageable';
// import useAppStore from '@/store/appStore';
import { Lethargy } from 'lethargy-ts';
import ContructNew from './Contruct/ContructNew';
// import ActivityNew from './Activity/ActivityNew';
import { useLocation } from 'react-router-dom';
import Activity from './Activity/Activity';

const HomePage = () => {
  const pageAbleRef = useRef(null);
  const containerPageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (document && location.pathname === '/') {
      const pageAble = new PageAble(containerPageRef.current, {
        pips: true,
        animation: 1000,
        delay: 100,
        orientation: 'vertical',
        infinite: false,
        events: {
          wheel: false, // enable / disable mousewheel scrolling
          mouse: false, // enable / disable mouse drag scrolling
          touch: true, // enable / disable touch / swipe scrolling
          keydown: true, // enable / disable keyboard navigation
        },
      });
      var lethargy = new Lethargy({
        sensitivity: 90,
        delay: 600,
        inertiaDecay: 60,
      });
      function fpScroll(e: any) {
        e.preventDefault();
        e.stopPropagation();

        const check = lethargy.check(e).toString();
        // @ts-ignore
        const tmp = lethargy?.previousEvents[0]?.deltaY;

        if (check === 'true') {
          if (tmp < 0) {
            pageAble.prev();
          } else if (tmp > 0) {
            pageAble.next();
          }
        }
      }

      document.addEventListener('mousewheel', fpScroll, {
        passive: false,
      });
      document.addEventListener('DOMMouseScroll', fpScroll, {
        passive: false,
      });
      document.addEventListener('wheel', fpScroll, {
        passive: false,
      });
      document.addEventListener('MozMousePixelScroll', fpScroll, {
        passive: false,
      });

      pageAbleRef.current = pageAble;
      return () => {
        document.removeEventListener('mousewheel', fpScroll);
        document.removeEventListener('DOMMouseScroll', fpScroll);
        document.removeEventListener('wheel', fpScroll);
        document.removeEventListener('MozMousePixelScroll', fpScroll);
        pageAbleRef.current = null;
        pageAble.destroy();
      };
    }
  }, []);

  return (
    <Box
      sx={{
        background: '#EFEFEF',
        '& .pg-wrapper': {
          padding: '0 !important',
        },
      }}
    >
      <div id="containerPage" ref={containerPageRef}>
        <div data-anchor="welcome-section" id="welcome-section">
          <Welcome />
        </div>
        <div
          data-anchor="about-us"
          id="about-us"
          style={{ background: '#EFEFEF' }}
        >
          <AboutUs />
        </div>
        <div data-anchor="activity" id="activity">
          <Activity />
        </div>
        <div data-anchor="news" id="news" style={{ background: '#EFEFEF' }}>
          <News />
        </div>
        <div data-anchor="contruct" id="contruct">
          {/* <Contruct /> */}
          <ContructNew />
        </div>
        <div data-anchor="footer-section" id="footer-section">
          <FooterSection />
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
