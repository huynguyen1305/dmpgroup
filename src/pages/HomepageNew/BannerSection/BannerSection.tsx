/* eslint-disable @typescript-eslint/no-explicit-any */
// @@ts-expect-error
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import styles from "./BannerSection.module.scss";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/utils/twClassname";
import { banners } from "@/mocks";

const BannerSection = () => {
  const swiperRef: any = useRef(null);
  useLayoutEffect(() => {
    if (swiperRef.current) {
      swiperRef?.current?.swiper?.autoplay?.stop();
    }
  }, []);
  return (
    <section className="w-full h-full pt-[80px]">
      <div
        onMouseEnter={() => {
          swiperRef?.current?.swiper?.autoplay?.start();
        }}
        className={cn(styles.swiperContainer)}
      >
        <Swiper
          ref={swiperRef}
          grabCursor
          pagination={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 4000,
          }}
          className="w-full h-full"
        >
          {banners?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.swiperItem} key={item.id}>
                <img src={item.image} className={styles.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection;
