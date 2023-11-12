import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import banner1 from '@/assets/images/lvhd-1.png';
import banner2 from '@/assets/images/lvhd-2.png';
import banner3 from '@/assets/images/lvhd-3.png';
import banner4 from '@/assets/images/lvhd-4.png';
import sanXuat from '@/assets/images/san-xuat.png';
import thietKe from '@/assets/images/thiet-ke.png';
import vanChuyen from '@/assets/images/van-chuyen.png';
import lapDat from '@/assets/images/lap-dat.png';
import FooterSection from '../HomePage/FooterSection/FooterSection';

function ActivePageLapDat() {
  const location = useLocation();
  console.log(location.pathname);

  const [active, setActive] = React.useState<any>(null);
  console.log(active);

  useEffect(() => {
    const activites = [
      {
        id: 2,
        name: 'Thiết kế',
        value: 'thiet-ke',
        image: banner4,
        thumbnail: thietKe,
        title: 'tư vấn thiết kế',
        content: `Với kinh nghiệm trong lĩnh vực thiết kế, thi công các dự án Nhà xưởng, biệt thự liền kề,… sử dụng phương án bê tông dự ứng lực đúc sẵn, DPM sẽ phối hợp tư vấn thiết kế phương án tối ưu nhất về kết cấu, giá thành cũng như tiến độ thi công theo yêu cầu của Quý khách.
          Với kinh nghiệm trong lĩnh vực thiết kế, thi công các dự án Nhà xưởng, biệt thự liền kề,… sử dụng phương án bê tông dự ứng lực đúc sẵn, DPM sẽ phối hợp tư vấn thiết kế phương án tối ưu nhất về kết cấu, giá thành cũng như tiến độ thi công theo yêu cầu của Quý khách.
  Đồng thời, trong quá trình tư vấn thiết kế, đội ngũ nhân viên DPM sẽ dựng mô hình 3D dự án, các chi tiết cấu kiện, chi tiết liên kết,… để Quý khách có thể hình dung rõ nhất về phương án Sản xuất lắp dựng cấu kiện Bê tông cốt thép dự ứng lực đúc sẵn mà DPM đưa ra.`,
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
          'Với các ưu điểm trên, DPM đã nhận được sự tin tưởng của các khách hàng thi công các dự án như: LSP Long Hậu Giai đoạn 1 và 2, Logos Logiscstics Long Hậu, BW Tân Phú Trung, Paihong, SLP Xuyên Á,… ',
      },
    ];
    const currentActive = activites.find((item) =>
      location.pathname.includes(item.value)
    );
    setActive(currentActive);
  }, []);

  return (
    <div className="bg-[#7B7A79] ">
      <div className={`w-full h-full`}>
        <img
          src={active?.image}
          alt=""
          className="w-full"
          style={{ objectFit: 'cover', display: 'block' }}
        />
        <div className="absolute bottom-10 left-[50%] translate-x-[-50%] px-12">
          <div className="text-white">
            <h3 className="text-5xl font-bold uppercase">{active?.title}</h3>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full mx-auto bg-[#7B7A79] px-12 pb-12">
        <div className="text-white text-xl text-justify">
          <p>
            Hiện nay, phương án lắp dựng cấu kiện bê tông đúc sẵn đươc áp dụng
            rộng rãi cho các dự án nhà xưởng, kho, nhà phố, biệt thự liền kề vì
            các ưu điểm tốt hơn cấu kiện đổ tại công trường như sau:
          </p>
          <br />
          <ul style={{ listStyleType: 'disc' }}>
            <li>
              Đẩy nhanh tiến độ thi công do cấu kiện được đúc sẵn trước tại nhà
              máy.
            </li>
            <li>Giảm nhân công</li>
            <li>Ít phụ thuộc vào thời tiết</li>
            <li>Giảm chi phí bao che trong quá trình thi công</li>
            <li>Kiểm soát được chất lượng sản phẩm</li>
            <li>Giá thành cạnh tranh.</li>
          </ul>
          <br />
          <p>
            Quá trính thi công lắp dựng do DPM thi công bao gồm các quy trình
            sau:
          </p>
          <br />
          <ul style={{ listStyleType: 'disc' }}>
            <li>Lập biện pháp thi công được khách hàng phê duyệt.</li>
            <li>
              Chuẩn bị vật tư, thiết bị, máy móc, nhân công đáp ứng đặc thù dự
              án theo biện pháp được phê duyệt.
            </li>
            <li>
              Nhận mặt bằng được bàn giao từ khách hàng, kiểm tra chéo tim
              mực,..
            </li>
            <li>Đặt hàng, nhận cấu kiện từ nhà máy</li>
            <li>Thi công lắp đặt, cố định sản phẩm.</li>
            <li>Nghiệm thu bàn giao sản phẩm.</li>
          </ul>
          <br />
          <p>
            Với các ưu điểm trên, DPM đã nhận được sự tin tưởng của các khách
            hàng thi công các dự án như: LSP Long Hậu Giai đoạn 1 và 2, Logos
            Logiscstics Long Hậu, BW Tân Phú Trung, Paihong, SLP Xuyên Á,…
          </p>
          <br />
          <p>Một số hình ảnh công tác thi công lắp dựng.</p>

          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/hinh-2.jpg"
            className="w-full"
          />
          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/hinh-4.jpg"
            className="w-full"
          />
          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/hinh-6.jpg"
            className="w-full"
          />
          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/hinh-8.jpg"
            className="w-full"
          />
          <br />
        </div>
      </div>
      <div className="w-full h-[1000px]">
        <FooterSection />
      </div>
    </div>
  );
}

export default ActivePageLapDat;
