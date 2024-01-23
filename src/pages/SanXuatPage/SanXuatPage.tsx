import FooterSection from "@/components/FooterSection";
import ListSectionBar from "@/components/ListSectionBar/ListSectionBar";
import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import BannerSection1 from "./BannerSection1/BannerSection1";
import Section2 from "./Section2/Section2";

const sanXuatSections = [
  {
    name: "Banner section",
    href: "#banner",
  },
  {
    name: "section2",
    href: "#section2",
  },
  {
    name: "Footer section",
    href: "#footer",
  },
];

const SanXuatPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // Core change page here: handlePageChange
  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number: number) => {
    console.log("page Next", number);
  };
  return (
    <div className="w-full h-full relative bg-[#354B99]">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <BannerSection1 />
        <Section2 />
        <FooterSection />
      </ReactPageScroller>

      <div
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          height: "auto",
          transform: "translateY(-50%)",
          zIndex: 1000,
        }}
      >
        <ListSectionBar
          listSection={sanXuatSections}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default SanXuatPage;
