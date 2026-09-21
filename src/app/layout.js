import { Hind_Siliguri } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "আলোর ভুবন পাঠাগার - আভুপা",
  description: "বইয়ের পাতায় নিজেকে খুঁজি",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}