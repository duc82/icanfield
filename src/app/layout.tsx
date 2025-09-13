import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GsapProvider from "@/components/provider/GsapProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ICANFIELD",
  description: "Sự kiện ICANFIELD dòng chảy tin tức",
  icons: "/header/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <GsapProvider>{children}</GsapProvider>
        <Footer />
      </body>
    </html>
  );
}
