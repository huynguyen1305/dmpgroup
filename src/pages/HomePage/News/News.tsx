import { useMediaQuery } from '@mantine/hooks';
import CardNews from './CardNews/CardNews';

import customer1 from '@/assets/images/tin-tuc-6.jpg';
import bannerMedal from '@/assets/images/tin-tuc-1.jpg';
import banner1 from '@/assets/images/tin-tuc-4.jpg';
import banner2 from '@/assets/images/tin-tuc-2.jpg';
import banner3 from '@/assets/images/tin-tuc-3.jpg';
import banner4 from '@/assets/images/tin-tuc-7.jpg';

import { motion } from 'framer-motion';

const News = () => {
  const isHasRow = useMediaQuery('(min-width: 1400px)');
  const cardNews = [
    {
      key: 1,
      title: 'Tin tức 1 ',
      content: 'Nội dung tin tức 1',
      img: banner1,
      createAt: new Date(),
    },
    {
      key: 2,
      title:
        'Tin tức 2 Tin tức 1 Tin tức 1 Tin tức 1 Tin tức 1 Tin tức 1 Tin tức 1 tức 1 Tin tức 1 Tin tức 1 Tin tức 1 Tin tức ',
      content: 'Nội dung tin tức 2',
      img: banner4,
      createAt: new Date(),
    },
    {
      key: 3,
      title: 'Tin tức 3',
      content: 'Nội dung tin tức 3',
      img: bannerMedal,
      createAt: new Date(),
    },
    {
      key: 4,
      title: 'Tin tức 4',
      content: 'Nội dung tin tức 4',
      img: banner3,
      createAt: new Date(),
    },
    {
      key: 5,
      title: 'Tin tức 5',
      content: 'Nội dung tin tức 5',
      img: banner2,
      createAt: new Date(),
    },

    {
      key: 6,
      title: 'Tin tức 6',
      content: 'Nội dung tin tức 6',
      img: customer1,
      createAt: new Date(),
    },
  ];
  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <motion.h3
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              y: 100,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
          style={{
            width: '100%',
            height: '100%',

            color: 'black',
            fontSize: '3vw',
            fontWeight: '500',
            textTransform: 'capitalize',
            marginBottom: '8px',
          }}
        >
          Tin Tức
        </motion.h3>
        <div
          style={{
            flexShrink: '0',
            textDecoration: 'none',
            color: 'white',
            padding: '8px 1vw',
            backgroundColor: 'black',
            borderRadius: '4px',
            fontSize: '1vw',
            border: '4px solid white',
            cursor: 'pointer',
          }}
        >
          Xem thêm
        </div>
      </div>
      <div
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            margin: 'auto',
            display: 'grid',
            gap: '1.5rem',

            gridTemplateColumns: `${
              isHasRow ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)'
            }`,
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: {
                x: '-100%',
                opacity: 0,
              },
              visible: {
                x: 0,
                opacity: 1,
              },
            }}
            style={{ gridRow: '1 / span 2', gridColumn: '1 / span 2' }}
          >
            <CardNews item={cardNews[0]} />
          </motion.div>

          {isHasRow
            ? cardNews.slice(1, 6).map((item) => {
                return (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.7 }}
                    variants={{
                      hidden: {
                        x: '100%',
                        opacity: 0,
                      },
                      visible: {
                        x: 0,
                        opacity: 1,
                      },
                    }}
                    key={item.key}
                  >
                    <CardNews item={item} />
                  </motion.div>
                );
              })
            : cardNews.slice(1, 3).map((item) => {
                return (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={{
                      hidden: {
                        x: '100%',
                        opacity: 0,
                      },
                      visible: {
                        x: 0,
                        opacity: 1,
                      },
                    }}
                    key={item.key + Math.random()}
                  >
                    <CardNews item={item} />
                  </motion.div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default News;
