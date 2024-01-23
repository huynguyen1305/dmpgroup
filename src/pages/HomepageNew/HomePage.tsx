import { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import BannerSection from "./BannerSection/BannerSection";
import VeChungToiSection from "./VeChungToiSection/VeChungToiSection";
import ListSectionBar from "@/components/ListSectionBar/ListSectionBar";
import TinTucSection from "./TinTucSection";
import LinhVucSection from "./LinhVucSection";
import DuAnSection from "./DuAnSection";
import FooterSection from "../../components/FooterSection";

// https://github.com/VikLiegostaiev/react-page-scroller/tree/master

const homeSections = [
  {
    name: "Banner section",
    href: "#banner",
  },
  {
    name: "Ve chung toi section",
    href: "#ve-chung-toi",
  },
  {
    name: "Tin tuc section",
    href: "#tin-tuc",
  },
  {
    name: "Linh vuc section",
    href: "#linh-vuc",
  },
  {
    name: "Du an section",
    href: "#du-an",
  },
  {
    name: "Footer section",
    href: "#footer",
  },
];

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // Core change page here: handlePageChange
  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number: number) => {
    console.log("page Next", number);
  };

  // TO-DO: add ListSectionBar
  return (
    <div className="w-full h-full relative bg-[#354B99]">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <BannerSection />
        <VeChungToiSection />
        <LinhVucSection />
        <TinTucSection />
        <DuAnSection />
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
          listSection={homeSections}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default HomePage;
