import { Col, Typography } from "antd";
// import { Link } from "react-router-dom";

import styles from "./ActivePage.module.scss";

import { cn } from "@/utils/twClassname";
import { Link } from "react-router-dom";
import { linhVucHoatDongHomePage } from "@/mocks";

const BannerSection1 = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div className="w-full h-full relative">
        <div
          className="w-full h-full absolute inset-0 z-[1] bg-no-repeat bg-cover"
          style={{
            // backgroundImage: `url("${backgroundHomepage}")`,
            filter: "blur(1px)",
            backgroundPosition: "center",
            // opacity: 0.8,
          }}
        />
        <div
          className="w-full h-full absolute inset-0 z-[2] bg-no-repeat bg-cover"
          style={{
            background: "#354B99",
            opacity: 0.8,
          }}
        />
        <div className="w-full h-full absolute inset-0 z-[3]">
          <div className="container mx-auto w-full h-full">
            <div className="w-full h-full flex">
              <div className="w-full h-full flex flex-col gap-2">
                <Typography className="font-extrabold text-[6.5vh] uppercase">
                  | Lĩnh vực hoạt động
                </Typography>
                <div className="flex items-center gap-2">
                  <Link to={"/"}>
                    <Typography className="text-2xl font-extralight">
                      Trang chủ
                    </Typography>
                  </Link>
                  <Typography className="text-2xl font-medium">
                    {">"}
                  </Typography>
                  <Link to={"/linh-vuc-hoat-dong"}>
                    <Typography className="text-2xl font-medium">
                      Lĩnh vực hoạt động
                    </Typography>
                  </Link>
                </div>

                {/* start */}
                <div className="flex h-[80%] mb-[90px] mt-[40px]">
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
                {/* end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection1;
