import React from 'react';
import { useStyles } from './styles';

import banner0 from '@/assets/images/lvhd-0.png';
import banner1 from '@/assets/images/lvhd-1.png';
import banner2 from '@/assets/images/lvhd-2.png';
import banner3 from '@/assets/images/lvhd-3.png';
import banner4 from '@/assets/images/lvhd-4.png';
import sanXuat from '@/assets/images/san-xuat.png';
import thietKe from '@/assets/images/thiet-ke.png';
import vanChuyen from '@/assets/images/van-chuyen.png';
import lapDat from '@/assets/images/lap-dat.png';
import lvhdFull from '@/assets/images/lvhd-full.png';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

const ActivityNew = () => {
  const activites = [
    {
      id: 1,
      name: 'Lĩnh vực hoạt động',
      value: 'linh-vuc-hoat-dong',
      image: banner0,
      thumbnail: lvhdFull,
      title: 'Lĩnh vực hoạt động',
      content:
        'Trải qua 13 năm thành lập và phát triển, chúng tôi đã sở hữu một đội ngũ nhân viên giàu kinh nghiệm và tài năng. Tận dụng tài năng này chúng tôi cam kết mang đến sản phẩm chất lượng cao, đáp ứng tất cả yêu cầu của khách hàng trong các lĩnh vực thiết kế, sản xuất, vận chết và lắp dựng.',
    },
    {
      id: 2,
      name: 'Thiết kế',
      value: 'thiet-ke',
      image: banner4,
      thumbnail: thietKe,
      title: 'tư vấn thiết kế',
      content:
        'Với kinh nghiệm trong lĩnh vực thiết kế, thi công các dự án Nhà xưởng, biệt thự liền kề,… sử dụng phương án bê tông dự ứng lực đúc sẵn, DPM sẽ phối hợp tư vấn thiết kế phương án tối ưu nhất về kết cấu, giá thành cũng như tiến độ thi công theo yêu cầu của Quý khách.',
    },
    {
      id: 3,
      name: 'Sản xuất',
      value: 'san-xuat',
      image: banner3,
      thumbnail: sanXuat,
      title: 'Công tác Sản xuất',
      content:
        'Cấu kiện bê tông dự ứng lức đúc sẵn do DPM sản xuất là các sản phẩm xây dựng được sản xuất theo quy trình sản xuất và quản lý chất lượng tại nhà máy cảu công ty DPM hoặc các đối tác khác, đảm bảo về chất lượng, thẩm mỹ, đúng theo bản vẽ thiết kế được khách hàng phê duyệt.',
    },
    {
      id: 4,
      name: 'Vận chuyển',
      value: 'van-chuyen',
      image: banner2,
      thumbnail: vanChuyen,
      title: 'Công tác vận chuyển',
      content:
        'Vận chuyển cấu kiện đa số vận chuyển bằng xe đầu kéo. Đối với các cấu kiện đặc biệt như dầm, cột dài, sẽ cần các phương tiện đặc biệt để vận chuyển từ nhà máy tới dự án. Cũng như đối với các dự án có vị trí đặc biệt như xa nhà máy, đảo,… các cấu kiện có thể vận chuyển bằng tàu từ nhà máy tới dự án.',
    },
    {
      id: 5,
      name: 'lắp dựng',
      value: 'lap-dung',
      image: banner1,
      thumbnail: lapDat,
      title: 'Công tác lắp đặt',
      content:
        'Với các ưu điểm trên, DPM đã nhận được sự tin tưởng của các khách hàng thi công các dự án như: LSP Long Hậu Giai đoạn 1 và 2, Logos Logiscstics Long Hậu, BW Tân Phú Trung, Paihong, SLP Xuyên Á,…',
    },
  ];
  const [active, setActive] = React.useState(activites[0]);
  const { classes } = useStyles(active);

  console.log(active, active.value === activites[0].value);
  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        transition: 'all 0.3 ease-in-out',
      }}
    >
      <div
        className={`w-full h-full relative ${classes.backdrop} overflow-hidden`}
      >
        <img
          src={active.image}
          alt=""
          className="w-full"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 w-full h-full">
          <div className="px-12 text-white pt-[200px] ">
            <h3 className="text-5xl font-bold uppercase">{active.title}</h3>
            <p className="text-xl mt-4 w-1/3">{active.content}</p>
            <Link
              to={
                active.value === 'linh-vuc-hoat-dong'
                  ? '/linh-vuc-hoat-dong'
                  : `/linh-vuc-hoat-dong/${active.value}`
              }
            >
              <div
                className="mt-4"
                style={{
                  width: 'max-content',
                  textDecoration: 'none',
                  color: 'white',
                  padding: '8px 1vw',
                  backgroundColor: 'black',
                  borderRadius: '4px',
                  border: '2px solid white',
                  cursor: 'pointer',
                }}
              >
                Xem thêm
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 4rem',
            paddingBottom: '1rem',
            cursor: 'pointer',
          }}
        >
          <div>
            <div className="w-[400px] h-[200px]">
              <img
                src={activites[0].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105 grayscale-[0%]':
                    active.value === activites[0].value,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
                onClick={() => setActive(activites[0])}
              />
            </div>
          </div>
          <div className="flex space-x-4 items-end">
            <div className="w-[300px] h-[200px]">
              <img
                src={activites[1].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105 grayscale-[0%] ':
                    active.value === activites[1].value,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
                onClick={() => setActive(activites[1])}
              />
            </div>
            <div className="w-[300px] h-[200px]">
              <img
                src={activites[2].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105 grayscale-[0%] ':
                    active.value === activites[2].value,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
                onClick={() => setActive(activites[2])}
              />
            </div>
            <div className="w-[300px] h-[200px]">
              <img
                src={activites[3].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105 grayscale-[0%] ':
                    active.value === activites[3].value,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
                onClick={() => setActive(activites[3])}
              />
            </div>
            <div className="w-[300px] h-[200px]">
              <img
                src={activites[4].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105 grayscale-[0%] ':
                    active.value === activites[4].value,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
                onClick={() => setActive(activites[4])}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityNew;
