
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/Components/Footer/footer";
import Nav from "@/Components/navbar/nav";




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
