import { useEffect, useRef } from 'react';
// @ts-ignore
import PageAble from 'pageable';
// import useAppStore from '@/store/appStore';
import { Lethargy } from 'lethargy-ts';

import FooterSection from '../HomePage/FooterSection/FooterSection';
import { Box } from '@mantine/core';

import banner2 from '@/assets/images/lvhd-2.png';
import vanChuyen1 from '@/assets/images/van-chuyen.jpg';
import vanChuyen2 from '@/assets/images/van-chuyen-1.jpg';

import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function VanChuyenNew() {
  const pageAbleRef = useRef(null);
  const containerPageRef = useRef(null);

  const item = [
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/van-chuyen-1.jpg',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/van-chuyen-2.jpg',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/van-chuyen-3.jpg',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/van-chuyen-4.jpg',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/van-chuyen-5.jpg',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/van-chuyen-6.jpg',
    'https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/van-chuyen-7.jpg',
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
          data-anchor="van-chuyen-1"
          id="van-chuyen-1"
          className="w-full h-full relative"
        >
          <img src={banner2} alt="" className="w-full h-full object-cover" />
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
              Công tác Vận chuyển
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
          data-anchor="van-chuyen-6"
          id="van-chuyen-6"
          className="w-full h-full relative"
        >
          <img src={vanChuyen1} alt="" className="w-full h-full object-cover" />
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
              <div className="w-[50%]">
                <h3 className="text-2xl font-bold uppercase text-white">
                  Lĩnh vực Vận chuyển
                </h3>
                <br />
                <p className="text-xl text-white">
                  Vận chuyển cấu kiện đa số vận chuyển bằng xe đầu kéo. Đối với
                  các cấu kiện đặc biệt như dầm, cột dài, sẽ cần các phương tiện
                  đặc biệt để vận chuyển từ nhà máy tới dự án. Cũng như đối với
                  các dự án có vị trí đặc biệt như xa nhà máy, đảo,… các cấu
                  kiện có thể vận chuyển bằng tàu từ nhà máy tới dự án.
                </p>
              </div>
              <div className="w-[50%] px-12">
                <img src={vanChuyen2} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <div
          data-anchor="van-chuyen-2"
          id="van-chuyen-2"
          className="w-full h-full relative"
        >
          <img src={vanChuyen1} alt="" className="w-full h-full object-cover" />
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
          <div className="absolute top-[20%] h-full w-full">
            <div className="flex items-start justify-between px-12 h-full w-[80%] mx-auto">
              <div className="w-[50%]">
                <h3 className="text-2xl font-bold uppercase text-white">
                  Năng lực vận chuyển
                </h3>
                <br />
                <table className="w-full text-white font-bold">
                  <tbody>
                    <tr>
                      <td>STT</td>
                      <td>XE CƠ GIỚI</td>
                      <td>SỐ LƯỢNG THIẾT BỊ</td>
                      <td>TẢI TRỌNG VẬN CHUYỂN</td>
                      <td>CẤU KIỆN VẬN CHUYỂN</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>XE ĐẦU KÉO SƠ MI RƠ MOOC</td>
                      <td>20</td>
                      <td>30 Tấn</td>
                      <td>
                        &nbsp; Cột dài &lt; 14 m Dầm dài &lt; 14 m Sàn Cấu kiện
                        khác: Sê nô, cầu thang,..
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>&nbsp;XE ĐẦU KÉO MOOC RÚT</td>
                      <td>10</td>
                      <td>30 tấn</td>
                      <td>&nbsp; Cột , dầm dài 14 25 m</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>&nbsp;XE ĐẦU KÉO Trailer</td>
                      <td>10</td>
                      <td>30 tấn</td>
                      <td>&nbsp; Cột , dầm dài &gt; 20 m</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>&nbsp;XE ĐẦU KÉO MOOC THẤP</td>
                      <td>10</td>
                      <td>40 tấn</td>
                      <td>&nbsp; XE CẨU BÁNH XÍCH</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>VẬN CHUYỂN BẰNG TÀU, XÀ LAN</td>
                      <td></td>
                      <td>lên đến 1000 tấn</td>
                      <td>
                        &nbsp; Cột, dầm, sàn,.. Khi vận chuyển đên dự án ở đảo,
                        khu vực cách xa nhà máy sản xuất &gt; 500 km
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-[50%] px-12 thiet-ke-detail">
                <br />
                <br />
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
                  Các hình ảnh về công tác Vận chuyển
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-anchor="van-chuyen-4" id="van-chuyen-4">
          <FooterSection />
        </div>
      </div>
    </Box>
  );
}

export default VanChuyenNew;
