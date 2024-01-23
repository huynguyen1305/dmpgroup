import FooterSection from "@/components/FooterSection";
import BannerSection from "./BannerSection";
import GridSection from "./GridSection";

const TinTucPage = () => {
  return (
    <div className="w-full h-full relative bg-[#354b99]">
      <BannerSection />
      <GridSection />
      <div className="w-[100%] h-[100vh]">
        <FooterSection />
      </div>
    </div>
  );
};

export default TinTucPage;
