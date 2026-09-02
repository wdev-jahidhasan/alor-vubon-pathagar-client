import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "আলোর ভুবন পাঠাগার - আভুপা",
  description: "বইয়ের পাতায় নিজেকে খুঁজি",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-hind-siliguri), sans-serif" }}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}