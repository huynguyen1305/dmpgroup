import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';
import styles from './Welcome.module.scss';
import { Box } from '@mantine/core';
// import bannerMedal from '@/assets/images/home-banner-medal.jpg';
import bannerTest from '@/assets/images/banner-test12.jpg';
import banner1 from '@/assets/images/6.jpg';
import banner2 from '@/assets/images/3.jpg';
import banner3 from '@/assets/images/4.jpg';
import banner4 from '@/assets/images/5.jpg';
// import { PaginationOptions } from 'swiper/types';
import { useLayoutEffect, useRef } from 'react';

const Welcome = () => {
  const progressCircle: any = useRef(null);
  const progressContent: any = useRef(null);
  const swiperRef = useRef(null);
  useLayoutEffect(() => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef?.current?.swiper?.autoplay?.stop();
    }
  }, []);
  return (
    <div
      onMouseEnter={() => {
        // @ts-ignore
        swiperRef?.current?.swiper?.autoplay?.start();
      }}
    >
      <Swiper
        ref={swiperRef}
        grabCursor
        pagination={true}
        modules={[Pagination, Autoplay]}
        className={styles.swiperContainer}
        slidesPerView={1}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 4000,
          // disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <Box className={styles.swiperItem}>
            <img src={bannerTest} className={styles.image} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className={styles.swiperItem}>
            <img src={banner1} className={styles.image} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className={styles.swiperItem}>
            <img src={banner2} className={styles.image} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className={styles.swiperItem}>
            <img src={banner3} className={styles.image} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className={styles.swiperItem}>
            <img src={banner4} className={styles.image} />
          </Box>
        </SwiperSlide>

        <div className={styles.autoplayProgress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Welcome;
