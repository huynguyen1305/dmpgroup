import backgroundThongDiep from "@/assets/images/bg-home-page-tin-tuc.png";
import image from "@/assets/images/ceo.jpg";
import imageBg from "@/assets/images/white-background.jpg";
import { cn } from "@/utils/twClassname";
import { Typography } from "antd";
import styles from "./ThongDiep.module.scss";
import iconLogo from "@/assets/icons/logo-circle.svg";

const para1 = `
<p>Lời đầu tin&nbsp;<b>Công ty Cổ phần Tập Đoàn D P M – (DPM)</b>&nbsp;xin gửi tới quý khch hng lời cho trân trọng và hợp tác.<br>
<b>Công ty Cổ phần Tập Đoàn D P M</b>&nbsp;được thành lập ngày 10 tháng 10 năm 2010 với các chức năng kinh doanh chính của Công ty là&nbsp;:<br>
+ Sản xuất sản phẩm<u>&nbsp;</u>bê tông đúc sẵn cốt thép thường và cốt cáp dự ứng lực như&nbsp;: Dầm Cầu, Dầm Super T, Cột, Dầm, Sàn Nhà Công Nghiệp và Dân Dụng, Sàn Hollowcore, Cọc Tròn, Cọc Vuông, Cừ Ván, Vỏ Hầm, Cống, Đài Cọc, Móng Cốc…<br>
+ Vận chuyển hàng hóa.<br>
+ Xây dựng, lắp dựng các công trình dân dụng, công nghiệp, hạ tầng, cấp thoát nước bằng sản phẩm bê tông dự ứng lực.</p>

`;

const ThongDiepSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundThongDiep})`,
        }}
      >
        <div className="container mx-auto px-[2rem]">
          <Typography className="text-[6.5vh] font-extrabold ml-[8%]">
            THÔNG ĐIỆP CHỦ TỊCH
          </Typography>
          <div className="relative mx-auto w-[78vw] h-full">
            <div className="absolute top-[5vh] left-[0] w-[40vw] h-[60vh] z-10">
              <img
                src={image}
                alt=""
                className={cn(
                  styles.trapezoid_image,
                  "w-full h-full object-cover object-right"
                )}
              />
            </div>
            <div className="absolute top-0 right-[0] w-[50vw] h-[70vh]">
              <div className="w-full h-full relative">
                <img
                  alt="background"
                  src={imageBg}
                  className={cn(styles.trapezoid_image, "w-full h-full")}
                />
                <img
                  alt="background"
                  src={iconLogo}
                  className={cn(
                    styles,
                    "w-full h-full max-w-[123px] max-h-[123px] absolute top-0 right-[2rem]"
                  )}
                />
                <div className="flex flex-col gap-2 absolute top-[50%] left-0 px-[25%] translate-y-[-50%]">
                  <Typography className="text-4xl font-extrabold text-[#17275D]">
                    Lời ngỏ
                  </Typography>
                  <Typography className="text-xl font-medium text-[#17275D]">
                    <div
                      dangerouslySetInnerHTML={{ __html: para1 }}
                      style={{ textAlign: "justify" }}
                    ></div>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThongDiepSection;
