import React from 'react';
import { useStyles } from './styles';

import banner0 from '@/assets/images/lvhd-0.png';
import banner1 from '@/assets/images/lvhd-1.png';
import banner2 from '@/assets/images/lvhd-2.png';
import banner3 from '@/assets/images/lvhd-3.png';
import banner4 from '@/assets/images/lvhd-4.png';
import sanXuat from '@/assets/images/san-xuat.png';

import { motion } from 'framer-motion';

const ActivityNew = () => {
  const [active, setActive] = React.useState('design');
  const { classes } = useStyles(active);

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div className={`w-full h-full relative ${classes.backdrop}`}>
        <img
          src={banner0}
          alt=""
          className="w-full h-full"
          style={{ objectFit: 'contain' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 4rem',
            paddingBottom: '2rem',
          }}
        >
          <div>Activity</div>
          <div className="flex space-x-4 items-end">
            <div className="w-[300px] h-[175px]">
              <img
                src={sanXuat}
                alt=""
                className="w-full h-full"
                style={{ filter: 'grayscale(0.7)' }}
              />
            </div>
            <div className="w-[300px] h-[200px]">
              <img src={sanXuat} alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[200px]">
              <img src={sanXuat} alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[200px]">
              <img src={sanXuat} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityNew;
