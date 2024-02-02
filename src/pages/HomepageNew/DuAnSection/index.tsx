import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import backgroundHomepage from "@/assets/images/homepage-background.png";

import { Link } from "react-router-dom";
import { Typography } from "antd";

import { cn } from "@/utils/twClassname";
import { duans } from "@/mocks";

const DuAnSection = () => {
  const items = duans;
  return (
    <section className="w-full h-full pt-[80px]">
      <div className="w-full mx-auto h-full relative">
        <div className="absolute top-[0.5rem] right-[3rem] z-10 bg-white">
          <Link to={"/du-an"}>
            <Typography className="text-[#354B99] text-[6.5vh] font-extrabold text-center px-8">
              DỰ ÁN NỔI BẬT
            </Typography>
          </Link>
        </div>
        <div className="w-[100%] h-[100%] mx-auto">
          <div
            className={cn("rounded-2xl p-1 w-full h-full swiperWrapper_small")}
          >
            <Swiper
              slidesPerView={1}
              centeredSlides
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Pagination, Navigation]}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              className="w-full h-full"
            >
              {items
                .filter((item) => item.isFeature === true)
                .map((item) => (
                  <SwiperSlide key={item.slug} className="w-full h-full">
                    <div className="w-full h-full">
                      <img
                        src={item.img}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute bottom-[2.5rem] left-[50%] translate-x-[-50%] p-4 delay-1000"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          color: "black",
                        }}
                      >
                        <Link to={`/du-an/${item.slug}`}>
                          <Typography className="text-3xl font-extrabold text-[#354B99]">
                            {item.name}
                          </Typography>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuAnSection;
