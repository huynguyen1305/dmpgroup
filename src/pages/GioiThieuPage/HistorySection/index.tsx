import backgroundHistory from "@/assets/images/bg-home-page-tin-tuc.png";
import image from "@/assets/images/card-image-1.png";
import { Typography } from "antd";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
          <div className="flex justify-center flex-col w-[90%] h-full mx-auto py-4">
            <div className="w-full mx-auto flex justify-between mx-[-8px]">
              <div className="flex flex-col justify-center text-center gap-2 w-[20%] ml-[12.5%]">
                <Typography className="text-2xl font-extrabold">
                  2010
                </Typography>
                <Typography className="text-xl font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Typography>
              </div>
              <img
                alt="img"
                src={image}
                className="rounded-[100%] w-[200px] h-[200px]"
              />
              <div className="flex flex-col justify-center text-center gap-2 w-[20%] mr-[12.5%]">
                <Typography className="text-2xl font-extrabold">
                  2014
                </Typography>
                <Typography className="text-xl font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
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
                src={image}
                className="rounded-[100%] w-[200px] h-[200px] ml-[12.5%]"
              />
              <div className="flex flex-col justify-center items-center w-[20%] text-center gap-2">
                <Typography className="text-2xl font-extrabold">
                  2012
                </Typography>
                <Typography className="text-xl font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Typography>
              </div>
              <img
                alt="img"
                src={image}
                className="rounded-[100%] w-[200px] h-[200px] mr-[12.5%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
