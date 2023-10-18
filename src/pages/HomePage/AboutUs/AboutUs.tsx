import styles from './AboutUs.module.scss';
import { Link } from 'react-router-dom';

import { Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

// import looper from '@/assets/images/looper2.mp4';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import testImage from '@/assets/images/test1.png';

const imageLists = [
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Thien-An.jpg',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/TVS.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/ATAD.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/BMB.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Dai-dung.jpg',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/bt6-1.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/CC1.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Coteccons_Logo.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/logo_hoa_phat_moi_JJUT.jpg',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Logo_ricons_slogan.jpg',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/MGD-n.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/MHT.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/NPH.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Printing-Newtecons-Horizontal-Slogan-1536x1086.jpg',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Sol.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Tuan-Le.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/VAS.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/xuan-mai-corp-logo.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/ATC.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Hoa-Binh.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Kajima.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/LOGO-QUANG-MINH-STEEL-METAL.jpg',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Logo-Phan-Vu-Group.webp',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/obayashi.png',
  },
  {
    image:
      'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/shimizu-corporation-vector-logo-small.png',
  },
];

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useLayoutEffect(() => {
    if (videoRef.current) {
      // videoRef.current.style
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.controls = false;

      videoRef.current.playbackRate = 0.88;
      videoRef.current.play();
    }
  }, []);
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: `url(${testImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
      className={styles.aboutUs}
    >
      <div
        style={{
          position: 'absolute',
          inset: '0',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '60%',
            padding: '80px',
            transform: 'translateY(-10px)',
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
              color: '#EEEEEE',
            }}
          >
            Về Chúng tôi
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            style={{ color: '#EEEEEE', fontSize: '1vw', marginTop: '8px' }}
          >
            Từ ngày thành lập 2010 và phát triển đến nay, DPM đã vượt qua hàng
            ngàn thách thức, khắc phục mọi khó khăn để khẳng định mình là một
            trong những nhà sản xuất và lắp ghép các sản phẩm bê tông dự ứng lực
            đúc sẵn hàng đầu hiện nay.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            style={{ color: '#EEEEEE', fontSize: '1vw', marginTop: '8px' }}
          >
            Chúng tôi không chỉ đo lường thành công bằng số lượng công trình
            hoàn thành, mà còn bằng khả năng tạo ra giá trị cho đối tác, khách
            hàng, và xã hội. Với phương châm “Phát triển cùng bạn, Thịnh vượng
            sẽ chia,” Chúng tôi cam kết kiến tạo những công trình đáp ứng mọi
            tiêu chuẩn đề ra của các chủ đầu tư, các tổng thầu về An Toàn, Chất
            lượng, Thẩm mỹ, Tiến độ và Giá thành.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            style={{ color: '#EEEEEE', fontSize: '1vw', marginTop: '8px' }}
          >
            Chân thành cảm ơn sự tin tưởng và ủng hộ từ phía đối tác, khách
            hàng, và cộng đồng. Hãy cùng chúng tôi tiến bước vào những hành
            trình xây dựng tương lai thịnh vượng và bền vững.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            style={{ color: '#EEEEEE', fontSize: '1vw', marginTop: '16px' }}
          >
            Chủ tịch hội đồng quản trị.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            style={{ color: '#EEEEEE', fontSize: '1vw' }}
          >
            Lê Năng Minh
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            {/* <IconArrowBarToRight /> */}
            <Link
              to="/gioi-thieu"
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '8px 1vw',
                backgroundColor: 'black',
                borderRadius: '4px',
                fontSize: '1vw',
                border: '4px solid white',
              }}
            >
              Xem thêm
            </Link>
          </motion.div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          zIndex: 2,
          width: '100%',
          height: '100px',
          display: 'flex',
          background: 'white',
          // justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            padding: '0 3rem',
            textTransform: 'capitalize',
            fontSize: '1.5rem',
            fontWeight: '600',
            borderRight: '1px solid black',
            flexShrink: 0,
          }}
        >
          khách hàng & đối tác
        </div>
        <Swiper
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop
          modules={[Autoplay]}
          slidesPerView={5}
          // grabCursor
          style={{
            height: '100px',
            position: 'relative',
            userSelect: 'none',
            padding: '16px',
          }}
          onSwiper={(swiper: any) => {
            console.log(swiper.slidesEl);
            swiper.slidesEl.style.transitionTimingFunction = 'linear';
          }}
        >
          {imageLists.map((item) => (
            <SwiperSlide key={item.image}>
              <img
                src={item.image}
                alt="logo"
                style={{
                  width: '180px',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUs;
