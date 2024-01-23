import backgroundVision from "@/assets/images/bg-home-page-tin-tuc.png";
import image from "@/assets/images/card-image-1.png";
import iconEye from "@/assets/icons/vision-icon.svg";
import iconMid from "@/assets/icons/icon-bulleye.svg";
import { Typography } from "antd";
import styles from "./VisionSection.module.scss";
import { cn } from "@/utils/twClassname";

const VisionSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundVision})`,
        }}
      >
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-5 max-w-[500px]">
            <div className="flex gap-4 items-center">
              <Typography className="font-extrabold text-[8vh]">
                | TẦM NHÌN
              </Typography>
              <img src={iconEye} alt="" />
            </div>
            <Typography className="font-light text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat null
            </Typography>
            <img
              src={image}
              alt=""
              className={cn(styles.trapezoid_image, "w-full h-full")}
            />
          </div>
          <div className="flex flex-col gap-5 max-w-[500px]">
            <img
              src={image}
              alt=""
              className={cn(styles.trapezoid_image, "w-full h-full")}
            />
            <div className="flex gap-4 items-center">
              <Typography className="font-extrabold text-[8vh]">
                | SỨ MỆNH
              </Typography>
              <img src={iconMid} alt="" />
            </div>
            <Typography className="font-light text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat null
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
