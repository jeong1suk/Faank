import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "서비스명 - 농축수산물 STO 디지털 거래소",
  description: "우리 서비스는 농축수산물의 새로운 디지털 거래소입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {" "}
        {/* flex-col과 min-h-screen 추가 */}
        <Header /> {/* Header 컴포넌트 사용 */}
        <div className="flex-grow">
          {" "}
          {/* 메인 콘텐츠 영역이 늘어나도록 */}
          {children}
        </div>
        <Footer /> {/* Footer 컴포넌트 사용 */}
      </body>
    </html>
  );
}
