import { Inter, Roboto } from "next/font/google";
import "../app/globals.css";
import FloatingContactBar from "../components/Floatingcontactbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nex Go Packers & Movers",
  description: "Safe, Fast & Reliable Moving Service",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <FloatingContactBar />
        <Footer/>
      </body>
    </html>
  );
}