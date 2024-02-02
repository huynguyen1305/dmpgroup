import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import backgroundHomepage from "@/assets/images/homepage-background.png";

import { Link } from "react-router-dom";
import { Typography } from "antd";

import { cn } from "@/utils/twClassname";
import { useState } from "react";
import { duans } from "@/mocks";

const BannerSection1 = () => {
  const [value, setValue] = useState("");
  const items = duans;
  const [filterList, setFilterList] = useState(items);

  const onChange = (e: any) => {
    setValue(e.target.value);
    if (e.target.value !== "") {
      setFilterList(
        items.filter((item) =>
          item.value.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilterList(items);
    }
  };

  return (
    <section className="w-full h-full pt-[80px]">
      <div className="w-full mx-auto h-full relative">
        <div className="absolute top-[0.5rem] left-0 z-10 w-full">
          <div className="flex w-full justify-between items-center px-12">
            <input
              type="text"
              className="w-[300px] bg-white border border-white text-gray-900 text-xl rounded-3xl focus:ring-white focus:border-white block px-4 py-2"
              placeholder="Tìm kiếm dự án"
              onChange={onChange}
              value={value}
              style={{
                fontFamily: `'Inter', sans-serif`,
              }}
            />
            <Typography className="text-[#354B99] text-[6.5vh] font-extrabold text-center px-8 bg-white">
              DỰ ÁN NỔI BẬT
            </Typography>
          </div>
        </div>
        <div className="w-[100%] h-[100%] mx-auto">
          <div
            className={cn(
              "swiperWrapper_small",
              "rounded-2xl p-1 w-full h-full"
            )}
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
              {filterList.map((item) => (
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

export default BannerSection1;
