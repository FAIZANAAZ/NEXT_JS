
import { categories } from '@/constant/nalink'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <section className='w-full flex mb-[140px] '>
        {/* side bar */}
        <nav className='flex flex-col gap-4 w-[217px] mt-[40px] '>
            {categories.map((catigory)=>(
              <button key={catigory.id} className='flex gap-2 items-center justify-between text-left hover:text-primary transition-colors'><span className='text-[16px] leading-[24px]'>{catigory.name}</span>
                {catigory.icon==true &&<ChevronRight/>}</button>
            ))}
        </nav>
        {/* line */}
        <div className='bg-gray-200 w-[1px] h-[384px] ml-[16px] mr-[45px]'></div>

        <div className='w-[892px] h-[344px] mt-[40px] relative'>
            <Image src={"/main.png"} alt={"image"} width={0} height={0} objectFit='cover' layout='fill'></Image>
        </div>

    </section>
    </>
  )
}

export default Hero
