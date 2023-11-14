import { useEffect, useRef } from 'react';
// @ts-ignore
import PageAble from 'pageable';
// import useAppStore from '@/store/appStore';
import { Lethargy } from 'lethargy-ts';

import FooterSection from '../HomePage/FooterSection/FooterSection';
import { Box } from '@mantine/core';

import banner1 from '@/assets/images/lvhd-1.png';

import sanSuatSlide0 from '@/assets/images/lap-dat.jpg';
import lapdung1 from '@/assets/images/lap-dung-1.jpg';
import lapdung2 from '@/assets/images/lap-dung-2.jpg';

import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function LapDungNew() {
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
      <div id="containerPageLapDung" ref={containerPageRef}>
        <div
          data-anchor="lap-dat-1"
          id="lap-dat-1"
          className="w-full h-full relative"
        >
          <img src={banner1} alt="" className="w-full h-full object-cover" />
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
              Công tác lắp dựng
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
          data-anchor="lap-dat-2"
          id="lap-dat-2"
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
              background: 'rgba(0, 0, 0, 0.65)',
            }}
          />
          <div className="absolute top-[25%] h-full w-full">
            <div className="flex items-start justify-between px-12 h-full w-[80%] mx-auto">
              <div className="w-[50%]">
                <h3 className="text-2xl font-bold uppercase text-white">
                  LĨNH VỰC LẮP DỰNG
                </h3>
                <br />
                <p className="text-xl text-white">
                  Quá trính thi công lắp dựng do DPM thi công bao gồm các quy
                  trình sau:
                </p>
                <ul
                  className="text-xl text-white"
                  style={{ listStyleType: 'number' }}
                >
                  <li>Lập biện pháp thi công được khách hàng phê duyệt.</li>
                  <li>
                    Chuẩn bị vật tư, thiết bị, máy móc, nhân công đáp ứng đặc
                    thù dự án theo biện pháp được phê duyệt.
                  </li>
                  <li>
                    Nhận mặt bằng được bàn giao từ khách hàng, kiểm tra chéo tim
                    mực, ...
                  </li>
                  <li>Đặt hàng, nhận cấu kiện từ nhà máy.</li>
                  <li>Thi công lắp đặt, cố định sản phẩm.</li>
                  <li>Nghiệm thu bàn giao sản phẩm.</li>
                </ul>
                <br />
                <p className="text-xl text-white">
                  Với các ưu điểm trên, DPM đã nhận được sự tin tưởng của các
                  khách hàng thi công các dự án như: LSP Long Hậu Giai đoạn 1 và
                  2, Logos Logiscstics Long Hậu, BW Tân Phú Trung, Paihong, SLP
                  Xuyên Á,...
                </p>
              </div>
              <div className="w-[50%] h-full px-12">
                <img
                  src={lapdung1}
                  alt=""
                  className="w-[70%] h-[25%] object-cover"
                />
                <br />
                <img
                  src={lapdung2}
                  alt=""
                  className="w-[70%] h-[25%] object-cover ml-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div data-anchor="lap-dat-4" id="lap-dat-4">
          <FooterSection />
        </div>
      </div>
    </Box>
  );
}

export default LapDungNew;
