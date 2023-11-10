import banner5 from '@/assets/images/du-an-5.jpg';
import banner1 from '@/assets/images/du-an-1.jpg';
import banner2 from '@/assets/images/du-an-2.jpg';
import banner3 from '@/assets/images/du-an-3.jpg';
import banner4 from '@/assets/images/du-an-4.jpg';
import { Box } from '@mantine/core';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Contruct.module.scss';

import { useRef } from 'react';
const ContructNew = () => {
  const swiperRef = useRef(null);
  const items = [
    {
      key: 1,
      name: 'Nhà Máy Uniben',
      img: banner1,
    },
    {
      key: 2,
      name: 'SLP Xuyên Á',
      img: banner2,
    },
    {
      key: 3,
      name: 'SLP LONG HẬU Logistic GD2',
      img: banner3,
    },
    {
      key: 4,
      name: 'Công ty TNHH Paihong VN',
      img: banner4,
    },
    {
      key: 5,
      name: 'LOGOS LOGISTICS LONG AN',
      img: banner5,
    },
  ];
  return (
    <section style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '100px',
          zIndex: '10',
        }}
      >
        <h3
          style={{
            color: 'white',
            fontSize: '3vw',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginBottom: '0',
          }}
        >
          Dự án
        </h3>
        <h4
          style={{
            color: 'white',
            fontSize: '2.5vw',
            fontWeight: '500',
            textTransform: 'capitalize',
            marginBottom: '8px',
          }}
        >
          Nổi bật
        </h4>
      </div>
      <div className="w-full h-full">
        {/* <Swiper ref={swiperRef} freeMode spaceBetween={-100} grabCursor loop>
          <SwiperSlide className="h-[100vh]" style={{ width: '80%' }}>
            <img
              src={banner1}
              style={{
                width: '80%',
                height: '80%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="h-[100vh]" style={{ width: '80%' }}>
            <img
              src={banner2}
              style={{
                width: '80%',
                height: '80%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="h-[100vh]" style={{ width: '80%' }}>
            <img
              src={banner3}
              style={{
                width: '80%',
                height: '80%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </SwiperSlide>
        </Swiper> */}
        <Swiper
          spaceBetween={-150}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {/* Add SwiperSlide components with the images and texts from the current web page */}
          <SwiperSlide>
            <img
              src={banner1}
              alt="Philippe Pierga Design"
              style={{ padding: '100px' }}
            />
            <h2>Philippe Pierga Design</h2>
            <p>
              Philippe Pierga is a French designer who creates furniture,
              lighting, objects and spaces with a poetic and functional
              approach.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner1} alt="Lampadaire" style={{ padding: '100px' }} />
            <h2>Lampadaire</h2>
            <p>
              A floor lamp made of wood and metal, inspired by the shape of a
              tree. The lampshade can be rotated to adjust the direction of the
              light.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner1} alt="Table basse" style={{ padding: '100px' }} />
            <h2>Table basse</h2>
            <p>
              A low table made of wood and glass, with a geometric and
              minimalist design. The table can be used as a coffee table or a
              side table.
            </p>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </section>
  );
};

export default ContructNew;
