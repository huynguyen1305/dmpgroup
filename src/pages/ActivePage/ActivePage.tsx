import lvhdFull from '@/assets/images/lvhd-full.png';
import banner0 from '@/assets/images/lvhd-0.png';
import banner1 from '@/assets/images/lvhd-1.png';
import banner2 from '@/assets/images/lvhd-2.png';
import banner3 from '@/assets/images/lvhd-3.png';
import banner4 from '@/assets/images/lvhd-4.png';
import sanXuat from '@/assets/images/san-xuat.png';
import thietKe from '@/assets/images/thiet-ke.png';
import vanChuyen from '@/assets/images/van-chuyen.png';
import lapDat from '@/assets/images/lap-dat.png';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import FooterSection from '../HomePage/FooterSection/FooterSection';

function ActivePage() {
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
  return (
    <div className="w-full h-[100vh] bg-[#4B4F52] relative">
      <img
        src={lvhdFull}
        alt=""
        className="w-full h-full"
        style={{ transform: 'translateY(-30px)' }}
      />
      <div
        style={{
          position: 'absolute',
          top: 220,
          left: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0 4rem',
          paddingBottom: '1rem',
        }}
      >
        <div className="flex space-x-4 items-end w-full justify-between px-[50px]">
          <Link to={`/linh-vuc-hoat-dong/${activites[1].value}`}>
            <div className="w-[300px] h-[200px] cursor-pointer">
              <img
                src={activites[1].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105': true,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
              />
            </div>
          </Link>

          <Link to={`/linh-vuc-hoat-dong/${activites[2].value}`}>
            <div className="w-[300px] h-[200px] cursor-pointer">
              <img
                src={activites[2].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105': true,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
              />
            </div>
          </Link>
          <Link to={`/linh-vuc-hoat-dong/${activites[3].value}`}>
            <div className="w-[300px] h-[200px] cursor-pointer">
              <img
                src={activites[3].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105 ': true,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
              />
            </div>
          </Link>
          <Link to={`/linh-vuc-hoat-dong/${activites[4].value}`}>
            <div className="w-[300px] h-[200px] cursor-pointer">
              <img
                src={activites[4].thumbnail}
                alt=""
                className={clsx({
                  'border-2 border-solid border-white scale-105': true,
                  'w-full h-full grayscale-[80%] scale-100 hover:scale-105 hover:grayscale-[0%] transition-all duration-300 ease-in-out':
                    true,
                })}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1000px]">
        <FooterSection />
      </div>
    </div>
  );
}

export default ActivePage;
