import backgroundGT from "@/assets/images/bg-gioi-thieu.png";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section
      className="w-full h-[100vh] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundGT})`,
      }}
    >
      <div className="container flex flex-col h-full pt-[30vh] pb-10 justify-between pl-[7.5%]">
        <div className="flex flex-col gap-2">
          <Typography className="font-extrabold text-[8vh]">
            GIỚI THIỆU
          </Typography>
          <div className="flex items-center gap-2">
            <Link to="/">
              <Typography className="text-2xl font-extralight">
                Trang chủ
              </Typography>
            </Link>
            <Typography className="text-2xl font-medium">{">"}</Typography>
            <Link to="/gioi-thieu">
              <Typography className="text-2xl font-medium">
                Giới thiệu
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
