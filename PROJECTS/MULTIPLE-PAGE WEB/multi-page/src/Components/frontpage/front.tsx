import React from "react";
import Image from "next/image";


const Front = () => {
    return (
        <>

        {/* sec1 */}
        <div className="flex flex-col sm:flex-row md:flex-row sm:h-screen h-1/2">
            <div className="w-full sm:w-1/2 md:w-1/2 bg-gradient-to-b from-yellow-300 to-orange-500 text-white flex flex-col justify-center items-center p-8">
                <h2 
                    className="font-bold text-[30px] sm:text-[35px] md:text-[30px] lg:text-[50px]">
                    Our Best
                </h2>
                <h1
                    className="font-bold mt-2 text-black text-[40px] sm:text-[50px] md:text-[50px] lg:text-[70px]">
                    Gifts Shop
                </h1>
                <p
                    className="mt-4 text-center text-[14px] sm:text-[16px] md:text-[18px] ">
                 
                    Discover the perfect gift for every occasion at our shop.  From birthdays to anniversaries, we have a wide range of unique and thoughtful gifts that will make your loved ones feel special and cherished.
                </p>
            </div>
            <div className="hidden sm:block h-[auto] w-[auto] sm:w-1/2  md:w-1/2 flex justify-center items-end lg:mt-[100px] sm:ml-[20px] md:ml-[90px] ml-[100px] lg:ml-[150px] mt-[100px]  sm:items-center">
                <Image
                    src={"/gift.png"}
                    width={500}
                    height={500}
                    alt="A beautifully wrapped gift box with a purple ribbon"
                    className="tilt-in-top-1 sm:w-[400px] sm:h-[400px]  lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] object-cover "
                />
            </div>
        </div>

      



        </>
    );
};

export default Front;
