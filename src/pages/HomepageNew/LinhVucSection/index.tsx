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
        className="w-full h-full bg-no-repeat bg-cover flex flex-col px-[80px]"
        style={{
          backgroundImage: `url(${backgroundHomepage})`,
        }}
      >
        <div className="mx-auto h-full flex flex-col">
          <Link to="/linh-vuc-hoat-dong">
            <Typography className="text-[8vh] font-extrabold">
              | LĨNH VỰC HOẠT ĐỘNG
            </Typography>
          </Link>

          <div className="flex h-[80%] my-10">
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
                        className="w-full h-full absolute inset-0 z-[1]"
                        style={{
                          background: `linear-gradient(180deg, rgba(53, 75, 153, 0.00) 0%, #354B99 110%)`,
                        }}
                      ></div>
                      <img
                        alt="img"
                        src={item.image}
                        className="w-full h-full object-cover object-center"
                      />
                      <Typography className="w-full absolute bottom-[5%] left-0 capitalize z-10 text-white text-[4vh] ml-7">
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
