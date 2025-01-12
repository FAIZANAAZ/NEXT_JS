import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronDown, Heart, Search, ShoppingCart } from 'lucide-react'
import { Input } from './ui/input'

const Header = () => {
  return (
    <>
    <section >
        {/* top header */}
        <div className='w-full h-[48px] bg-black px-[135px]  flex pl-[445px] pr-[136px] text-white items-center '>
            <div className='flex w-[859px] justify-between items-start  '>
         <div className='flex gap-2'>
         <span>
         Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
         </span>
         <Link href={"/"} className='hover:underline font-semibold'>ShopNow</Link>
         </div>
            

{/* dropdown */}
<div className='flex '>
    
<DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1 items-center focus:outline-none text-end">
        English
        <ChevronDown size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-md rounded-md p-2">
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">English</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">Urdu</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">Arabic</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
</div>

    </div>

        </div>
        {/* bottom  header */}
<div className='w-full border-b-[1px]  pt-[40px] pb-[16px] px-[135px] border-gray-200'>
    <div className='m-auto pt-6 flex gap-[108px]  ' >
        <div className='flex items-center justify-between w-[675px] '>
            {/* logo */}
            <Link href={"/"} className='text-black font-bold text-xl'> Exclusive</Link>
            {/* navigation */}
            <nav className='hidden md:flex items-center justify-between gap-[48px]'>
                <Link href={"/"} className='text-[16px] leading-[24px] relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black'>Home</Link>
                <Link href={"#!"} className='hover:text-gray-600 text-[16px] leading-[24px] '>Shop</Link>
                <Link href={"#!"} className='hover:text-gray-600  '>Contact</Link>
                <Link href={"#!"} className='hover:text-gray-600  '>About</Link>
                <Link href={"#!"} className='hover:text-gray-600  '>Sign Up</Link>
               

            </nav>
        </div>

        {/* search */}

        <div className='flex gap-[24px] w-[347px] '>
        <div className='relative hidden md:block'>
        <Input className='w-[243px] rounded-[4px] py-[7px] pl-[20px] pr-[12px] flex gap-[10px]' placeholder='What are you looking for?' type="search"/>
        <Search className='absolute  top-1/2 right-4 -translate-y-1/2  text-gray-600'/>
        </div>
            <Heart size={32} className='cursor-pointer hover:text-gray-600'/>
            <ShoppingCart size={32} className='cursor-pointer hover:text-gray-600'/>
        </div>
    </div>

</div>
   </section></>
  )
}

export default Header
