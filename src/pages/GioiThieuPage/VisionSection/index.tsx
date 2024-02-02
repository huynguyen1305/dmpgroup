import backgroundVision from "@/assets/images/bg-home-page-tin-tuc.png";
import image from "@/assets/images/lap-dung.jpg";
import image2 from "@/assets/images/san-xuat.jpg";
import iconEye from "@/assets/icons/vision-icon.svg";
import iconMid from "@/assets/icons/icon-bulleye.svg";
import { Typography } from "antd";
import styles from "./VisionSection.module.scss";
import { cn } from "@/utils/twClassname";

const VisionSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundVision})`,
        }}
      >
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-5 max-w-[500px]">
            <div className="flex gap-4 items-center">
              <Typography className="font-extrabold text-[6.5vh]">
                | TẦM NHÌN
              </Typography>
              <img src={iconEye} alt="" />
            </div>
            <Typography className="font-light text-xl">
              Chúng tôi tin tưởng với công nghệ của mình cộng với việc cải tiến
              không ngừng về chất lượng, luôn lắng nghe phản hồi của khách hàng
              để hoàn thiện sản phẩm, Công ty Cổ Phần Tập Đoàn D P M sẽ luôn
              mang lại cho Quý khách hàng sự hài lòng,hiệu quả,khả năng sinh lời
              cao trong đầu tư đúng với phương châm mà chúng tôi đã đề ra ‘Phát
              triển cùng bạn, Thịnh vượng sẻ chia
            </Typography>
            <img
              src={image}
              alt=""
              className={cn(styles.trapezoid_image, "w-full h-full")}
            />
          </div>
          <div className="flex flex-col gap-5 max-w-[500px]">
            <img
              src={image2}
              alt=""
              className={cn(styles.trapezoid_image, "w-full h-full")}
            />
            <div className="flex gap-4 items-center">
              <Typography className="font-extrabold text-[6.5vh]">
                | SỨ MỆNH
              </Typography>
              <img src={iconMid} alt="" />
            </div>
            <Typography className="font-light text-xl">
              Với đội ngũ cán bộ công nhân viên nhiều năm kinh nghiệm Công ty Cổ
              Phần Tập Đoàn D P M đã tạo được sự đột phá trong xu hướng sử dụng
              vật liệu và công nghệ mới vào công tác thiết kế, sản xuất và thi
              công lắp dựng cho các công trình công nghiệp và dân dụng của công
              ty tại Tp.Hồ Chí Minh và các tỉnh phía Nam
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
