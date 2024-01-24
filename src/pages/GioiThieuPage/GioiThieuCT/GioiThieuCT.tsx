import backgroundThongDiep from "@/assets/images/bg-home-page-tin-tuc.png";
// import image from "@/assets/images/homepage-background.png";
import imageBg from "@/assets/images/white-background.jpg";
import { cn } from "@/utils/twClassname";
import { Typography } from "antd";
import styles from "./GioiThieuCT.module.scss";
// import iconLogo from "@/assets/icons/logo-circle.svg";

const para1 = `
<div class="wpb_wrapper">
			<p>Hiện nay, Công ty có số vốn điều lệ là 20 tỷ đồng và liên doanh với&nbsp;<b>02 Công ty&nbsp;</b>có nhà máy Sản xuất cấu kiện bê tông sau<br>
+&nbsp;<b>Công Ty CP Bê Tông Xuân Mai Miền Nam</b>&nbsp;có Nhà máy bê tông dự ứng lực tại Xã An Tây ,Huyện Bến Cát,Bình Dương với diện tích trên 8 ha.<br>
+&nbsp;<b>Công Ty Cổ Phần Beton 6&nbsp;</b>có Nhà máy bê tông dự ứng lực tại Km 1877 Quốc lộ 1K, Phường Bình An, Thị xã Dĩ An, Tỉnh Bình Dương với diện tích trên 26 ha.</p>
<p><b>Công ty Cổ Phần Tập Đoàn D P M</b>&nbsp;là một trong những đơn vị tiên phong ứng dụng công nghệ bê tông dự ứng lực lắp ghép cho các công trình dân dụng và công nghiệp.</p>
<p>Với đội ngũ cán bộ công nhân viên nhiều năm kinh nghiệm&nbsp;<b>Công ty Cổ Phần Tập Đoàn D P M</b>&nbsp;đã tạo được sự đột phá trong xu hướng sử dụng vật liệu và công nghệ mới vào công tác thiết kế, sản xuất và thi công lắp dựng cho các công trình công nghiệp và dân dụng của công ty tại Tp.Hồ Chí Minh và các tỉnh phía Nam như:</p>
<p><i>Showroom Honda Hòa Bình Minh, Nhà máy Tiger, Nhà máy Fujikkura, Chung cư Hai Thành, Công trình Nhà ở cho người thu nhập thấp Sơn An, Công trình Nhà ở xã hội Bửu Long Biên Hòa Công trình KTX SV Đại học Quốc Gia – Thành phố Hồ Chí Minh, Dự án Nhà máy 2 – Công ty TNHH Paihong Việt Nam, Dự án SLP Park Xuyên Á, Dự Án SLP Long Hậu Logistics Gian đoạn 1 và Giai Đoạn 2, Dự Án Logos Logistics Long An,…</i></p>
<p>Các sản phẩm của chúng tôi đã được thực hiện trong thời gian qua từng bước khẳng định được thương hiệu trên thị trường và sự tin cậy của các khách hàng như :&nbsp;<i>Tập đoàn Intel, Maeda, Shimizu, Tasei, Kazima, Toda, Dinco, Vingroup, Sungroup , Đại học Quốc Gia Tp.HCM, Minh Global, Cotecons, Unicons, Newtecons, Ricons, AAEC,..</i></p>
<p>Công nghệ bê tông dự ứng lực của&nbsp;<b>Công ty Cổ Phần Tập Đoàn D P M</b>&nbsp;với những ưu điểm riêng vốn có của mình như :<br>
– Chất lượng sản phẩm được kiểm soát tốt.<br>
– Kết cấu nhẹ<br>
– Tốc độ thi công nhanh.<br>
– Đa dạng, linh hoạt về loại hình kiến trúc với khả năng vượt nhịp lớn.<br>
– Giá thành xây dựng cạnh tranh.<br>
Chúng tôi tin tưởng với công nghệ của mình cộng với việc cải tiến không ngừng về chất lượng, luôn lắng nghe phản hồi của khách hàng để hoàn thiện sản phẩm, Công ty Cổ Phần Tập Đoàn D P M sẽ luôn mang lại cho Quý khách hàng sự hài lòng,hiệu quả,khả năng sinh lời cao trong đầu tư đúng với phương châm mà chúng tôi đã đề ra ‘Phát triển cùng bạn, Thịnh vượng sẻ chia.</p>
<p style="text-align: right;"><em><strong>Trân trọng kính chào và vinh dự cùng hợp tác phát triển!</strong></em></p>

		</div>

`;

const GioiThieuCTSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundThongDiep})`,
        }}
      >
        <div className="container mx-auto px-[2rem]">
          <div className="relative mx-auto w-[78vw] h-full">
            <div className="absolute top-0 right-[0] w-[80vw] h-[80vh]">
              <div className="w-full h-full relative">
                <img
                  alt="background"
                  src={imageBg}
                  className={cn(styles.trapezoid_image, "w-full h-full")}
                />

                <div
                  className={`${styles.param1} h-[75vh] w-[82vw] mx-auto flex flex-col gap-2 absolute top-[50%] left-0 px-[13%] translate-y-[-50%] overflow-y-auto`}
                >
                  <Typography className="text-2xl font-extrabold text-[#17275D] text-center ">
                    Về chúng tôi
                  </Typography>
                  <Typography className="text-xl font-medium text-jutify text-[#17275D]">
                    <div dangerouslySetInnerHTML={{ __html: para1 }}></div>
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

export default GioiThieuCTSection;
