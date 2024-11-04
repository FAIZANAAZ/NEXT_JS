import React from "react";
import Image from "next/image";

const Front = () => {
    return (
        <div className="flex flex-col sm:flex-row md:flex-row h-screen">
            <div className="w-full md:w-1/2 bg-gradient-to-b from-yellow-300 to-orange-500 text-white flex flex-col justify-center items-center p-8">
                <h2 
                    className="font-bold text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px]">
                    Our Best
                </h2>
                <h1
                    className="font-bold mt-2 text-black text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]">
                    Gifts Shop
                </h1>
                <p
                    className="mt-4 text-center text-[14px] sm:text-[16px] md:text-[18px] ">
                 
                    Discover the perfect gift for every occasion at our shop. From birthdays to anniversaries, we have a wide range of unique and thoughtful gifts that will make your loved ones feel special and cherished.
                </p>
            </div>
            <div className="w-full  md:w-1/2 flex justify-center items-end lg:mt-[60px]  sm:items-center">
                <Image
                    src={"/gift.png"}
                    width={550}
                    height={550}
                    alt="A beautifully wrapped gift box with a purple ribbon"
                    className=" lg:w-[550px] lg:h-[550px] md:w-[400px] md:h-[400px] object-cover"
                />
            </div>
        </div>
    );
};

export default Front;
