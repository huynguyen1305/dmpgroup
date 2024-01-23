import backgroundThongDiep from "@/assets/images/bg-home-page-tin-tuc.png";
import image from "@/assets/images/homepage-background.png";
import imageBg from "@/assets/images/white-background.jpg";
import { cn } from "@/utils/twClassname";
import { Typography } from "antd";
import styles from "./ThongDiep.module.scss";
import iconLogo from "@/assets/icons/logo-circle.svg";

const ThongDiepSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundThongDiep})`,
        }}
      >
        <div className="container mx-auto px-[2rem]">
          <Typography className="text-[8vh] font-extrabold ml-[8%]">
            THÔNG ĐIỆP CHỦ TỊCH
          </Typography>
          <div className="relative mx-auto w-[78vw] h-full">
            <div className="absolute top-[5vh] left-[0] w-[40vw] h-[60vh] z-10">
              <img
                src={image}
                alt=""
                className={cn(styles.trapezoid_image, "w-full h-full")}
              />
            </div>
            <div className="absolute top-0 right-[0] w-[50vw] h-[70vh]">
              <div className="w-full h-full relative">
                <img
                  alt="background"
                  src={imageBg}
                  className={cn(styles.trapezoid_image, "w-full h-full")}
                />
                <img
                  alt="background"
                  src={iconLogo}
                  className={cn(
                    styles,
                    "w-full h-full max-w-[123px] max-h-[123px] absolute top-0 right-[2rem]"
                  )}
                />
                <div className="flex flex-col gap-5 absolute top-[50%] left-0 px-[25%] translate-y-[-50%]">
                  <Typography className="text-4xl font-extrabold text-[#17275D]">
                    Lorem ipsum dolor sit
                  </Typography>
                  <Typography className="text-xl font-light text-[#17275D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThongDiepSection;
