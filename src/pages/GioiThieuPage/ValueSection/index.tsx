import backgroundValue from "@/assets/images/bg-home-page-tin-tuc.png";
import bar_1 from "@/assets/icons/bar-1.svg";
import bar_2 from "@/assets/icons/bar-2.svg";
import bar_3 from "@/assets/icons/bar-3.svg";
import bar_4 from "@/assets/icons/bar-4.svg";
// import bar_5 from "@/assets/icons/bar-5.svg";
import { Typography } from "antd";

const ValueSection = () => {
  return (
    <section className="w-full h-full py-[80px]">
      <div
        className="container mx-auto px-10 h-full bg-no-repeat bg-cover flex flex-col items-center pt-10 gap-10"
        style={{
          backgroundImage: `url(${backgroundValue})`,
        }}
      >
        <Typography className="text-[6.5vh] font-extrabold">
          | GIÁ TRỊ CỐT LÕI
        </Typography>
        <div className="flex items-center gap-16 h-fit">
          <div className="flex justify-center relative">
            <div className="flex flex-col max-w-[220px] mt-4">
              <Typography className="text-4xl font-extrabold">
                Chất lượng
              </Typography>
              <Typography className="text-xl font-light">
                Sản phẩm xây dựng phải đáp ứng được các yêu cầu về chất liệu,
                kích thước, kết cấu,... được quy định trong tiêu chuẩn kỹ thuật
              </Typography>
            </div>
            <img src={bar_1} className="absolute left-[-30px]" />
          </div>
          <div className="flex flex-col justify-between relative">
            <img src={bar_2} className="absolute top-0 left-[-30px]" />
            <div className="flex flex-col max-w-[220px] invisible">
              <Typography className="text-4xl font-extrabold">
                An Toàn
              </Typography>
              <Typography className="text-xl font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
            </div>
            <div className="flex flex-col w-full max-w-[220px] absolute top-[220px]">
              <Typography className="text-4xl font-extrabold">
                Tiết Kiệm
              </Typography>
              <Typography className="text-xl font-light">
                Sản phẩm xây dựng có giá thành hợp lý, phù hợp với khả năng chi
                trả của người tiêu dùng
              </Typography>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="flex flex-col max-w-[220px] mt-4">
              <Typography className="text-4xl font-extrabold">
                Tiến bộ vượt trội
              </Typography>
              <Typography className="text-xl font-light">
                Sản phẩm xây dựng phải có hình thức đẹp, hài hòa, độ bền cao,
                không bị hư hỏng trong quá trình sử dụng
              </Typography>
            </div>
            <img src={bar_3} className="absolute left-[-30px]" />
          </div>
          <div className="flex flex-col justify-between relative">
            <img src={bar_4} className="absolute top-0 left-[-30px]" />
            <div className="flex flex-col max-w-[220px] invisible">
              <Typography className="text-4xl font-extrabold">
                An Toàn
              </Typography>
              <Typography className="text-xl font-light">
                Sản phẩm xây dựng phải đảm bảo an toàn cho người sử dụng và cho
                công trình.
              </Typography>
            </div>
            <div className="flex flex-col w-full max-w-[220px] absolute top-[220px]">
              <Typography className="text-4xl font-extrabold">
                An Toàn
              </Typography>
              <Typography className="text-xl font-light">
                Sản phẩm xây dựng phải đảm bảo an toàn cho người sử dụng và cho
                công trình.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
