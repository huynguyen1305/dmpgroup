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

function ActivePageThietKe() {
  const location = useLocation();
  console.log(location.pathname);
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
  const [active, setActive] = React.useState<any>(null);
  console.log(active);

  useEffect(() => {
    const currentActive = activites.find((item) =>
      location.pathname.includes(item.value)
    );
    setActive(currentActive);
  }, []);

  return (
    <div className="bg-[#70706E]">
      <div className={`w-full h-full overflow-hidden`}>
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
      <div className="w-[60%] h-full mx-auto bg-[#70706E] px-12 pb-12">
        <div className="text-white text-xl text-justify">
          <p>
            Thiết kế là bước quan trọng nhất và đầu tiên để tạo nên một công
            trình tính có thẩm mỹ, tối ưu về giải pháp kỹ thuật cũng như công
            năng. Việc thiết kế đòi hỏi đội ngũ kỹ sư và kiến trúc sư có chuyên
            môn và nhiều kinh nghiệm để xử lí tốt các vấn đề gặp phải trong quá
            trình hình thành ý tưởng.
          </p>
          <br />
          <p>
            Với kinh nghiệm trong lĩnh vực thiết kế, thi công các dự án Nhà
            xưởng, biệt thự liền kề,… sử dụng phương án bê tông dự ứng lực đúc
            sẵn, DPM sẽ phối hợp tư vấn thiết kế phương án tối ưu nhất về kết
            cấu, giá thành cũng như tiến độ thi công theo yêu cầu của Quý khách.
          </p>
          <br />
          <p>
            Đồng thời, trong quá trình tư vấn thiết kế, đội ngũ nhân viên DPM sẽ
            dựng mô hình 3D dự án, các chi tiết cấu kiện, chi tiết liên kết,… để
            Quý khách có thể hình dung rõ nhất về phương án Sản xuất lắp dựng
            cấu kiện Bê tông cốt thép dự ứng lực đúc sẵn mà DPM đưa ra.
          </p>
          <br />
          <p>Một số hình ảnh các công tác thiết kế tại D P M.</p>
          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-2.jpg"
            className="w-full"
          />
          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-3.png"
            className="w-full"
          />
          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-4.png"
            className="w-full"
          />
          <br />
          <img
            src="https://dpmgroup.123websitedev.com/wp-content/uploads/2022/04/tk-1.jpg"
            className="w-full"
          />
          <br />
          <div>
            <strong>Danh Sách nhân sự:</strong>
          </div>
          <br />
          <table className="w-full">
            <tbody>
              <tr>
                <td width="782">CHỦ TRÌ THIẾT KẾ:&nbsp; Mr LÊ VĂN VŨ</td>
              </tr>
              <tr>
                <td>THIẾT KẾ:&nbsp; Mr TẠ VĂN LINH</td>
              </tr>
              <tr>
                <td>THIẾT KẾ:&nbsp; Mr NGUYỄN TẤN KIỆT</td>
              </tr>
              <tr>
                <td>THIẾT KẾ:&nbsp; Mr NGUYỄN QUỐC SĨ</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div>
            <strong>Các hoạt động thiết kế:</strong>
          </div>
          <br />
          <table className="w-full">
            <tbody>
              <tr>
                <td>LÊN PHƯƠNG ÁN KẾT CẤU</td>
              </tr>
              <tr>
                <td>XÂY DỰNG MÔ HÌNH PHÂN TÍCH KẾT CẤU</td>
              </tr>
              <tr>
                <td>
                  TÍNH TOÁN VÀ TRIỂN KHAI CHI TIẾT CẤU KIỆN, SÀN ĐỔ BÙ, CÁC CHI
                  TIẾT MỐI NỐI
                </td>
              </tr>
              <tr>
                <td>
                  TRIỂN KHAI BẢN VẼ MÔ HÌNH 3D TỔNG THỂ, CHI TIẾT CẤU KIỆN VÀ
                  CÁC MỐI NỐI LIÊN KẾT
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      </div>
      <div className="w-full h-[1000px]">
        <FooterSection />
      </div>
    </div>
  );
}

export default ActivePageThietKe;
