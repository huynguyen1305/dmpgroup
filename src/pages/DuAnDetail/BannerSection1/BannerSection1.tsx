import { Typography } from "antd";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import backgroundHomepage from "@/assets/images/homepage-background.png";
import { Link } from "react-router-dom";

const items = [
  {
    key: 1,
    name: "Nhà Máy Uniben",
    value: "nha-may-uniben",
    img: backgroundHomepage,
    info: `
      <ul class="list-disc">
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Chủ đầu tư:&nbsp;</b>Cty CP Vật liệu và Giai pháp SOL</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Địa điểm:&nbsp;</b>Khu công nghiệp Việt Nam Singapore II-A, Bình Dương</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Hạng mục công việc&nbsp;</b>Thiết kế, sản xuất, lắp dựng Cột, dầm, sàn nhà xưởng</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Tổng diện tích:&nbsp;</b>25,200 m²</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian khởi công:&nbsp;</b>2022</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian thi công:&nbsp;</b>40 ngày</span></li>
      </ul>
      `,
    description: `Dự án UNIBEN được xây dựng trên diện tích 80.000 m2 trong khuôn viên 160.000 m2 của nhà máy UNIBEN Bình Dương với vốn đầu tư ban đầu khoảng 1.000 tỉ đồng tương đương 55 triệu USD. Được biết đây là dự án tâm huyết của UNIBEN trong việc tiếp tục mở rộng quy mô hoạt động và sản xuất để đáp ứng nhu cầu ngày càng cao của người tiêu dùng cả về chất và lượng. Đồng thời, thể hiện tham vọng chiếm lĩnh thị trường nước giải khát, song song đó, củng cố vị thế dẫn đầu ngành hàng tiêu dùng nhanh của UNIBEN.`,
    images: [
      backgroundHomepage,
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-Canh-4-1-1024x814.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-Canh-2-3.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z3943981898663_1de25018a7957d6c3d6c17192ebecf10-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z3943981924940_45730888066dfd3aa6d1d96ccac75de8-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z3943981928870_34d2cc0c62d141ec27da33022d82a2cf-1024x576.jpg",
    ],
  },
  {
    key: 2,
    name: "SLP Xuyên Á",
    value: "slp-xuyen-a",
    img: backgroundHomepage,
    info: `
      <ul class="list-disc">
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Chủ đầu tư:&nbsp;</b>Cty CP Đầu tư Xây Dựng Ricons</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Địa điểm:&nbsp;</b>Lô HH Khu công nghiệp Xuyên Á, huyện Đức Hòa, tỉnh Long An</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Hạng mục công việc&nbsp;</b>Thiết kế, sản xuất, lắp dựng Cột, dầm, sàn nhà xưởng</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Tổng diện tích:&nbsp;</b>90,000 m²</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian khởi công:&nbsp;</b>2022</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian thi công:&nbsp;</b>120 ngày</span></li>
</ul>
      `,
    description: `SLP Park Xuyên Á tọa lạc tại huyện Đức Hòa, một trong ba huyện của tỉnh Long An tiếp giáp với Thành phố Hồ Chí Minh (TP.HCM). Dự án sở hữu vị trí chiến lược, nằm tại cửa ngõ phía Tây TP.HCM sẽ giúp khách hàng kết nối và giao thương thuận lợi giữa tỉnh Long An với khu vực Đồng bằng sông Cửu Long và TP.HCM. SLP Park Xuyên Á cách trung tâm TP.HCM 30km và cách sân bay quốc tế Tân Sơn Nhất 25km.`,
    images: [
      backgroundHomepage,
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-Canh-1-768x395.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/DSC00367-scaled-1-1024x683.jpg",

      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Xuyen-A-A1-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Xuyen-A-A2.2-1024x576.jpg",
    ],
  },
  {
    key: 3,
    name: "SLP LONG HẬU Logistic GD2",
    value: "slp-long-hau-logistic-gd2",
    img: backgroundHomepage,
    info: `
      <ul class="list-disc">
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Chủ đầu tư:&nbsp;</b>Cty CP Đầu tư Phát triển Minh Global</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Địa điểm:&nbsp;</b>Lô số 3G-9, đường số 14, KCN Long Hậu 3 (Giai đoạn 1), ấp 3, xã Long Hậu, huyện Cần Giuộc, tỉnh Long An, Việt Nam</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Hạng mục công việc&nbsp;</b>Thiết kế, sản xuất, lắp dựng Cột, dầm, sàn nhà xưởng</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Tổng diện tích:&nbsp;</b>22,000 m²</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian khởi công:&nbsp;</b>2022</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian thi công:&nbsp;</b>70 ngày</span></li>
      </ul>
      `,
    description: `Nằm tại Khu Công Nghiệp Long Hậu, tỉnh Long An – một vị trí chiến lược tiếp giáp Thành phố Hồ Chí Minh, đóng vai trò cầu nối giữa Thành phố Hồ Chí Minh và 12 tỉnh Đồng bằng sông Cửu Long, SLP Park Long Hậu được đánh giá là dự án đầy tiềm năng của SLP tại thị trường logistics phía Nam. Đây là vị trí lý tưởng cho việc phát triển thương mại điện tử và cụm hậu cần liên quan và gần với nhiều nhà sản xuất.`,
    images: [
      backgroundHomepage,
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-Canh-4-768x432.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-Canh-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-Canh-2-1-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-Canh-3-1-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z4154384391675_119eaad3f512aea60ee4d9b3b2e2889a-1024x768.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/2-1024x768.jpg",

      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/8-1024x462.jpg",
    ],
  },
  {
    key: 4,
    name: "Công ty TNHH Paihong VN",
    value: "cong-ty-tnhh-paihong-vn",
    img: backgroundHomepage,
    info: `
      <ul class="list-disc">
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Chủ đầu tư:&nbsp;</b>Cty CP Đầu tư Xây Dựng Newteccons</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Địa điểm:&nbsp;</b>KCN BÀU BÀNG, Bình Dương</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Hạng mục công việc&nbsp;</b>Thiết kế, sản xuất, lắp dựng Cột, dầm, sàn nhà xưởng</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Tổng diện tích:&nbsp;</b>200,000 m²</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian khởi công:&nbsp;</b>2022</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian thi công:&nbsp;</b>105 ngày</span></li>
</ul>
      `,
    description: `Dự án nhà máy Paihong do công ty TNHH Paihong Việt Nam (Đài Loan) làm chủ đầu tư với số vốn giai đoạn I là 500 tỷ đồng. Dự án được xây dựng trên tổng diện tích 16 ha tại Khu công nghiệp Bàu Bàng, huyện Bàu Bàng, tỉnh Bình Dương, dự kiến sau khi hoàn thành PaiHong sẽ cho công suất gần 7.000 tấn vải các loại/ năm.`,
    images: [
      backgroundHomepage,
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/phoi-canh-1-1-768x432.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z4087576965436_2137c9cd84cbe68fc3a72d5f9e1efd69-1024x767.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/B3-NGANG-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/B5-B61-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/B6-NGNAG-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/B6-NGNAG-1024x576.jpg",
    ],
  },
  {
    key: 5,
    name: "LOGOS LOGISTICS LONG AN",
    value: "logos-logistics-long-an",
    img: backgroundHomepage,
    info: `
      <ul class="list-disc">
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Chủ đầu tư:&nbsp;</b>Công ty TNHH Logos Long An</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Địa điểm:&nbsp;</b>Lô đất 3D-8, đường số 12, Khu Công nghiệp Long Hậu 3, xã Long Hậu, huyện Cần Giuộc, tỉnh Long An</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Hạng mục công việc&nbsp;</b>Thiết kế,sản xuất, lắp dựng Cột, dầm, sàn nhà xưởng + Văn Phòng</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Tổng diện tích:&nbsp;</b>108,606 m²</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian khởi công:&nbsp;</b>2023</span></li>
<li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian thi công:&nbsp;</b>103 ngày</span></li>
</ul>
      `,
    description: `Dự án Logistic Logos Long An nắm giữ vị trí chiến lược, ngay phía nam Trung tâm Thành phố Hồ Chí Minh với khả năng tiếp cận thuận tiện đến các trung tâm đô thị và cơ sở hạ tầng logistic quan trọng của thành phố. Dự án chỉ cách Phú Mỹ Hưng (Quận 7) 25 phút và Chợ Bến Thành (Quận 1) 40 phút di chuyển. Cùng với Cảng Hiệp Phước, dự án sẽ thúc đẩy sự phát triển của địa phương trong tương lai.
      Theo Chủ đầu tư, dự án được đầu tư các cơ sở kho bãi theo các thông số kỹ thuật thiết kế hạng A, đạt chứng nhận môi trường LEED Gold, từ đó góp phần gia tăng hiệu quả của các đối tác trong công tác quản trị logistic. Sau khi hoàn thành, Chủ đầu tư kỳ vọng dự án Logistic Logos Long An sẽ là sự lựa chọn lý tưởng của các đơn vị bán lẻ, thương mại điện tử và kho lạnh.`,
    images: [
      backgroundHomepage,
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-canh-3-1024x566.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/Phoi-canh-2-1024x570.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z4322127586794_55e42a0810a78bfd04289703fde8098d-1-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z4322127585445_82ec7d385524c0d8f04ab91d2542b77e-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z4293417226516_3105c89c4ca95846818f9f6b56bf7202-1024x576.jpg",
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/06/z4293417234412_1033cd99f2f73c2f945a9f08ea434296-1024x576.jpg",
    ],
  },
];

