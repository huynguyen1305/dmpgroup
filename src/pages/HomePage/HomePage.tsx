import { Box } from '@mantine/core';

import { useLayoutEffect, useRef } from 'react';
import Welcome from './Welcome/Welcome';
import AboutUs from './AboutUs/AboutUs';
import Activity from './Activity/Activity';
import Contruct from './Contruct/Contruct';
import FooterSection from './FooterSection/FooterSection';
import News from './News/News';
// @ts-ignore
import PageAble from 'pageable';
// import useAppStore from '@/store/appStore';
import Lethargy from 'lethargy';

const HomePage = () => {
  const pageAbleRef = useRef(null);
  const containerPageRef = useRef(null);

  useLayoutEffect(() => {
    if (window) {
      const pageAble = new PageAble(containerPageRef.current, {
        pips: true,
        animation: 700,
        delay: 100,
        orientation: 'vertical',
        infinite: false,
        events: {
          wheel: false, // enable / disable mousewheel scrolling
          mouse: false, // enable / disable mouse drag scrolling
          touch: false, // enable / disable touch / swipe scrolling
          keydown: false, // enable / disable keyboard navigation
        },
      });
      const lethargy = new Lethargy.Lethargy();
      function fpScroll(e: any) {
        e.preventDefault();
        e.stopPropagation();

        const check = lethargy.check(e).toString();

        if (check !== 'false') {
          if (check === '-1') {
            pageAble.next();
          } else if (check === '1') {
            pageAble.prev();
          }
        }
      }

      window.addEventListener('mousewheel', fpScroll, {
        passive: false,
      });
      window.addEventListener('DOMMouseScroll', fpScroll, {
        passive: false,
      });
      window.addEventListener('wheel', fpScroll, {
        passive: false,
      });
      window.addEventListener('MozMousePixelScroll', fpScroll, {
        passive: false,
      });

      pageAbleRef.current = pageAble;
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
          <Contruct />
        </div>
        <div
          data-anchor="footer-section"
          id="footer-section"
          style={{ background: '#898989' }}
        >
          <FooterSection />
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
