import backgroundExecutiveBoard from "@/assets/images/bg-home-page-tin-tuc.png";
import portrait from "@/assets/images/card-image-3.jpeg";
import { Typography } from "antd";

const ExecutiveBoardSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover flex flex-col items-center"
        style={{
          backgroundImage: `url(${backgroundExecutiveBoard})`,
        }}
      >
        <div className="container mx-auto flex flex-col px-10 w-full h-full justify-center">
          <Typography className="text-[8vh] text-center font-extrabold">
            | BAN ĐIỀU HÀNH
          </Typography>
          <div className="flex justify-center items-center mt-6">
            <div className="flex flex-col gap-5 w-full h-full max-w-[250px] max-h-[250px] items-center justify-center flex-wrap">
              <div className="w-full h-full border-[2px] border-[#fff] p-4 rounded-[100%]">
                <img
                  src={portrait}
                  alt="portrait"
                  className="rounded-[100%] w-full h-full max-w-[250px] max-h-[250px]"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Tổng giám đốc
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 w-full h-full max-w-[200px] max-h-[200px] items-center">
              <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
                <img
                  src={portrait}
                  alt="portrait"
                  className="rounded-[100%] w-full h-full max-w-[200px] max-h-[200px]"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Lorem ipsum
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
            <div className="flex flex-col gap-2 text-center w-full h-full max-w-[200px] max-h-[200px] items-center">
              <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
                <img
                  src={portrait}
                  alt="portrait"
                  className="rounded-[100%] w-full h-full max-w-[200px] max-h-[200px]"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Lorem ipsum
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
            <div className="flex flex-col gap-2 text-center w-full h-full max-w-[200px] max-h-[200px] items-center">
              <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
                <img
                  src={portrait}
                  alt="portrait"
                  className="rounded-[100%] w-full h-full max-w-[200px] max-h-[200px]"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Lorem ipsum
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
            <div className="flex flex-col gap-2 text-center w-full h-full max-w-[200px] max-h-[200px] items-center">
              <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
                <img
                  src={portrait}
                  alt="portrait"
                  className="rounded-[100%] w-full h-full max-w-[200px] max-h-[200px]"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Lorem ipsum
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBoardSection;
