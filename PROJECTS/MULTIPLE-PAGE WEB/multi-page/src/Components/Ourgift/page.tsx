import React from 'react'
import Image from 'next/image'
const Sec3 = () => {
  return (
    <div>
     <section className="pt-[70px] sm:mt-0 bg-gradient-to-b from-orange-400 text-white">
  <div className="text-center py-8 md:py-12">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
      Our gifts
    </h1>
    <p className="mt-4 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
      Discover gifts that make memories—unique, thoughtful, and crafted to impress for any occasion!
    </p>
  </div>
  
  <div className="  flex flex-wrap justify-center space-x-0 sm:space-x-4 lg:space-x-8 py-4 md:py-8">
    <div className=" sm:w-[35%] md:w-[40%] lg:w-[400px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center mb-4 sm:mb-0">
      <Image src={"/sec3 (1).jpg"} alt={"A small cactus in a turquoise pot"} width={400} height={400} className="object-cover w-full h-full"/>
      <div className="p-4 text-center bg-black hover:bg-yellow-200 hover:text-black cursor-pointer text-white w-full">
        <h2 className="text-lg md:text-xl  font-bold">
          View more
        </h2>
        <p className="mt-2 text-xs md:text-sm">
          These are the best  gift collections, with all varieties
        </p>
      </div>
    </div>

    <div className="sm:w-[35%]  md:w-[40%] lg:w-[400px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center mb-4 sm:mb-0">
      <Image src={"/sec3-2 (2).jpg"} alt={"A small cactus in a turquoise pot"} width={400} height={400} className="object-cover w-full h-full"/>
      <div className="p-4 text-center bg-black hover:bg-yellow-200 cursor-pointer hover:text-black text-white w-full">
        <h2 className="text-lg md:text-xl  font-bold">
          View more
        </h2>
        <p className="mt-2 text-xs md:text-sm">
          These are the best  gift collections, with all varieties
        </p>
      </div>
    </div>
  </div>
</section>

 
    </div>
  )
}

export default Sec3
