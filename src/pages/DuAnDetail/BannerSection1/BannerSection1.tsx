import { Typography } from "antd";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import backgroundHomepage from "@/assets/images/homepage-background.png";
import { Link, useLocation } from "react-router-dom";
import { duans } from "@/mocks";

const BannerSection1 = () => {
  const location = useLocation();

  const data = duans.find(
    (item) => item.slug === location.pathname.split("/")[2]
  );
  console.log(location.pathname.split("/")[2], data);

  return (
    <section className="w-full h-full pt-[80px]">
      <div className="w-full h-full relative">
        <div
          className="w-full h-full absolute inset-0 z-[1] bg-no-repeat bg-cover"
          style={{
            background: "#354B99",
            filter: "blur(3px)",
            opacity: 0.8,
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
          <div className="px-[80px] mx-auto w-full h-full flex flex-col">
            <div className="w-full flex items-center ">
              <div className="w-1/2 flex flex-col gap-2">
                <Typography className="font-extrabold text-[6vh]">
                  | {data?.name}
                </Typography>
                <div className="flex items-center gap-2">
                  <Link to="/">
                    <Typography className="text-2xl font-medium opacity-70 hover:opacity-100">
                      Trang chủ
                    </Typography>
                  </Link>
                  <Typography className="text-2xl font-medium">
                    {">"}
                  </Typography>
                  <Link to="/du-an">
                    <Typography className="text-2xl font-medium opacity-70 hover:opacity-100">
                      Tất cả dự án
                    </Typography>
                  </Link>
                  <Typography className="text-2xl font-medium">
                    {">"}
                  </Typography>
                  <Link to={`/du-an/${data?.slug}`}>
                    <Typography className="text-2xl font-medium hover:opacity-100">
                      {data?.name && data?.name.length > 30
                        ? data?.name.slice(0, 30) + "..."
                        : data?.name}
                    </Typography>
                  </Link>
                </div>
              </div>
              <div className="w-1/2 text-justify">
                <div
                  dangerouslySetInnerHTML={{ __html: data?.info || "" }}
                  className="font-medium pt-2 px-6 text-white text-justify "
                  style={{
                    fontFamily: `'Inter', sans-serif`,
                    fontSize: "18px",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-full flex-1 overflow-hidden py-10">
              <Swiper
                grabCursor
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                centeredSlides
                navigation
                loop
                autoplay={{
                  delay: 2000,
                }}
                className="w-full h-full"
              >
                {data?.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className=" w-full h-full">
                      <img
                        src={image}
                        className={`w-full h-full object-contain object-center bg-[#354B99]`}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection1;
