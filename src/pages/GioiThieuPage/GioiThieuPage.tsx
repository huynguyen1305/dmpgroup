import FooterSection from "@/components/FooterSection";
import ListSectionBar from "@/components/ListSectionBar/ListSectionBar";
import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import BannerSection from "./BannerSection";
import ThongDiepSection from "./ThongDiepSection";
import CustomerSection from "./CustomerSection";
import ExecutiveBoardSection from "./ExecutiveBoardSection";
import HistorySection from "./HistorySection";
import ValueSection from "./ValueSection";
import VisionSection from "./VisionSection";

const gioiThieuSections = [
  {
    name: "Banner section",
    href: "#banner",
  },
  {
    name: "Thong diep section",
    href: "#thong-diep",
  },
  {
    name: "History section",
    href: "#history",
  },
  {
    name: "Vision section",
    href: "#vision",
  },
  {
    name: "Values section",
    href: "#values",
  },
  {
    name: "Executive board section",
    href: "#executive-board",
  },
  {
    name: "Customer section",
    href: "#customer",
  },
  {
    name: "Footer section",
    href: "#footer",
  },
];

const GioiThieuPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
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
        <BannerSection />
        <ThongDiepSection />
        <HistorySection />
        <VisionSection />
        <ValueSection />
        <ExecutiveBoardSection />
        <CustomerSection />
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
          listSection={gioiThieuSections}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default GioiThieuPage;
