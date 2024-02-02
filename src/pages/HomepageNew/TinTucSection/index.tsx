import { Typography } from "antd";
import backgroundHomepage from "@/assets/images/bg-home-page-tin-tuc.png";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { tintucs } from "@/mocks";
import { Fragment } from "react";

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
            <Typography className="text-[6.5vh] font-extrabold text-center">
              | TIN TỨC
            </Typography>
          </Link>
          <div className="flex w-full h-full pb-10 justify-center">
            <div className="w-2/5 h-full px-4">
              <div className="flex flex-col w-full h-full">
                {tintucs.map((tintuc) => {
                  if (tintuc.id === 1)
                    return (
                      <Fragment key={tintuc.id}>
                        <div className="w-full h-[70%]">
                          <img
                            alt="img"
                            src={tintuc.image}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full h-full bg-white flex flex-col justify-around px-5 max-h-[30%]">
                          <Link to={`/tin-tuc/${tintuc.slug}`}>
                            <Typography className=" text-[#354B99] text-2xl font-semibold">
                              {tintuc.title}
                            </Typography>
                          </Link>

                          <Typography className=" text-xl text-[#354B99]">
                            {tintuc.desc}
                          </Typography>

                          <Link to={`/tin-tuc/${tintuc.slug}`}>
                            <div className="w-fit flex items-center gap-5 cursor-pointer">
                              <Typography className="text-base font-extrabold text-[#354B99] ">
                                READ MORE
                              </Typography>
                              <ArrowRightOutlined
                                style={{ color: "#354B99" }}
                              />
                            </div>
                          </Link>
                        </div>
                      </Fragment>
                    );
                })}
              </div>
            </div>
            <div className="w-3/5 h-full flex flex-col gap-4">
              {tintucs.map((item) => {
                if (item.id > 1 && item.id < 5)
                  return (
                    <div className="w-full h-[32%]" key={item.id}>
                      <div className="flex w-full h-full">
                        <div className="w-[24%] h-full">
                          <img
                            src={item.image}
                            alt="img"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="bg-white max-w-[78%] h-full justify-around">
                          <div className="flex flex-col w-full h-full justify-around px-5">
                            <Link to={`/tin-tuc/${item.slug}`}>
                              <Typography className=" text-[#354B99] text-2xl font-semibold">
                                {item.title}
                              </Typography>
                            </Link>

                            <Typography className=" text-xl text-[#354B99]">
                              {item.desc}
                            </Typography>

                            <Link to={`/tin-tuc/${item.slug}`}>
                              <div className="w-fit flex items-center gap-5 cursor-pointer">
                                <Typography className="text-base font-extrabold text-[#354B99] ">
                                  READ MORE
                                </Typography>
                                <ArrowRightOutlined
                                  style={{ color: "#354B99" }}
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TinTucSection;
