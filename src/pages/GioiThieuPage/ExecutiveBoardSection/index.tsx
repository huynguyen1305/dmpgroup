import backgroundExecutiveBoard from "@/assets/images/bg-home-page-tin-tuc.png";
import ceo from "@/assets/images/ceo.jpg";
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
          <Typography className="text-[6.5vh] text-center font-extrabold">
            | BAN ĐIỀU HÀNH
          </Typography>
          <div className="flex justify-center items-center mt-6">
            <div className="flex flex-col gap-5 w-[250px] h-[250px] items-center justify-center flex-wrap">
              <div className="w-[250px] h-[250px] border-[2px] border-[#fff] p-4 rounded-[100%] flex items-center justify-center">
                <img
                  src={ceo}
                  alt="ceo"
                  className="rounded-[100%] w-[230px] h-[230px] max-w-[230px]"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Mr. Lê Văn Minh
              </Typography>
              <Typography className="text-xl font-light">
                Chủ tịch hội đồng quản trị
              </Typography>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 w-[200px] h-[200px] max-w-[200px] items-center">
              <div className="w-[200px] h-[200px] border-[2px] border-[#fff] p-4 rounded-[100%] flex items-center justify-center">
                <img
                  src={ceo}
                  alt="ceo"
                  className="rounded-[100%] w-[180px] h-[180px] max-w-[180px] object-cover object-center"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Lorem ipsum
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
            <div className="flex flex-col gap-2 text-center w-[200px] h-[200px] max-w-[200px] items-center">
              <div className="w-[200px] h-[200px] border-[2px] border-[#fff]  p-4 rounded-[100%] flex items-center justify-center">
                <img
                  src={ceo}
                  alt="ceo"
                  className="rounded-[100%] w-[180px] h-[180px] max-w-[180px] object-cover object-center"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Lorem ipsum
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
            <div className="flex flex-col gap-2 text-center w-[200px] h-[200px] max-w-[200px] items-center">
              <div className="w-[200px] h-[200px] border-[2px] border-[#fff]  p-4 rounded-[100%] flex items-center justify-center">
                <img
                  src={ceo}
                  alt="ceo"
                  className="rounded-[100%] w-[180px] h-[180px] max-w-[180px] object-cover object-center"
                />
              </div>
              <Typography className="text-4xl font-extrabold">
                Lorem ipsum
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum
              </Typography>
            </div>
            <div className="flex flex-col gap-2 text-center w-[200px] h-[200px] max-w-[200px] items-center">
              <div className="w-[200px] h-[200px] border-[2px] border-[#fff]  p-4 rounded-[100%] flex items-center justify-center">
                <img
                  src={ceo}
                  alt="ceo"
                  className="rounded-[100%] w-[180px] h-[180px] max-w-[180px] object-cover object-center"
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
