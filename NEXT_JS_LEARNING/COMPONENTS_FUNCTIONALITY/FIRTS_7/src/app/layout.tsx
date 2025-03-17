import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "E-Commerce Store",
  description: "A simple e-commerce store built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <header className="border-b">
              <div className="container mx-auto py-4 px-4">
                <div className="flex justify-between items-center">
                  <Link href="/" className="text-2xl font-bold">
                    Store
                  </Link>

                  <nav className="flex items-center gap-4">
                    <Link href="/cart">
                      <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/wishlist">
                      <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </Link>
                  </nav>
                </div>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="border-t py-6">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

