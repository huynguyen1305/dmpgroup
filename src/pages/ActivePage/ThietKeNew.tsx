import { useEffect, useRef } from 'react';
// @ts-ignore
import PageAble from 'pageable';
// import useAppStore from '@/store/appStore';
import { Lethargy } from 'lethargy-ts';

import FooterSection from '../HomePage/FooterSection/FooterSection';
import { Box } from '@mantine/core';

import banner4 from '@/assets/images/lvhd-4.png';
import thietKe1 from '@/assets/images/thiet-ke-1.jpg';

import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function ThietKeNew() {
  const pageAbleRef = useRef(null);
  const containerPageRef = useRef(null);

  const item = [
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-2.jpg',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-3.png',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-4.png',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-1.jpg',
  ];

  useEffect(() => {
    if (document) {
      const pageAble = new PageAble(containerPageRef.current, {
        pips: true,
        animation: 1000,
        delay: 100,
        orientation: 'vertical',
        infinite: false,
        events: {
          wheel: false, // enable / disable mousewheel scrolling
          mouse: false, // enable / disable mouse drag scrolling
          touch: true, // enable / disable touch / swipe scrolling
          keydown: true, // enable / disable keyboard navigation
        },
      });
      var lethargy = new Lethargy({
        sensitivity: 90,
        delay: 600,
        inertiaDecay: 60,
      });
      function fpScroll(e: any) {
        e.preventDefault();
        e.stopPropagation();

        const check = lethargy.check(e).toString();
        // @ts-ignore
        const tmp = lethargy?.previousEvents[0]?.deltaY;

        if (check === 'true') {
          if (tmp < 0) {
            pageAble.prev();
          } else if (tmp > 0) {
            pageAble.next();
          }
        }
      }

      document.addEventListener('mousewheel', fpScroll, {
        passive: false,
      });
      document.addEventListener('DOMMouseScroll', fpScroll, {
        passive: false,
      });
      document.addEventListener('wheel', fpScroll, {
        passive: false,
      });
      document.addEventListener('MozMousePixelScroll', fpScroll, {
        passive: false,
      });

      pageAbleRef.current = pageAble;
      return () => {
        document.removeEventListener('mousewheel', fpScroll);
        document.removeEventListener('DOMMouseScroll', fpScroll);
        document.removeEventListener('wheel', fpScroll);
        document.removeEventListener('MozMousePixelScroll', fpScroll);
        pageAbleRef.current = null;
        pageAble.destroy();
      };
    }
  }, []);
  return (
    <Box
      sx={{
        background: '#EFEFEF',
        '& .pg-wrapper': {
          padding: '0 !important',
        },
      }}
    >
      <div id="containerPageThietKe" ref={containerPageRef}>
        <div
          data-anchor="thiet-ke-1"
          id="thiet-ke-1"
          className="w-full h-full relative"
        >
          <img src={banner4} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-[50px] w-full flex items-center justify-between px-12">
            <Link to="/linh-vuc-hoat-dong">
              <div className="flex items-center space-x-2">
                <IconArrowNarrowLeft size={40} className="text-white" />
                <h3 className="text-2xl font-bold uppercase text-white">
                  Lĩnh vực hoạt động
                </h3>
              </div>
            </Link>
            <h3 className="text-5xl font-bold uppercase text-white">
              Công tác Thiết kế
            </h3>
            <div
              style={{ visibility: 'hidden' }}
              className="flex items-center space-x-2"
            >
              <IconArrowNarrowLeft size={40} className="text-white" />
              <h3 className="text-2xl font-bold uppercase text-white">
                Lĩnh vực hoạt động
              </h3>
            </div>
          </div>
        </div>
        <div
          data-anchor="thiet-ke-2"
          id="thiet-ke-2"
          className="w-full h-full relative"
        >
          <img src={thietKe1} alt="" className="w-full h-full object-cover" />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
            }}
          />
          <div className="absolute top-[25%] h-full w-full">
            <div className="flex items-start justify-between px-12 h-full w-[80%] mx-auto">
              <div className="w-[40%]">
                <h3 className="text-2xl font-bold uppercase text-white">
                  LĨNH VỰC THIẾT KẾ
                </h3>
                <br />
                <p className="text-xl text-white">
                  Với kinh nghiệm trong lĩnh vực thiết kế, thi công các dự án
                  Nhà xưởng, biệt thự liền kề,… sử dụng phương án bê tông dự ứng
                  lực đúc sẵn, DPM sẽ phối hợp tư vấn thiết kế phương án tối ưu
                  nhất về kết cấu, giá thành cũng như tiến độ thi công theo yêu
                  cầu của Quý khách.
                </p>
              </div>
              <div className="w-[60%] px-12 thiet-ke-detail">
                <Swiper
                  slidesPerView={1}
                  centeredSlides
                  loop
                  pagination={{
                    clickable: true,
                  }}
                  navigation
                  modules={[Pagination, Navigation]}
                  className="w-full h-full"
                >
                  {item
                    ? item?.map((item, idx) => (
                        <SwiperSlide key={idx} className="w-full h-full">
                          <img
                            src={item}
                            alt="Philippe Pierga Design"
                            className="w-full h-full object-cover block"
                          />
                        </SwiperSlide>
                      ))
                    : null}
                </Swiper>
                <br />
                <div className="text-xl text-white uppercase text-center">
                  Các hình ảnh về công tác Thiết kế
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-anchor="thiet-ke-4" id="thiet-ke-4">
          <FooterSection />
        </div>
      </div>
    </Box>
  );
}

export default ThietKeNew;
