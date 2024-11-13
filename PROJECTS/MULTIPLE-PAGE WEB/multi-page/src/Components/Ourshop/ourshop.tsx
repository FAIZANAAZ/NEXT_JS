

import React from 'react'
import Image from 'next/image'

const Sec4 = () => {
  return (
   <>
   <section  className="flex justify-center items-center min-h-screen bg-white p-4 mb-[100px]">

  <div className="flex  h-screen flex-col lg:px-[90px] md:px-[50px] gap-[80px] sm:gap-[100px] md:flex-row items-center space-y-0 lg:space-y-0 lg:space-x-8">
   <div className="relative md:w-1/2 z-0">
    
    <div className="absolute  top-8 left-8 lg:top-8 lg:left-8 sm:top-8 sm:left-8 md:top-8 md:left-5  w-[auto] h-[auto] sm:h-[250px] md:h-[0px] sm:w-[450px] md:w-[0px] lg:w-[400px] lg:h-[400px] border-solid border-black border-[20px] rounded-lg ">
    </div>
    <Image
              alt="A  woman in a flower shop surrounded by flowers"
              src={"/sec4-1.jpg"}
              width={400}
              height={400}
              className="relative w-74 h-70  sm:w-[450px] sm:h-[250px] md:w-[400px] md:h-[400px] rounded-lg border-8 border-yellow-400"  />

    
   </div>



   {/* part2 */}
   <div className="flex md:w-1/2  flex-col items-center md:items-center text-center md:text-right">
    <h1 className="text-5xl font-bold  text-black mb-6 sm:text-7xl md:text-5xl">
     Our Shop
    </h1>
    <p className="text-gray-700 text-start sm:font-semibold text-[13px] sm:text-[15px] mb-4">
    At our shop, quality and creativity are at the heart of everything we offer. Each gift is selected with love and crafted to bring smiles. Explore our range, and find the perfect piece that speaks to your loved ones  hearts, or discover a treasure for yourself!
    </p>
    <p className="text-gray-700 text-start sm:font-semibold text-[13px] sm:text-[15px] mb-4">
    For years, our gift shop has been a trusted choice for customers looking for unique and meaningful gifts. With a strong reputation built on quality and reliability, we take pride in delivering a positive experience to each visitor. Our customers’ feedback has been overwhelmingly positive, and we ensure that every order is delivered on time, making each occasion extra special.
    </p>
   
   </div>
  </div>
 </section>

   </>
  )
}

export default Sec4
