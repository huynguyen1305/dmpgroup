import backgroundCustomer from "@/assets/images/bg-home-page-tin-tuc.png";

import { Carousel, Typography } from "antd";
import styles from "./CustomerSection.module.scss";

const imageLists = [
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Thien-An.jpg",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/TVS.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/ATAD.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/BMB.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Dai-dung.jpg",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/bt6-1.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/CC1.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Coteccons_Logo.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/logo_hoa_phat_moi_JJUT.jpg",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Logo_ricons_slogan.jpg",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/MGD-n.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/MHT.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/NPH.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Printing-Newtecons-Horizontal-Slogan-1536x1086.jpg",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Sol.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/Tuan-Le.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/VAS.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/xuan-mai-corp-logo.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/08/ATC.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Hoa-Binh.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Kajima.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/LOGO-QUANG-MINH-STEEL-METAL.jpg",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/Logo-Phan-Vu-Group.webp",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/obayashi.png",
  },
  {
    image:
      "https://dpmgroup.123websitedev.com/wp-content/uploads/2023/09/shimizu-corporation-vector-logo-small.png",
  },
];

const CustomerSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundCustomer})`,
        }}
      >
        <div className="flex flex-col px-[10%] w-full gap-10 h-[60vh]">
          <div className="flex flex-col gap-5 h-full">
            <Typography className="text-[6.5vh] font-extrabold">
              | KHÁCH HÀNG & ĐỐI TÁC
            </Typography>
            <Typography className="text-xl font-light">
              Với đội ngũ cán bộ công nhân viên nhiều năm kinh nghiệm Công ty Cổ
              Phần Tập Đoàn D P M đã tạo được sự đột phá trong xu hướng sử dụng
              vật liệu và công nghệ mới vào công tác thiết kế, sản xuất và thi
              công lắp dựng cho các công trình công nghiệp và dân dụng của công
              ty tại Tp.Hồ Chí Minh và các tỉnh phía Nam như:
            </Typography>
          </div>
          <div className={styles.carousel_css}>
            <Carousel
              autoplay
              slidesToShow={4}
              slidesToScroll={1}
              dots
              infinite
              easing="linear"
              speed={500}
              autoplaySpeed={1500}
              pauseOnHover={false}
              style={{ width: "100%", height: "300px" }}
            >
              {imageLists.map((item) => (
                <div key={item.image}>
                  <img
                    src={item.image}
                    alt="portrait"
                    className="w-full rounded-[100%] max-w-[250px] h-[250px] bg-white p-4"
                    style={{ objectFit: "scale-down" }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
