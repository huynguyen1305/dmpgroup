import backgroundTintuc from "@/assets/images/bg-tin-tuc.png";

import { Typography } from "antd";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section
      className="w-full h-[100vh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundTintuc})`,
      }}
    >
      <div className="container flex flex-col h-full pb-10 justify-between mx-auto px-10">
        <div className="flex h-full flex-col justify-center gap-2">
          <Typography className="font-extrabold text-8xl">| TIN TỨC</Typography>
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <Typography className="text-2xl font-extralight">
                Trang chủ
              </Typography>
            </Link>
            <Typography className="text-2xl font-medium">{">"}</Typography>
            <Link to={"/tin-tuc"}>
              <Typography className="text-2xl font-medium">Tin tức</Typography>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
