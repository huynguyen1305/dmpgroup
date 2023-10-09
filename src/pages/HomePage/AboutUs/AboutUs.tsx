import image1 from '@/assets/images/about-us-1.jpg';
import image2 from '@/assets/images/about-us-2.jpg';

import styles from './AboutUs.module.scss';
import { Link } from 'react-router-dom';

import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

const AboutUs = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
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
        <div
          style={{
            width: '50%',
            height: '100%',
          }}
        >
          <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
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
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          style={{
            width: '50%',
            padding: '0 3rem',
            height: 'calc(100% - 300px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 style={{ fontSize: '3vw', fontWeight: '500' }}>VỀ CHÚNG TÔI</h2>
          <p style={{ color: '#262626' }}>
            Từ ngày thành lập 2010 và phát triển đến nay, DPM đã vượt qua hàng
            ngàn thách thức, khắc phục mọi khó khăn để khẳng định mình là một
            trong những nhà sản xuất và lắp ghép các sản phẩm bê tông dự ứng lực
            đúc sẵn hàng đầu hiện nay. Chúng tôi không chỉ đo lường thành công
            bằng số lượng công trình hoàn thành, mà còn bằng khả năng tạo ra giá
            trị cho đối tác, khách hàng, và xã hội. Với phương châm “Phát triển
            cùng bạn, Thịnh vượng sẽ chia,” Chúng tôi cam kết kiến tạo những
            công trình đáp ứng mọi tiêu chuẩn đề ra của các chủ đầu tư, các tổng
            thầu về An Toàn, Chất lượng, Thẩm mỹ, Tiến độ và Giá thành. Chân
            thành cảm ơn sự tin tưởng và ủng hộ từ phía đối tác, khách hàng, và
            cộng đồng. Hãy cùng chúng tôi tiến bước vào những hành trình xây
            dựng tương lai thịnh vượng và bền vững
          </p>
          <div className={styles.buttonMore}>
            <Link to="/gioi-thieu">Xem thêm</Link>
          </div>
          <div style={{ marginTop: 'auto', height: '300px' }}>
            <div style={{ height: '300px' }}>khách hàng & đối tác</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
