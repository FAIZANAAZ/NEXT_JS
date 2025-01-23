"use client"

import * as React from "react"
import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { IoIosSearch } from "react-icons/io"
import { RxCross2 } from "react-icons/rx"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="w-full">
      {/* Promo Banner */}
      <div className="hidden lg:flex w-full bg-black text-white py-2.5">
        <div className="container mx-auto px-4  flex justify-end md:gap-[500px]  items-center">
          <div className="flex gap-2 text-[12px] md:text-[14px] mx-auto  sm:mx-0">
            <span>Sign up and get 20% off to your first order.</span>
            <Link href="/" className="hover:underline">
              Sign Up Now
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hidden sm:flex">
            <RxCross2 className="h-4 w-4 text-end hidden md:flex" />
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white w-full border-b overflow-x-hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                  <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                <Link href="/" className="w-full">
                          Home
                        </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-lg hover:underline">
                    
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="/Aboutus" className="w-full">
                          About Us
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/Contact" className="w-full">
                          Contact Us
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link href="/Filter" className="text-lg hover:underline">
                    Shop
                  </Link>
                  <Link href="/OnSale" className="text-lg hover:underline">
                    On Sale
                  </Link>
                  <Link href="/NewArrival" className="text-lg hover:underline">
                    New Arrivals
                  </Link>
                  <Link href="/Brand" className="text-lg hover:underline">
                    Brands
                  </Link>
                  <Link href="/Product" className="text-lg hover:underline">
                    Our Products
                  </Link>
                  <Button variant="ghost" size="icon" aria-label="Account">
                    <FaRegUserCircle className="w-10 h-10" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="text-[25.2px] font-bold leading-[30.24px] font-integral-extra">
              <h1 className="text-[25.2px] md:text-5xl font-extrabold leading-[30.24px] md:leading-[38.4px] font-integral-extra">
                SHOP.CO
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6 md:gap-9 font-medium text-base">
                <li className="flex items-center">
                <Link href="/" className="w-full">
                        Home
                        </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center hover:text-gray-600">
                    
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="/Aboutus" className="w-full">
                          About Us
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/Contact" className="w-full">
                          Contact Us
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link href="/Filter" className="hover:text-gray-600">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/OnSale" className="hover:text-gray-600">
                    On Sale
                  </Link>
                </li>
                <li>
                  <Link href="/NewArrival" className="hover:text-gray-600">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/Brand" className="hover:text-gray-600">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/Product" className="hover:text-gray-600">
                    Our Products
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center gap-4 flex-1 lg:flex-none justify-end lg:justify-start">
              <Button variant="ghost" size="icon" className="sm:hidden" aria-label="Search">
                <IoIosSearch className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart">
                <Link href={"/Addcard"}>
                  {" "}
                  <FiShoppingCart className="w-7 h-7" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

