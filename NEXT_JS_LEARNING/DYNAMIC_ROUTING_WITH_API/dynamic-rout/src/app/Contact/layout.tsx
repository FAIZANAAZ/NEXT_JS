import type { Metadata } from "next";




// hm har file ka alag layout bhi bna skty hen

export const metadata: Metadata = {
  title: "Contact",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning  className="h-screen text-[50px] font-bold flex items-center justify-center ">
        {/* suppressContentEditableWarning sy falto ki jo errors aty hen wo nhi deta ye */}
        {children}
      </body>
    </html>
  );
}
