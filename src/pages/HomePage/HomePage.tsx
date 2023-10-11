import { Box } from '@mantine/core';

import { useEffect, useRef } from 'react';
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
  // const pageAbleRef = useRef(null);
  const containerPageRef = useRef(null);
  // const { setHomePageScroll } = useAppStore();

  const loadPageAble = async () => {
    // @ts-ignore
    const Pageable = (await import('pageable')).default;
    const pageAble = new Pageable(containerPageRef.current, {
      pips: true,
      animation: 500,
      delay: 100,
      throttle: 200,
      swipeThreshold: 200,
      orientation: 'vertical',

      infinite: false,

      events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: false, // enable / disable mouse drag scrolling
        touch: false, // enable / disable touch / swipe scrolling
        keydown: false, // enable / disable keyboard navigation
      },
      easing: function (
        currentTime: number,
        startPos: number,
        endPos: number,
        interval: number
      ) {
        // the easing function used for the scroll animation
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
    });
    const lethargy = new Lethargy.Lethargy();
    function fpScroll(e: any) {
      console.log('runnnnnnnnn', lethargy.check(e), pageAble);
      e.preventDefault();
      e.stopPropagation();
      if (lethargy.check(e) !== false) {
        if (lethargy.check(e) == 1) {
          pageAble.prev();
        } else if (lethargy.check(e) == -1) {
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
  };

  useEffect(() => {
    loadPageAble();
    // pageAbleRef.current = pageAble;
    // setHomePageScroll && setHomePageScroll(pageAble);
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
