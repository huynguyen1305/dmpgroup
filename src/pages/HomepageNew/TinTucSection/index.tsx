import { Typography } from "antd";
import backgroundHomepage from "@/assets/images/bg-home-page-tin-tuc.png";
import cardImage1 from "@/assets/images/card-image-1.png";
import cardImage2 from "@/assets/images/card-image-2.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TinTucSection = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundHomepage})`,
        }}
      >
        <div className="container w-full h-full flex flex-col">
          <Link to="/tin-tuc">
            <Typography className="text-[8vh] font-extrabold text-center">
              | TIN TỨC
            </Typography>
          </Link>
          <div className="flex w-full h-full pb-10 justify-center">
            <div className="w-2/5 h-full px-4">
              <div className="flex flex-col w-full h-full">
                <div className="w-full h-full">
                  <img alt="img" src={cardImage1} className="w-full h-full" />
                </div>
                <div className="w-full h-full bg-white flex flex-col justify-around px-5 max-h-[30%]">
                  <Link to={"/tin-tuc/1"}>
                    <Typography className=" text-[#354B99] text-2xl font-semibold">
                      Lorem ipsum dolor sit amet
                    </Typography>
                  </Link>

                  <Typography className=" text-xl text-[#354B99]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </Typography>

                  <Link to="/tin-tuc/1">
                    <div className="w-fit flex items-center gap-5 cursor-pointer">
                      <Typography className="text-base font-extrabold text-[#354B99] ">
                        READ MORE
                      </Typography>
                      <ArrowRightOutlined style={{ color: "#354B99" }} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-3/5 h-full flex flex-col gap-4">
              <div className="w-full h-full">
                <div className="flex w-full h-full">
                  <div className="">
                    <img
                      src={cardImage2}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white max-w-[78%] h-full justify-around">
                    <div className="flex flex-col w-full h-full justify-around px-5">
                      <Link to={"/tin-tuc/2"}>
                        <Typography className=" text-[#354B99] text-2xl font-semibold">
                          Lorem ipsum dolor sit amet aaaaaaa11111zxczxc
                        </Typography>
                      </Link>

                      <Typography className=" text-xl text-[#354B99]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </Typography>

                      <Link to="/tin-tuc/2">
                        <div className="w-fit flex items-center gap-5 cursor-pointer">
                          <Typography className="text-base font-extrabold text-[#354B99] ">
                            READ MORE
                          </Typography>
                          <ArrowRightOutlined style={{ color: "#354B99" }} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="flex w-full h-full">
                  <div className="">
                    <img
                      src={cardImage2}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white max-w-[78%] h-full justify-around">
                    <div className="flex flex-col w-full h-full justify-around px-5">
                      <Link to={"/tin-tuc/3"}>
                        <Typography className=" text-[#354B99] text-2xl font-semibold">
                          Lorem ipsum dolor sit amet aaaaaaa11111zxczxc
                        </Typography>
                      </Link>

                      <Typography className=" text-xl text-[#354B99]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </Typography>

                      <Link to={"/tin-tuc/3"}>
                        <div className="w-fit flex items-center gap-5 cursor-pointer">
                          <Typography className="text-base font-extrabold text-[#354B99] ">
                            READ MORE
                          </Typography>
                          <ArrowRightOutlined style={{ color: "#354B99" }} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="flex w-full h-full">
                  <div className="">
                    <img
                      src={cardImage2}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white max-w-[78%] h-full justify-around">
                    <div className="flex flex-col w-full h-full justify-around px-5">
                      <Link to={"/tin-tuc/4"}>
                        <Typography className=" text-[#354B99] text-2xl font-semibold">
                          Lorem ipsum dolor sit amet aaaaaaa11111zxczxc
                        </Typography>
                      </Link>

                      <Typography className=" text-xl text-[#354B99]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </Typography>

                      <Link to={"/tin-tuc/4"}>
                        <div className="w-fit flex items-center gap-5 cursor-pointer">
                          <Typography className="text-base font-extrabold text-[#354B99] ">
                            READ MORE
                          </Typography>
                          <ArrowRightOutlined style={{ color: "#354B99" }} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TinTucSection;
