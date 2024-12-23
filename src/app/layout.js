'use client'
import { Inter } from "next/font/google";
import "../../styles/globals.scss";
import Sidebar from "./template/Sidebar/Sidebar";
import Navbar from "./template/Navbar/Navbar";
import DrawerSidebar from "./template/DrawerSidebar/DrawerSidebar";
import Header from "./template/Header/Header";
import { useState } from "react";
import DrawerNavbar from "./template/DrawerNavbar/DrawerNavbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Elora Barua",
//   description: "This is a portfolio site of Elora Barua",
// };

export default function RootLayout({ children }) {

  const [openLeftSidebar, setOpenLeftSidebar] = useState(false)
  const [openRightSidebar, setOpenRightSidebar] = useState(false)
  return (
    <html>
      <body>
        <Header
          openLeftSidebar={openLeftSidebar}
          setOpenLeftSidebar={setOpenLeftSidebar}
          openRightSidebar={openRightSidebar}
          setOpenRightSidebar={setOpenRightSidebar}
        />

        <div className="main_content_wrapper">
          <div className="sidebar_section">
            <DrawerSidebar openLeftSidebar={openLeftSidebar} />
            <Sidebar />
          </div>

          <div className="content_section">{children}</div>
          <DrawerNavbar openRightSidebar={openRightSidebar} />
          <Navbar />
        </div>
      </body>
    </html>
  );
}
