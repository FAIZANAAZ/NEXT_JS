import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/Components/Footer/footer";
import Nav from "@/Components/navbar/nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GIFT SHOP",
  description: "this is my practice website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
