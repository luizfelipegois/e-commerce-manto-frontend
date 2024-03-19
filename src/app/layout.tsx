import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={roboto.className}>
        <HeaderTop />
        <HeaderMain />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