const tableTmp = `
<ul class="list-disc">
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Chủ đầu tư:&nbsp;</b>Cty CP Vật liệu và Giai pháp SOL</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Địa điểm:&nbsp;</b>Khu công nghiệp Việt Nam Singapore II-A, Bình Dương</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Hạng mục công việc&nbsp;</b>Thiết kế, sản xuất, lắp dựng Cột, dầm, sàn nhà xưởng</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Tổng diện tích:&nbsp;</b>25,200 m²</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian khởi công:&nbsp;</b>2022</span></li>
      <li class="elementor-icon-list-item"><span class="elementor-icon-list-text"><b>Thời gian thi công:&nbsp;</b>40 ngày</span></li>
      </ul>

`;

const BannerSection1 = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div className="w-full h-full relative">
        <div
          className="w-full h-full absolute inset-0 z-[1] bg-no-repeat bg-cover"
          style={{
            background: "#354B99",
            filter: "blur(3px)",
            opacity: 0.8,
          }}
        />
        <div
          className="w-full h-full absolute inset-0 z-[2] bg-no-repeat bg-cover"
          style={{
            background: "#354B99",
            opacity: 0.8,
          }}
        />
        <div className="w-full h-full absolute inset-0 z-[3]">
          <div className="px-[80px] mx-auto w-full h-full flex flex-col">
            <div className="w-full flex items-center ">
              <div className="w-1/2 flex flex-col gap-2">
                <Typography className="font-extrabold text-[6vh]">
                  | Nhà Máy Uniben
                </Typography>
                <div className="flex items-center gap-2">
                  <Link to="/">
                    <Typography className="text-2xl font-medium opacity-70 hover:opacity-100">
                      Trang chủ
                    </Typography>
                  </Link>
                  <Typography className="text-2xl font-medium">
                    {">"}
                  </Typography>
                  <Link to="/du-an">
                    <Typography className="text-2xl font-medium opacity-70 hover:opacity-100">
                      Tất cả dự án
                    </Typography>
                  </Link>
                  <Typography className="text-2xl font-medium">
                    {">"}
                  </Typography>
                  <Link to="/du-an/nha-may-uniben">
                    <Typography className="text-2xl font-medium hover:opacity-100">
                      Nhà Máy Uniben
                    </Typography>
                  </Link>
                </div>
              </div>
              <div className="w-1/2 text-justify">
                <div
                  dangerouslySetInnerHTML={{ __html: tableTmp }}
                  className="font-medium pt-2 text-white"
                  style={{
                    fontFamily: `'Doris', sans-serif`,
                    fontSize: "18px",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-full flex-1 overflow-hidden py-10">
              <Swiper
                grabCursor
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                centeredSlides
                navigation
                loop
                autoplay={{
                  delay: 2000,
                }}
                className="w-full h-full"
              >
                {items.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className=" w-full h-full">
                      <img
                        src={image.img}
                        className={`w-full h-full object-contain object-center bg-[#354B99]`}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection1;
