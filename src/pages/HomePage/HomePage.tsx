import { Box } from '@mantine/core';
import useIsBigScreen from '../../hooks/useIsBigScreen';
import { useLayoutEffect, useRef } from 'react';
import Welcome from './Welcome/Welcome';
import AboutUs from './AboutUs/AboutUs';
// @ts-ignore
import PageAble from 'pageable';

const HomePage = () => {
  const isDesktop = useIsBigScreen();
  console.log('isDesktop', isDesktop);
  const pageAble = useRef(null);

  useLayoutEffect(() => {
    pageAble.current = new PageAble('#containerPage', {
      pips: true,
      animation: 500,
      delay: 100,
      throttle: 50,
      orientation: 'vertical',
      swipeThreshold: 50,
      freeScroll: false,
      navPrevEl: true,
      navNextEl: true,
      infinite: false,

      events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: false, // enable / disable mouse drag scrolling
        touch: false, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
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
      <div id="containerPage">
        <div data-anchor="welcome-section">
          <Welcome />
        </div>
        <div data-anchor="about-us">
          <AboutUs />
        </div>
        <div data-anchor="Page 3">Page 3</div>
        <div data-anchor="Page 4">Page 4</div>
      </div>
    </Box>
  );
};

export default HomePage;
