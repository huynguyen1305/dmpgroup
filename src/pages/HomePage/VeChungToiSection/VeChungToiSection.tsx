import { cn } from "@/utils/twClassname";
import styles from "./VeChungToiSection.module.scss";
import { Typography } from "antd";
import backgroundHomepage from "@/assets/images/homepage-background.png";
import { Link } from "react-router-dom";

const VeChungToiSection = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div className="h-full w-full bg-[#fff] flex p-10">
        <div className="w-[30%] h-full bg-inherit relative">
          <div className="w-[50vw] h-full absolute">
            <div
              className={cn(
                styles.rotate,
                "border-[4px] border-[#17275D] w-[100%] h-[30%] rounded-[50%] z-0 absolute top-[30%] left-[-10%]"
              )}
            ></div>
            <div className="w-[19vw] h-[19vw] rounded-full z-10 absolute top-[11%] left-[10%] border-[6px] border-[#FF3030] overflow-hidden">
              <img
                alt="img"
                src={backgroundHomepage}
                className="w-full h-full"
              />
            </div>

            <div className="w-[13vw] h-[13vw] rounded-full z-10 absolute top-[54%] left-[29%] border-[6px] border-[#E7CF1E] overflow-hidden">
              <img
                alt="img"
                src={backgroundHomepage}
                className="w-full h-full "
              />
            </div>
            <div className="w-[15vw] h-[15vw] rounded-full z-10 absolute top-[25%] left-[50%] border-[6px] border-[#2ED72E]  overflow-hidden">
              <img
                alt="img"
                src={backgroundHomepage}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className={cn("w-[70%] relative")}>
          <div className={cn(styles.corner_top_curved, "w-[100%]")}></div>
          <div className="absolute w-[50%] h-full right-[12.5%] top-[10%] flex flex-col gap-6">
            <Link to="/gioi-thieu">
              <Typography className="text-[8vh] font-extrabold">
                | VỀ CHÚNG TÔI
              </Typography>
            </Link>
            <Typography className="text-[2vh] text-white">
              Từ ngày thành lập 2010 và phát triển đến nay, DPM đã vượt qua hàng
              ngàn thách thức, khắc phục mọi khó khăn để khẳng định mình là một
              trong những nhà sản xuất và lắp ghép các sản phẩm bê tông dự ứng
              lực đúc sẵn hàng đầu hiện nay. Chúng tôi không chỉ đo lường thành
              công bằng số lượng công trình hoàn thành, mà còn bằng khả năng tạo
              ra giá trị cho đối tác, khách hàng, và xã hội. Với phương châm
              “Phát triển cùng bạn, Thịnh vượng sẽ chia,” Chúng tôi cam kết kiến
              tạo những công trình đáp ứng mọi tiêu chuẩn đề ra của các chủ đầu
              tư, các tổng thầu về An Toàn, Chất lượng, Thẩm mỹ, Tiến độ và Giá
              thành. Chân thành cảm ơn sự tin tưởng và ủng hộ từ phía đối tác,
              khách hàng, và cộng đồng. Hãy cùng chúng tôi tiến bước vào những
              hành trình xây dựng tương lai thịnh vượng và bền vững.
            </Typography>
            <Typography className="text-[2vh] text-white">
              Chủ tịch hội đồng quản trị.
            </Typography>
            <Link to={"/gioi-thieu"}>
              <button className="text-white w-full max-w-[150px] rounded-2xl bg-[#354B99] border-white border p-2 cursor-pointer">
                XEM THÊM
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeChungToiSection;
