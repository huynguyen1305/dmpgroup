import backgroundHistory from "@/assets/images/bg-home-page-tin-tuc.png";
// import image from "@/assets/images/card-image-1.png";
import { Typography } from "antd";

import image2010 from "@/assets/images/tin-tuc-5.jpg";
import image2020 from "@/assets/images/tin-tuc-4.jpg";
import image2023 from "@/assets/images/tin-tuc-6.jpg";

const HistorySection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundHistory})`,
        }}
      >
        <div className="container mx-auto px-[3rem] w-full h-full flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <Typography className="text-[8vh] font-extrabold">
              | LỊCH SỬ HÌNH THÀNH
            </Typography>
            <Typography className="container px-[10%] text-xl font-light text-center">
              Công ty Cổ phần Tập Đoàn D P M được thành lập{" "}
              <strong>ngày 10 tháng 10 năm 2010</strong>
            </Typography>
          </div>
          <div className="flex justify-center flex-col w-[90%] h-full mx-auto py-4">
            <div className="w-full mx-auto flex justify-between mx-[-8px]">
              <div className="flex flex-col justify-center text-center gap-2 w-[20%] ml-[12.5%]">
                <Typography className="text-2xl font-extrabold">
                  2010
                </Typography>
                <Typography className="text-xl font-light">
                  Thành lập Công Ty
                </Typography>
              </div>
              <img
                alt="img"
                src={image2020}
                className="rounded-[100%] w-[200px] h-[200px] object-cover object-left"
              />
              <div className="flex flex-col justify-center text-center gap-2 w-[20%] mr-[12.5%]">
                <Typography className="text-2xl font-extrabold">
                  Đến nay
                </Typography>
                <Typography className="text-xl font-light">
                  Là một trong những đơn vị tiên phong ứng dụng công nghệ bê
                  tông dự ứng lực lắp ghép cho các công trình dân dụng và công
                  nghiệp.
                </Typography>
              </div>
            </div>
            <div className="relative border-t-[3px] border-white w-full my-8">
              <div className="w-6 h-6 rounded-[100%] bg-white absolute top-[-13px]" />
              <div className="w-8 h-8 rounded-[100%] bg-white absolute top-[-17px] left-[20%] border-[3px] border-black" />
              <div className="w-8 h-8 rounded-[100%] bg-white absolute top-[-17px] right-[20%] border-[3px] border-black" />
              <div className="w-8 h-8 rounded-[100%] bg-white absolute top-[-17px] right-0 left-0 mx-auto border-[3px] border-black" />
              <div className="w-6 h-6 rounded-[100%] bg-white absolute top-[-13px] right-0" />
            </div>
            <div className="w-full mx-auto flex justify-between px-2">
              <img
                alt="img"
                src={image2010}
                className="rounded-[100%] w-[200px] h-[200px] ml-[12.5%] object-cover object-center"
              />
              <div className="flex flex-col justify-center items-center w-[20%] text-center gap-2">
                <Typography className="text-2xl font-extrabold">
                  2020
                </Typography>
                <Typography className="text-xl font-light">
                  Kỷ niệm 10 năm thành lập
                </Typography>
              </div>
              <img
                alt="img"
                src={image2023}
                className="rounded-[100%] w-[200px] h-[200px] mr-[12.5%] object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
