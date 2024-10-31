"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
  <>

  <Image width={1000} height={1000} src={"/iphonbggg.jpg"} alt="iphon picture" className=" w-outo h-[200px] sm:w-[740px] sm:h-[300px]  md:w-full md:h-[500px] "/>

  <section className="bg-gray-1000 flex justify-between p-[20px] flex-wrap md:px-[80px]">

    <div className=" shadowcn bg-white mb-[20px] rounded-[20px] h-[250px] w-[200px] text-center relative md:h-[450px] md:w-[333px] ">
         <img src="/viphon.jpg" alt="pic" className="h-[130px] mt-[5px] ml-[12px] md:h-[280px] md:w-[314px] " />

            <p className="absolute top-[150px] left-[50px] text-blue-800 font-bold text-[25px] md:left-[80px] md:top-[310px] md:text-[40px]" >IPHONES</p>
            <Link href={"./Iphon"} className="absolute top-[190px] left-[48px]  font-bold text-[20px] bg-yellow-500 p-[3px] border-solid border-black border-[3px] hover:bg-yellow-100 md:left-[100px] md:top-[380px] md:text-[24px]">View More</Link>
         
           
  </div>

  <div className="shadowcn bg-white mb-[20px] rounded-[20px] h-[250px] w-[200px] text-center relative md:h-[450px] md:w-[333px] ">
         <img src="/watches.jpg" alt="pic" className="h-[130px] mt-[5px] ml-[12px] md:h-[280px] md:w-[314px] " />

            <p className="absolute top-[150px] left-[50px] text-blue-800 font-bold text-[25px] md:left-[80px] md:top-[310px] md:text-[40px]" >WATCHES</p>
            <Link href={"./Watch"} className="absolute top-[190px] left-[48px]  font-bold text-[20px] bg-yellow-400 p-[3px] border-solid border-black border-[3px] hover:bg-yellow-100 md:left-[100px] md:top-[380px] md:text-[24px]">View More</Link>
           
  </div>

  <div className="shadowcn bg-white mb-[20px] rounded-[20px] h-[250px] w-[200px] text-center relative md:h-[450px] md:w-[333px] ">
         <img src="/earbuds.jpg" alt="pic" className="h-[130px] mt-[5px] ml-[12px] md:h-[280px] md:w-[314px] " />

            <p className="absolute top-[150px] left-[50px] text-blue-800 font-bold text-[25px] md:left-[80px] md:top-[310px] md:text-[40px]" >EARBUDS</p>
            <Link href={"./Earbuds"} className="absolute top-[190px] left-[48px]  font-bold text-[20px] bg-yellow-400 p-[3px] border-solid border-black border-[3px] hover:bg-yellow-100 md:left-[100px] md:top-[380px] md:text-[24px]">View More</Link>
           
  </div>

  <div className="shadowcn bg-white mb-[20px] rounded-[20px] h-[250px] w-[200px] text-center relative md:h-[450px] md:w-[333px] ">
         <img src="/cover.jpg" alt="pic" className="h-[130px] mt-[5px] ml-[12px] md:h-[300px] md:w-[314px] " />

            <p className="absolute top-[150px] left-[50px] text-blue-800 font-bold text-[25px] md:left-[80px] md:top-[310px] md:text-[40px]" >COVERS</p>
            <Link href={"./Covers"} className="absolute top-[190px] left-[48px]  font-bold text-[20px] bg-yellow-400 p-[3px] border-solid border-black border-[3px] hover:bg-yellow-100 md:left-[100px] md:top-[380px] md:text-[24px]">View More</Link>
           
  </div>

   <div className="shadowcn bg-white mb-[20px] rounded-[20px] h-[250px] w-[200px] text-center relative md:h-[450px] md:w-[333px] ">
         <img src="/keychain.jpg" alt="pic" className="h-[130px] mt-[5px] ml-[12px] md:h-[280px] md:w-[314px] " />

            <p className="absolute top-[150px] left-[50px] text-blue-800 font-bold text-[25px] md:left-[80px] md:top-[310px] md:text-[40px]" >KEYCHAIN</p>
            <Link href={"./Keychain"} className="absolute top-[190px] left-[48px]  font-bold text-[20px] bg-yellow-400 p-[3px] border-solid border-black border-[3px] hover:bg-yellow-100 md:left-[100px] md:top-[380px] md:text-[24px]">View More</Link>
           
  </div>

  <div className="shadowcn bg-white mb-[20px] rounded-[20px] h-[250px] w-[200px] text-center relative md:h-[450px] md:w-[333px] ">
         <img src="/charger.jpg" alt="pic" className="h-[130px] mt-[5px] ml-[12px] md:h-[280px] md:w-[314px] " />

            <p className="absolute top-[150px] left-[50px] text-blue-800 font-bold text-[25px] md:left-[80px] md:top-[310px] md:text-[40px]" >CHARGERS</p>
            <Link href={"./Chargers"} className="absolute top-[190px] left-[48px]  font-bold text-[20px] bg-yellow-400 p-[3px] border-solid border-black border-[3px] hover:bg-yellow-100 md:left-[100px] md:top-[380px] md:text-[24px]">View More</Link>
           
  </div>
  </section>
  </>
  );
}
