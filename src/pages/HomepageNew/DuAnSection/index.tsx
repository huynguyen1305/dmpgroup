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
      <div className="w-full mx-auto h-full pb-10 px-12">
        <Link to={"/du-an"}>
          <Typography className="text-white text-[8vh] font-extrabold text-center">
            | DỰ ÁN NỔI BẬT
          </Typography>
        </Link>
        <div className="w-[95%] h-[90%] mx-auto pb-10">
          <div className={cn("swiperWrapper_small", "rounded-2xl p-2")}>
            <Swiper
              slidesPerView={1}
              spaceBetween={"-32%"}
              centeredSlides
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="w-full h-full"
            >
              {items.map((item) => (
                <SwiperSlide className="relative my-auto" key={item.key}>
                  <img
                    src={item.img}
                    alt="Philippe Pierga Design"
                    className="w-[60%] h-[70%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-[4px] border-white"
                  />
                  <div
                    className="absolute bottom-[10%] left-[50%] translate-x-[-50%] p-4 delay-1000"
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
