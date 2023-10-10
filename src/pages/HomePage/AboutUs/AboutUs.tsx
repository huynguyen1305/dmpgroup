import image1 from '@/assets/images/about-us-1.jpg';
import image2 from '@/assets/images/about-us-2.jpg';

import styles from './AboutUs.module.scss';
import { Link } from 'react-router-dom';

import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

import { IconArrowBarToRight } from '@tabler/icons-react';

import customer1 from '@/assets/images/Clients-06-300x205.png';
import customer2 from '@/assets/images/Clients-24-300x205.png';
import customer3 from '@/assets/images/Clients-23-300x205.png';
import customer4 from '@/assets/images/Clients-22-300x205.png';
import customer5 from '@/assets/images/Clients-21-300x205.png';
import customer6 from '@/assets/images/Clients-20-300x205.png';
import customer7 from '@/assets/images/Clients-18-300x205.png';
import customer8 from '@/assets/images/Clients-09-300x205.png';
import customer9 from '@/assets/images/Clients-01-300x205.png';
import customer10 from '@/assets/images/Clients-04-300x205.png';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
      className={styles.aboutUs}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              x: '-100px',
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
          style={{
            width: '50%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Swiper
            grabCursor
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            effect={'fade'}
            modules={[Autoplay, Navigation]}
            style={{
              width: '100%',
              height: '100%',
              cursor: 'grab',
            }}
          >
            <SwiperSlide>
              <img
                src={image1}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <div
          style={{
            width: '50%',
            height: '100%',
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
              padding: '0 3rem',
            }}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  y: '100px',
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              style={{
                fontSize: '3vw',
                fontWeight: '500',
                textTransform: 'capitalize',
              }}
            >
              Về Chúng tôi
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.25 }}
              variants={{
                hidden: {
                  y: '50px',
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              style={{ color: '#262626' }}
            >
              Từ ngày thành lập 2010 và phát triển đến nay, DPM đã vượt qua hàng
              ngàn thách thức, khắc phục mọi khó khăn để khẳng định mình là một
              trong những nhà sản xuất và lắp ghép các sản phẩm bê tông dự ứng
              lực đúc sẵn hàng đầu hiện nay. Chúng tôi không chỉ đo lường thành
              công bằng số lượng công trình hoàn thành, mà còn bằng khả năng tạo
              ra giá trị cho đối tác, khách hàng, và xã hội. Với phương châm
              “Phát triển cùng bạn, Thịnh vượng sẽ chia,” Chúng tôi cam kết kiến
              tạo những công trình đáp ứng mọi tiêu chuẩn đề ra của các chủ đầu
              tư, các tổng thầu về An Toàn, Chất lượng, Thẩm mỹ, Tiến độ và Giá
              thành. Chân thành cảm ơn sự tin tưởng và ủng hộ từ phía đối tác,
              khách hàng, và cộng đồng. Hãy cùng chúng tôi tiến bước vào những
              hành trình xây dựng tương lai thịnh vượng và bền vững
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.25 }}
              variants={{
                hidden: {
                  y: '50px',
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              className={styles.buttonMore}
            >
              <IconArrowBarToRight />
              <Link to="/gioi-thieu">Xem thêm</Link>
            </motion.div>
          </div>
          <div
            style={{
              width: '100%',
              flexShrink: 0,
              height: '30%',
            }}
          >
            <div
              style={{
                padding: '0 3rem',
                textTransform: 'capitalize',
                fontSize: '1.5rem',
                fontWeight: '600',
              }}
            >
              khách hàng & đối tác
            </div>
            <Swiper
              autoplay={{
                delay: 60,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              navigation={{
                enabled: true,
              }}
              speed={2000}
              loop
              freeMode
              modules={[Autoplay, Navigation]}
              grabCursor
            >
              <SwiperSlide>
                <img
                  src={customer1}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer2}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer3}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer4}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer5}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer6}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer7}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer8}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer9}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={customer10}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
