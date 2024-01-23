import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "@/assets/images/logo-dmp.png";
import BurgerIcon from "@/assets/icons/burgerMenu.svg?react"; //remember add ?react

import { CloseOutlined } from "@ant-design/icons";
import { cn } from "@/utils/twClassname";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import styles from "./AppHeader.module.scss";

const navBars = [
  {
    name: "Trang Chủ",
    path: "/",
  },
  {
    name: "Về Chúng Tôi",
    path: "/gioi-thieu",
  },
  {
    name: "Lĩnh vực hoạt động",
    path: "/linh-vuc-hoat-dong",
  },
  {
    name: "Tin Tức",
    path: "/tin-tuc",
  },
  {
    name: "Các Dự Án",
    path: "/du-an",
  },
  {
    name: "Liên Hệ",
    path: "/lien-he",
  },
];

const AppHeader = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className={cn(styles.headerWrapper, "text-white px-4 md:px-12")}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex-shrink-0 w-[28px] cursor-pointer"
      >
        {isOpen ? (
          <CloseOutlined style={{ fontSize: "24px" }} />
        ) : (
          <BurgerIcon />
        )}
      </div>

      <div style={{ height: "100%", padding: "8px 20px" }}>
        <Link to="/">
          <img src={logo} alt="DPM Group" className="w-full h-full" />
        </Link>
      </div>

      <div
        className="flex items-center cursor-pointer flex-shrink-0"
        style={{ fontFamily: `Doris, sans-serif`, fontSize: "16px" }}
      >
        <span
          onClick={() => i18n.changeLanguage("vi")}
          className={cn({
            "font-bold": i18n.language === "vi",
          })}
        >
          VN
        </span>
        <Divider
          type="vertical"
          style={{
            background: "white",
            margin: "0 8px",
            fontSize: "20px",
          }}
        />
        <span
          onClick={() => i18n.changeLanguage("en")}
          className={cn({
            "font-bold": i18n.language === "en",
          })}
        >
          EN
        </span>
      </div>

      <div
        className="absolute left-0 top-[80px] w-full flex"
        style={{
          height: "calc(100vh - 80px)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.5s ease",
        }}
      >
        <div
          className="w-full md:w-1/3 flex flex-col bg-white h-full p-4 md:p-12"
          style={{ border: "1px solid #ccc" }}
        >
          <nav className="w-full flex flex-col flex-1">
            {navBars.map((navbar) => (
              <NavLink
                key={navbar.name}
                to={navbar.path}
                className={cn({
                  [styles.navItem]: true,
                  [styles.active]: location.pathname === navbar.path,
                })}
                onClick={() => setIsOpen(false)}
              >
                {navbar.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div
          className="hidden md:block md:w-2/3 bg-black opacity-50"
          style={{
            width: "100%",
            height: "calc(100vh - 80px)",
            background: "transparent",
          }}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
};

export default AppHeader;
