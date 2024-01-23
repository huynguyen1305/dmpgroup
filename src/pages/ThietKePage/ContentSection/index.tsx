import { cn } from "@/utils/twClassname";
import { Col, Row, Typography } from "antd";
import styles from "./ContentSection.module.scss";
import cardImage1 from "@/assets/images/card-image-3.jpeg";
import grayBg1 from "@/assets/images/gray-bg-1.png";
import grayBg2 from "@/assets/images/gray-bg-2.png";

const ContentSection = () => {
  return (
    <div className="w-full h-full bg-[#354b99] pt-[10vh]">
      <div className="flex flex-col gap-20 px-[10vw]">
        <div className="max-w-[600px] flex flex-col gap-5">
          <Typography className="text-6xl font-extrabold">
            | Lorem ipsum dolor sit
          </Typography>
          <Typography className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <Row gutter={[0, 0]} className="mt-10">
          <Col span={6} className="">
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
          <Col span={6}>
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
          <Col span={6} className="">
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
          <Col span={6}>
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
        </Row>
        <div className="w-full flex justify-center">
          <Typography className="text-xl font-light text-center max-w-[1280px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <div className="flex w-full items-center justify-center gap-10">
          <img alt="image" src={grayBg1} />
          <div className="flex flex-col gap-8">
            <img alt="image" src={grayBg2} />
            <img alt="image" src={grayBg2} />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Typography className="text-xl font-light text-center max-w-[1280px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
