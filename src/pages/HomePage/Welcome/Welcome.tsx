import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import styles from './Welcome.module.scss';
import { Box } from '@mantine/core';
import bannerMedal from '@/assets/images/home-banner-medal.jpg';
import banner1 from '@/assets/images/home-banner-1.jpg';
import banner2 from '@/assets/images/home-banner-2.jpg';
import banner3 from '@/assets/images/home-banner-3.jpg';
import banner4 from '@/assets/images/home-banner-4.png';
import medal from '@/assets/images/medal.png';
import { PaginationOptions } from 'swiper/types';
import { useRef } from 'react';

const Welcome = () => {
  const pagination: PaginationOptions = {
    clickable: true,
  };
  const progressCircle: any = useRef(null);
  const progressContent: any = useRef(null);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      className={styles.swiperContainer}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      <SwiperSlide>
        <Box className={styles.swiperItem}>
          <div className={styles.swiperContent}>
            <img
              src={medal}
              style={{
                width: '250px',
                margin: '0 auto',
              }}
            />
            <h2 style={{ fontSize: '4vw', fontWeight: '600' }}>
              <span style={{ color: '#FE0000' }}>D</span>{' '}
              <span style={{ color: '#F0EA1F' }}>P</span>{' '}
              <span style={{ color: '#00FF00' }}>M</span>{' '}
              <span style={{ color: '#2775B9', fontSize: '2.7vw' }}>GROUP</span>
            </h2>
            <div
              style={{
                fontSize: '2vw',
                fontWeight: '600',
                textTransform: 'capitalize',
                color: 'white',
                filter: 'brightness(2)',
              }}
            >
              đơn vị tiên phong ứng dụng công nghệ bê tông dự ứng lực lắp ghép
              cho các công trình dân dụng và công nghiệp
            </div>
          </div>
          <img src={bannerMedal} className={styles.image} />
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
  );
};

export default Welcome;
