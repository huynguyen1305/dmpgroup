import banner5 from '@/assets/images/du-an-5.jpg';
import banner1 from '@/assets/images/du-an-1.jpg';
import banner2 from '@/assets/images/du-an-2.jpg';
import banner3 from '@/assets/images/du-an-3.jpg';
import banner4 from '@/assets/images/du-an-4.jpg';

import { Box } from '@mantine/core';

const Contruct = () => {
  // const [selected, setSelected] = React.useState('contruct1');
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
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          transition: 'all 0.5s ease-in-out',
        }}
      >
        {items.map((item) => {
          return (
            <Box
              key={item.key}
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transition: 'all 0.5s ease-out',

                overflow: 'hidden',
                '&:hover': {
                  width: '60%',
                  flexShrink: 0,
                  '& .slidTitle': {
                    background: 'rgba(0, 0, 0, 0) !important',
                    '& .slideText': {
                      transformOrigin: 'left bottom !important',
                      transform: 'rotate(0) !important',
                      padding: '1.5rem',
                    },
                  },
                  '& img': {
                    padding: '4px',
                  },
                },
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  zIndex: 0,
                  inset: 0,
                }}
              >
                <img
                  src={item.img}
                  alt="image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.5s ease-out',
                    transitionDelay: '0.1s',
                  }}
                />
              </div>
              <div
                className="slidTitle"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  zIndex: 0,
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.5s ease-out',
                  transitionDelay: '0.1s',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  className="slideText"
                  style={{
                    whiteSpace: 'nowrap',
                    transition: 'all 0.35s linear',

                    fontWeight: '800',
                    textTransform: 'uppercase',
                    fontSize: '3rem',

                    transform: 'rotate(-90deg)',
                    transformOrigin: 'left top',
                  }}
                >
                  {item.name}
                </div>
              </div>
            </Box>
          );
        })}
      </div>
    </section>
  );
};

export default Contruct;
