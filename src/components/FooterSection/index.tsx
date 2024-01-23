import backgroundHomepage from "@/assets/images/footer-background.png";
import styles from "./FooterSection.module.scss";
import { Image, Typography } from "antd";
import { cn } from "@/utils/twClassname";
import phoneIcon from "@/assets/icons/phone-icon.svg";
import fbIcon from "@/assets/icons/fb-icon.svg";
import zaloIcon from "@/assets/icons/zalo-icon.svg";
import emailIcon from "@/assets/icons/email-icon.svg";

const FooterSection = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover px-[80px]"
        style={{
          backgroundImage: `url(${backgroundHomepage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className={cn(styles.corner_top_curved, "w-[60%] relative")}>
          <div
            className="absolute w-full right-[-5%] top-[20px] flex flex-col gap-4"
            style={{ height: "calc(100vh - 160px)" }}
          >
            <Typography className="text-[6vh] font-extrabold  text-[#354b99]">
              | THÔNG TIN LIÊN HỆ
            </Typography>
            <div className="flex flex-col gap-1">
              <Typography className="text-2xl text-[#354b99] font-extrabold">
                Địa Chỉ:
              </Typography>
              <Typography className="text-2xl text-[#354b99] font-semibold">
                16A Đường 58, Phường Phước Long A, Thành Phố Thủ Đức, Thành Phố
                Hồ Chí Minh, Việt Nam
              </Typography>
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="text-2xl text-[#354b99] font-extrabold">
                VPDD Tại TP Hồ Chí Minh:
              </Typography>
              <Typography className="text-2xl text-[#354b99] font-semibold">
                36A Nguyễn Gia Trí, Phường 25, Quân Bình Thạnh, Thành Phố Hồ Chí
                Minh, Việt Nam
              </Typography>
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="text-2xl text-[#354b99] font-extrabold">
                VPDD Tại Bình Dương:
              </Typography>
              <Typography className="text-2xl text-[#354b99] font-semibold">
                Km 1877, Quốc Lộ 1K, Dĩ An, Bình Dương, Việt Nam
              </Typography>
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="text-2xl text-[#354b99] font-extrabold">
                VPDD Tại Hà Nội:
              </Typography>
              <Typography className="text-2xl text-[#354b99] font-semibold">
                Tầng 5, Tòa Nhà Dimond, Số 1 Hoàng Đạo Thúy, Quận Thanh Xuân, TP
                Hà Nội, Việt Nam
              </Typography>
            </div>

            <div className="flex flex-wrap gap-4 w-[120%] mt-auto">
              <div className="flex items-center gap-1">
                <Image preview={false} src={phoneIcon} alt="phone-icon" />
                <Typography className="text-base text-[#000000] font-semibold">
                  <b className="font-extrabold">Hotline:</b> 0287 308 6679 -
                  0938 159 476
                </Typography>
              </div>
              <div className="flex items-center gap-1">
                <Image preview={false} src={emailIcon} alt="phone-icon" />
                <Typography className="text-base text-[#000000] font-semibold">
                  <b className="font-extrabold">Email:</b> infor@dpmgroup.vn
                </Typography>
              </div>
              <div className="flex items-center gap-1">
                <Image preview={false} src={fbIcon} alt="phone-icon" />
                <Typography className="text-base text-[#000000] font-semibold">
                  <b className="font-extrabold">Facebook:</b> CÔNG TY CỔ PHẦN
                  TẬP ĐOÀN D P M
                </Typography>
              </div>
              <div className="flex items-center gap-1">
                <Image preview={false} src={zaloIcon} alt="phone-icon" />
                <Typography className="text-base text-[#000000] font-semibold">
                  <b className="font-extrabold">Zalo:</b> DPM Group Corporation
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
