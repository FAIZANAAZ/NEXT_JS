"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sec2 from "@/Components/Aboutus/sec2";


const Nav = () => {
  const [menu, setMenu] = useState(false);

  let openmenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="absolute top-0  w-full flex justify-between items-center p-4 ">
        <div className=" flex items-center ml-[5px] sm:ml-[20px]">
          <Image
            src={"/giftlog-removebg-preview.png"}
            width={200}
            height={200}
            alt="Gift logo"
            className=" sm:w-[100px] sm:h-[100px] h-[50px] w-[50px]"
          />
        </div>
        <div className="sm:flex lg:space-x-[80px] text-black lg:font-semibold lg:text-[25px] md:space-x-[30px] md:text-[20px] md:font-[600] sm:space-x-[30px] sm:text-[20px] sm:font-[600] absolute right-[50px] hidden">
          <Link
            href="#"
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Home
          </Link>
         
          <Link
            href="@Components/Aboutus"
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Our gifts
          </Link>
          <Link
            href="/Aboutus/sec2"
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
          >
            Contact Us
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
              "absolute top-[60px] right-[2px] flex flex-col space-y-[20px] text-center font-bold  h-[240px] w-[160rpx] bg-black text-white text-[30rpx]  sm:hidden p-4 "
            }
            key={"menuu"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "240px", opacity: 0.8 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="#"
              className=" hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Home
            </Link>

            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Our gifts
            </Link>
            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Shop
            </Link>

            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        ) : (
          <div
            className={
              "hidden absolute top-[50px] right-[0px] flex flex-col space-y-[10px] text-center font-bold  h-[250px] w-[120px] bg-white text-[22px]  sm:hidden "
            }
          >
            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Our gifts
            </Link>
            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
