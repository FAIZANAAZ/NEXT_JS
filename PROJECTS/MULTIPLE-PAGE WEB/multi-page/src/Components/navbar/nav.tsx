"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Nav = () => {
  const [menu, setMenu] = useState(false);

  const openmenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="sticky z-10 top-0  w-full flex justify-between items-center px-4 bg-gradient-to-r from-yellow-300 to-white ">
        <div className=" flex items-center ml-[5px] sm:ml-[20px]">
          <Image
            src={"/giftlog-removebg-preview.png"}
            width={200}
            height={200}
            alt="Gift logo"
            className=" sm:w-[100px] sm:h-[100px] h-[50px] w-[50px]"
          />
        </div>
        <div className="sm:flex lg:space-x-[80px] text-black lg:font-semibold lg:text-[25px] md:space-x-[30px] md:text-[20px] md:font-[600] sm:space-x-[30px] sm:text-[18px] sm:font-[500] absolute right-[50px] hidden">
          <Link
            href={"/"}
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href={"/Aboutus"}
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            About
          </Link>
          <Link
            href={"/Ourgift"}
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Our gifts
          </Link>

          <Link
            href={"/Ourshop"}
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Shop
          </Link>
          <Link
            href={"/Contact"}
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            href={"/Product"}
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Products
          </Link>
        </div>

        <div className="flex flex-col justify-center items-end">
          <button
            onClick={() => {
              openmenu();
            }}
            className="sm:hidden block"
          >
            <ImMenu size={30} color="#000" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {/* for closing */}
        {menu == true ? (
          <motion.div
            className={
              "absolute z-10 top-[60px] right-[2px] flex flex-col space-y-[20px] text-center font-bold  h-[260px] w-[160rpx] bg-black text-white text-[30rpx]  sm:hidden p-4 "
            }
            key={"menuu"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "260px", opacity: 0.8 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={"/"}
              className=" hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Home
            </Link>

            <Link
              href={"/Aboutus"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              About
            </Link>
            <Link
              href={"/Ourgift"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Our gifts
            </Link>
            <Link
              href={"/Ourshop"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Shop
            </Link>

            <Link
              href={"/Contact"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href={"/Product"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Products
            </Link>
          </motion.div>
        ) : (
          <div
            className={
              "hidden absolute z-10 top-[50px] right-[0px] flex flex-col space-y-[10px] text-center font-bold  h-[250px] w-[120px] bg-white text-[22px]  sm:hidden "
            }
          >
            <Link
              href={"/"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href={"/Aboutus"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              About
            </Link>
            <Link
              href={"/Ourgift"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Our gifts
            </Link>
            <Link
              href={"/Ourshop"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Shop
            </Link>
            <Link
              href={"/Contact"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Contact Us
            </Link>

            <Link
              href={"/Product"}
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Products
            </Link>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
