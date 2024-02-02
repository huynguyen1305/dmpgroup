import backgroundHomepage from "@/assets/images/bg-home-page-linh-vuc.png";
// import cardImage1 from "@/assets/images/card-image-3.jpeg";
import { Col, Typography } from "antd";
import styles from "./LinhVucSection.module.scss";
import { cn } from "@/utils/twClassname";
import { Link } from "react-router-dom";

import { linhVucHoatDongHomePage } from "@/mocks";

const LinhVucSection = () => {
  return (
    <section className="w-full h-full pt-[80px] pb-[80px]">
      <div
        className="container mx-auto h-full bg-no-repeat bg-cover flex flex-col"
        style={{
          backgroundImage: `url(${backgroundHomepage})`,
        }}
      >
        <div className="mx-auto h-full flex flex-col">
          <Link to="/linh-vuc-hoat-dong">
            <Typography className="text-[6.5vh] font-extrabold">
              | LĨNH VỰC HOẠT ĐỘNG
            </Typography>
          </Link>

          <div className="flex h-[80%] mt-[90px] mb-[40px]">
            {linhVucHoatDongHomePage.map((item, index) => {
              return (
                <Col
                  span={6}
                  className={index % 2 === 0 ? "mb-12" : "mt-12"}
                  key={item.id}
                >
                  <Link to={`/linh-vuc-hoat-dong${item.slug}`}>
                    <div
                      className={cn(
                        styles.trapezoid_image,
                        "w-full h-full relative"
                      )}
                    >
                      <div
                        className={`w-full h-full absolute inset-[4px] z-[1] ${styles["bg-dim-card"]}`}
                      ></div>
                      <img
                        alt="img"
                        src={item.image}
                        className="w-full h-full object-cover object-center"
                      />
                      <Typography className="absolute bottom-[5%] left-[1rem] capitalize z-10 text-white text-[4vh] ml-7">
                        {item.name}
                      </Typography>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinhVucSection;
