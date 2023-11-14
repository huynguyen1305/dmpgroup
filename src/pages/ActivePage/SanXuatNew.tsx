import { useEffect, useRef } from 'react';
// @ts-ignore
import PageAble from 'pageable';
// import useAppStore from '@/store/appStore';
import { Lethargy } from 'lethargy-ts';

import FooterSection from '../HomePage/FooterSection/FooterSection';
import { Box } from '@mantine/core';

import banner3 from '@/assets/images/lvhd-3.png';
import sanSuatSlide1 from '@/assets/images/san-xuat-slide-1.jpg';
import sanSuatSlide0 from '@/assets/images/san-xuat-slide-0.jpg';
import sanSuat1 from '@/assets/images/san-xuat-1.jpg';

import sanSuat3 from '@/assets/images/san-xuat-3.jpg';
import sanSuat4 from '@/assets/images/san-xuat-4.jpg';
import slide2 from '@/assets/images/san-xuat.jpg';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function SanXuatNew() {
  const pageAbleRef = useRef(null);
  const containerPageRef = useRef(null);

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
      <div id="containerPageSanXuat" ref={containerPageRef}>
        <div
          data-anchor="san-xuat-1"
          id="san-xuat-1"
          className="w-full h-full relative"
        >
          <img src={banner3} alt="" className="w-full h-full object-cover" />
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
              Công tác sản xuất
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
          data-anchor="san-xuat-2"
          id="san-xuat-2"
          className="w-full h-full relative"
        >
          <img
            src={sanSuatSlide0}
            alt=""
            className="w-full h-full object-cover"
          />
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
                  SẢN XUẤT CÁC CẤU KIỆN BÊ TÔNG CỐT THÉP VỚI NHIỀU ƯU ĐIỂM VƯỢT
                  TRỘI
                </h3>
                <br />
                <ul
                  className="text-xl text-white"
                  style={{ listStyleType: 'number' }}
                >
                  <li>Bê tông chất lượng cao.</li>
                  <li>Rút ngắn thời gian thi công.</li>
                  <li>Tạo điều kiện xây dựng công nghiệp hoá.</li>
                  <li>Hiệu quả kinh tế cao.</li>
                </ul>
              </div>
              <div className="w-[60%] px-12">
                <img src={sanSuatSlide1} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <div
          data-anchor="san-xuat-3"
          id="san-xuat-3"
          className="w-full h-full relative"
        >
          <img
            src={sanSuatSlide0}
            alt=""
            className="w-full h-full object-cover"
          />
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
                  GIỚI THIỆU SẢN PHẨM
                </h3>
                <br />
                <ul
                  className="text-xl text-white"
                  style={{ listStyleType: 'number' }}
                >
                  <li>Cột bê tông lắp ghép đúc sẵn.</li>
                  <li>Dầm bê tông ghép dự ứng lực.</li>
                  <li>Sàn bê tông lắp ghép dự ứng lực.</li>
                  <li>Cầu thang bê tông cốt thép đúc sẵn.</li>
                </ul>
              </div>
              <div className="w-[60%] px-12">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={sanSuat1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={slide2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={sanSuat3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={sanSuat4}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <br />
                <div className="text-xl text-white uppercase text-center">
                  Các hình ảnh về công tác Sản xuất
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-anchor="san-xuat-4" id="san-xuat-4">
          <FooterSection />
        </div>
      </div>
    </Box>
  );
}

export default SanXuatNew;
