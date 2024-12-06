import React from 'react'
import RedHeading from './redheading'
import Image from 'next/image'

const Features = () => {
  return (
    <>
    <section className='w-full mt-[140px]'>
    <div className='flex  items-end'>
        {/* top-left-div */}
        <div className='flex flex-col gap-[20px]'>
       <RedHeading text={"Features"} textColor={"red"} />

       <h1 className='text-[36px] leading-[48px] font-semibold tracking-[4%]'>
      New Arrivals
       </h1>
        </div>
        </div>
        {/* images sec arival */}

        <div className='w-full h-[600px] grid grid-cols-4 grid-rows-2 gap-[30px] mt-[60px] '>
          <div className='bg-green-400 col-span-2 row-span-2 relative'>
            <Image src={"/frame4.png"} alt={"image"}  objectFit='cover' layout='fill'/>
          </div>
          <div className='bg-yellow-300 col-span-2 relative'>
          <Image src={"/frame3.png"} alt={"image"}  objectFit='cover' layout='fill'/>

          </div>
          <div className='bg-red-700 relative'>
          <Image src={"/frame2.png"} alt={"image"}  objectFit='cover' layout='fill'/>

          </div>
          <div className='bg-blue-950 relative'>
          <Image src={"/frame1.png"} alt={"image"}  objectFit='cover' layout='fill'/>

          </div>
        </div>
        
        {/*  */}

    </section>
    </>
  )
}

export default Features
