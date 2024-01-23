import { Col, Typography } from "antd";
// import { Link } from "react-router-dom";

import styles from "./ActivePage.module.scss";

import backgroundHomepage from "@/assets/images/card-image-3.jpeg";
import { cn } from "@/utils/twClassname";
import { Link } from "react-router-dom";

const BannerSection1 = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div className="w-full h-full relative">
        <div
          className="w-full h-full absolute inset-0 z-[1] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://www.dpmgroup.vn/assets/lvhd-0-5d0c7eca.png")`,
            filter: "blur(1px)",
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
                <Typography className="font-extrabold text-[8vh] uppercase">
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
                <div className="flex h-[65%] my-12 mx-8">
                  <Col span={6} className="mb-12">
                    <Link to="/linh-vuc-hoat-dong/thiet-ke">
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
                          src={backgroundHomepage}
                          className="w-full h-full"
                        />
                        <Typography className="w-full absolute bottom-[5%] left-[10%] capitalize z-10 text-white text-[4vh] font-semibold">
                          Tư vấn <br /> thiết kế
                        </Typography>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6} className="mt-12">
                    <Link to="/linh-vuc-hoat-dong/san-xuat">
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
                          src={backgroundHomepage}
                          className="w-full h-full"
                        />
                        <Typography className="w-full absolute bottom-[5%] left-[10%] capitalize z-10 text-white text-[4vh] font-semibold">
                          Công tác <br /> sản xuất
                        </Typography>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6} className="mb-12">
                    <Link to="/linh-vuc-hoat-dong/van-chuyen">
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
                          src={backgroundHomepage}
                          className="w-full h-full"
                        />
                        <Typography className="w-full absolute bottom-[5%] left-[10%] capitalize z-10 text-white text-[4vh] font-semibold">
                          Công tác <br /> vận chuyển
                        </Typography>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6} className="mt-12">
                    <Link to="/linh-vuc-hoat-dong/lap-dung">
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
                          src={backgroundHomepage}
                          className="w-full h-full"
                        />
                        <Typography className="w-full absolute bottom-[5%] left-[10%] capitalize z-10 text-white text-[4vh] font-semibold">
                          Công tác <br /> lắp dựng
                        </Typography>
                      </div>
                    </Link>
                  </Col>
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
