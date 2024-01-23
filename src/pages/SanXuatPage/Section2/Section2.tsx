import { Typography } from "antd";

import backgroundHomepage from "@/assets/images/homepage-background.png";
import background from "@/assets/images/bg-home-page-tin-tuc.png";

const Section2 = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="container mx-auto h-full flex mt-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-shrink-0 mt-[150px]">
          <Typography className="text-[4vh] font-extrabold">
            Giới Thiệu Sản Phẩm
          </Typography>
          <Typography className="text-xl font-light">
            1. Cột bê tông lắp ghép đúc sẵn.
          </Typography>
          <Typography className="text-xl font-light">
            2. Dầm bê tông ghép dự ứng lực.
          </Typography>
          <Typography className="text-xl font-light">
            3. Sàn bê tông lắp ghép dự ứng lực.
          </Typography>
          <Typography className="text-xl font-light">
            4. Cầu thang bê tông cốt thép đúc sẵn.
          </Typography>
        </div>

        <div className="w-3/4 m-auto pr-6">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={backgroundHomepage}
              alt=""
              className="w-full h-full rounded-xl border-[4px] border-white object-cover object-center"
            />
            <img
              src={backgroundHomepage}
              alt=""
              className="w-full h-full rounded-xl border-[4px] border-white object-cover object-center"
            />
            <img
              src={backgroundHomepage}
              alt=""
              className="w-full h-full rounded-xl border-[4px] border-white object-cover object-center"
            />
            <img
              src={backgroundHomepage}
              alt=""
              className="w-full h-full rounded-xl border-[4px] border-white object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
