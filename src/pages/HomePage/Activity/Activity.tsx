import React from 'react';
import { useStyles } from './styles';

import banner1 from '@/assets/images/home-banner-1.jpg';
import banner2 from '@/assets/images/home-banner-2.jpg';
import banner3 from '@/assets/images/home-banner-3.jpg';
import banner4 from '@/assets/images/home-banner-4.png';

const Activity = () => {
  const [active, setActive] = React.useState('design');
  const { classes } = useStyles(active);

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '10',
          color: 'white',
          fontSize: '3vw',
          fontWeight: '500',
          textTransform: 'capitalize',
        }}
      >
        <h3>Lĩnh Vực Hoạt động</h3>
      </div>
      <div
        style={{ position: 'absolute', inset: '0', zIndex: '0' }}
        className={classes.backdrop}
      >
        <img
          src={banner1}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: active === 'design' ? 1 : 0,
            visibility: active === 'design' ? 'visible' : 'hidden',
            transition: 'all 0.5s linear',
            position: 'absolute',
            inset: '0',
          }}
        />
        <img
          src={banner2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: active === 'product' ? 1 : 0,
            visibility: active === 'product' ? 'visible' : 'hidden',
            transition: 'all 0.5s linear',
            position: 'absolute',
            inset: '0',
          }}
        />
        <img
          src={banner3}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: active === 'logistic' ? 1 : 0,
            visibility: active === 'logistic' ? 'visible' : 'hidden',
            transition: 'all 0.5s linear',
            position: 'absolute',
            inset: '0',
          }}
        />
        <img
          src={banner4}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: active === 'setup' ? 1 : 0,
            visibility: active === 'setup' ? 'visible' : 'hidden',
            transition: 'all 0.5s linear',
            position: 'absolute',
            inset: '0',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: '0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: '25%',
            height: '100%',
            textAlign: 'center',
            borderRight: 'inset 0.5px #D5D5D5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: active === 'design' ? '600' : 'normal',
            opacity: active === 'design' ? 1 : 0.7,
          }}
          onMouseEnter={() => setActive('design')}
        >
          Công tác thiết kế
        </div>
        <div
          style={{
            width: '25%',
            height: '100%',
            textAlign: 'center',
            borderRight: 'inset 0.5px #D5D5D5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: active === 'product' ? '600' : 'normal',
            opacity: active === 'product' ? 1 : 0.7,
          }}
          onMouseEnter={() => setActive('product')}
        >
          Công tác sản xuất
        </div>
        <div
          style={{
            width: '25%',
            height: '100%',
            textAlign: 'center',
            borderRight: 'inset 0.5px #D5D5D5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: active === 'logistic' ? '600' : 'normal',
            opacity: active === 'logistic' ? 1 : 0.7,
          }}
          onMouseEnter={() => setActive('logistic')}
        >
          Công tác vận chuyển
        </div>
        <div
          style={{
            width: '25%',
            height: '100%',
            textAlign: 'center',
            // border: 'inset 1px #D5D5D5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: active === 'setup' ? '600' : 'normal',
            opacity: active === 'setup' ? 1 : 0.7,
          }}
          onMouseEnter={() => setActive('setup')}
        >
          Công tác lắp đặt
        </div>
      </div>
    </section>
  );
};

export default Activity;
