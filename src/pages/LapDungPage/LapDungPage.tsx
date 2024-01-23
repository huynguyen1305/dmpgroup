import FooterSection from "@/components/FooterSection";
import ListSectionBar from "@/components/ListSectionBar/ListSectionBar";
import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import BannerSection1 from "./BannerSection1/BannerSection1";

const lapDungSections = [
  {
    name: "Banner section",
    href: "#banner",
  },

  {
    name: "Footer section",
    href: "#footer",
  },
];

const lapDungPage = () => {
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
          listSection={lapDungSections}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default lapDungPage;
