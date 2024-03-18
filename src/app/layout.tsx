import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "manto",
  description: "Your men's and women's fashion e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
