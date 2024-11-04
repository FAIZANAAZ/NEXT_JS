import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className="absolute top-0 right-[10px] w-full flex justify-between items-center p-4 ">
      <div className="flex items-center ml-[20px]">

        <Image
          src={"/giftlog-removebg-preview.png"}
          width={200}
          height={200}
          alt="Gift logo"
          className="sm:w-[100px] sm:h-[100px] h-[50px] w-[50px]"
        />
      </div>
      <div className="sm:flex lg:space-x-[80px] text-black lg:font-semibold lg:text-[25px] md:space-x-[25px] md:text-[25px]  md:font-[500] sm:space-x-[25px] sm:text-[25px]   sm:font-[500] hidden">
        <a href="#" className="hover:underline  hover:decoration-orange-400 hover:font-bold transition-all duration-300">Home</a>
        <a href="#" className="hover:underline  hover:decoration-orange-400 hover:font-bold transition-all duration-300">About</a>
        <a href="#" className="hover:underline  hover:decoration-orange-400 hover:font-bold transition-all duration-300">Our gifts</a>
        <a href="#" className="hover:underline  hover:decoration-orange-400 hover:font-bold transition-all duration-300">Shop</a>
        <a href="#" className="hover:underline  hover:decoration-orange-400 hover:font-bold transition-all duration-300">Contact Us</a>
      </div>
    </nav>
  )
}

export default Nav;
