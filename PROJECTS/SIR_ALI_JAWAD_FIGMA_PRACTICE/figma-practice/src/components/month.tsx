import React from 'react'
import RedHeading from './redheading'
import ProductCard from './productcards'
import { besrSelingCard } from '@/constant/months'
import Image from 'next/image'
import { FlashCard } from '@/constant/flascard'

const Month = () => {
  return (
   
   <>
   <section className='mt-[70px] w-full'>

<div className='flex justify-between w-full items-end'>

<div className='flex flex-col gap-[20px]'>
       <RedHeading text={"This Month"} textColor={"red"} />
{/* product month */}
       <h1 className='text-[36px] leading-[48px] font-semibold tracking-[4%]'>
       Best Selling Products
       </h1>
        </div>

        <div>
        <button className='bg-[#DB4444] text-white py-[10px] px-[48px] text-center hover:bg-gray-600 rounded-[4px] text-[16px] leading-[24px]'>View All</button>
        </div>
</div>


{/* car div */}

<div className='w-full h-[350px] flex  mt-[60px] gap-[30px] '>

<ProductCard loop={besrSelingCard as FlashCard[]}/>

</div>

<div className='text-center mt-[60px]'>
          
        <button className='bg-[#DB4444] text-white py-[10px] px-[58px] text-center hover:bg-gray-600 rounded-[4px] text-[16px] leading-[24px]'>View All</button>
        </div>
   
{/* picture div */}
<div className='w-[1150px] h-[500px] relative mt-[140px]'>
    <Image src={'/main2.png'} alt={'jj'} layout='fill' objectFit='cover' ></Image>
</div>
        
   </section>
   
   </>
  )
}

export default Month
