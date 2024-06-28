import { Inter } from "next/font/google";
import "../../styles/globals.scss";
import Sidebar from "./template/Sidebar/Sidebar";
import Navbar from "./template/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elora Barua",
  description: "This is a portfolio site of Elora Barua",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="sidebar_section">
          <Sidebar />
        </div>

        <div className="content_section">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
