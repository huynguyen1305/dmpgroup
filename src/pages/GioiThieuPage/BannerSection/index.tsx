import backgroundGT from "@/assets/images/thiet-ke.jpg";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section className="w-full h-[100vh]">
      <img
        className="w-full h-full object-cover absolute inset-0 z-[-1] opacity-70"
        src={backgroundGT}
        alt="image-construction"
      />
      <div className="container flex flex-col h-full pt-[30vh] pb-10 justify-between pl-[7.5%]">
        <div className="flex flex-col gap-2">
          <Typography className="font-extrabold text-[8vh] opacity-100">
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
