import React from 'react'
import Image from 'next/image'

const Sec2 = () => {
  return (
    <div>
      
       
      <div className=" sm:mt-[0px]  flex flex-col sm:flex-row bg-yellow-200  md:flex-row h-screen sm:pr-[15px] ">
            <div className="w-full sm:w-full md:w-1/2 text-black flex flex-col justify-center sm:ml-[50px] sm:p-8 mb-[20px] md:mb-0">
             
                <h1
                    className="font-bold mt-2 text-black text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-center">
                    ABOUT US
                </h1>
                <p
                    className="px-[20px] sm:px-0 mt-4 sm:text-start text-[14px] sm:text-[16px] md:text-[16px] text-center ">
                 
                 Welcome to **Gift Sho**, your top source for unique and high-quality gifts. Our passion for finding the perfect items for every occasion means we are committed to offering you the best in quality, design, and customer care. With each gift, we aim to bring a little more joy into your life. Thank you for choosing us to be part of your gifting experience!
                </p>
            </div>

            <div className=" w-full relative  md:w-1/2 flex justify-center items-end lg:mt-[60px]  sm:items-center">
       <div className=" border-solid md:border-[20px] sm:border-[15px]   border-black lg:w-[90%] lg:h-[230px] md:w-[90%] md:h-[200px]  rounded-[60px] ">
        <div className="swing-in-top-fwd absolute sm:bottom-[120px] lg:bottom-[90px] md:bottom-[150px] lg:left-[120px]  left-[20px] md:left-[85px] bg-white flex items-center justify-center lg:w-[400px] lg:h-[400px] shadoww md:h-[300px] md:w-[300px] m-[auto] h-[auto] w-[auto] " >
       <Image
                    src={"/about.png"}
                    width={400}
                    height={400}
                    alt="A beautifully wrapped gift box with a purple ribbon"
                    className=" h-[auto] w-[auto]  lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px]  object-cover"
                />
                </div>
       </div>
            </div>
        </div>
        
    </div>

  )
}

export default Sec2
