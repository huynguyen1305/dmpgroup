import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "@/components/AppLayout/AppLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";

import { antdTheme } from "@/configs/antdTheme";

import GioiThieuPage from "@/pages/GioiThieuPage/GioiThieuPage";
import HomePage from "@/pages/Homepage/HomePage";
import TinTucPage from "@/pages/TinTucPage/TinTucPage";
import ThietKePage from "@/pages/ThietKePage";
import ActivePage from "@/pages/ActivePage/ActivePage";

import "@/configs/i18n/i18n";
import "@/configs/global.scss";
import SanXuatPage from "@/pages/SanXuatPage/SanXuatPage";
import VanChuyenPage from "@/pages/VanChuyenPage/VanChuyenPage";
import LapDungPage from "@/pages/LapDungPage/LapDungPage";
import DuAnPage from "@/pages/DuAnPage/DuAnPage";
import DuAnDetail from "@/pages/DuAnDetail/DuAnDetail";
import LienHePage from "@/pages/LienHePage/LienHePage";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/gioi-thieu",
        element: <GioiThieuPage />,
      },
      {
        path: "/tin-tuc",
        element: <TinTucPage />,
      },
      {
        path: "/linh-vuc-hoat-dong",
        element: <ActivePage />,
      },
      {
        path: "/linh-vuc-hoat-dong/thiet-ke",
        element: <ThietKePage />,
      },
      {
        path: "/linh-vuc-hoat-dong/san-xuat",
        element: <SanXuatPage />,
      },
      {
        path: "/linh-vuc-hoat-dong/van-chuyen",
        element: <VanChuyenPage />,
      },
      {
        path: "/linh-vuc-hoat-dong/lap-dung",
        element: <LapDungPage />,
      },
      {
        path: "/du-an",
        element: <DuAnPage />,
      },
      {
        path: "/du-an/:value",
        element: <DuAnDetail />,
      },
      {
        path: "/lien-he",
        element: <LienHePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme}>
      <StyleProvider hashPriority="low">
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
