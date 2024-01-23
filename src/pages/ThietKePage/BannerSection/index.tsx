import backgroundThietKe from "@/assets/images/thiet-ke-bg.png";
import construct from "@/assets/images/construct-bg-tin-tuc.png";
import { Typography } from "antd";

const BannerSection = () => {
  return (
    <section
      className="w-full h-[100vh] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundThietKe})`,
      }}
    >
      <div className="container flex flex-col h-full pt-[40vh] pb-10 justify-between pl-[7.5%]">
        <div className="flex flex-col gap-2">
          <Typography className="font-extrabold text-8xl">
            TƯ VẤN THIẾT KẾ
          </Typography>
          <div className="flex items-center gap-2">
            <Typography className="text-2xl font-extralight">
              Trang chủ
            </Typography>
            <Typography className="text-2xl font-medium">{">"}</Typography>
            <Typography className="text-2xl font-medium">
              Lĩnh vực hoạt động
            </Typography>
            <Typography className="text-2xl font-medium">{">"}</Typography>
            <Typography className="text-2xl font-medium">
              Tư vấn thiết kế
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-16 relative">
          <img
            alt="image-construction"
            src={construct}
            className="max-w-[880px] h-[800px] absolute right-[-20%] top-[-25vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
