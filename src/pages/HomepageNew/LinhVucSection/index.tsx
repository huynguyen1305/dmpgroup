import backgroundHomepage from "@/assets/images/bg-home-page-linh-vuc.png";
import cardImage1 from "@/assets/images/card-image-3.jpeg";
import { Col, Typography } from "antd";
import styles from "./LinhVucSection.module.scss";
import { cn } from "@/utils/twClassname";
import { Link } from "react-router-dom";

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
                  <img alt="img" src={cardImage1} className="w-full h-full" />
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
                  <img alt="img" src={cardImage1} className="w-full h-full" />
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
                  <img alt="img" src={cardImage1} className="w-full h-full" />
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
                  <img alt="img" src={cardImage1} className="w-full h-full" />
                  <Typography className="w-full absolute bottom-[5%] left-[10%] capitalize z-10 text-white text-[4vh] font-semibold">
                    Công tác <br /> lắp dựng
                  </Typography>
                </div>
              </Link>
            </Col>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinhVucSection;
