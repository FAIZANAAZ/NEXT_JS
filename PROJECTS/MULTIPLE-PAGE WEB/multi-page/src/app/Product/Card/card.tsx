"use client"
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import "./styles.css";
const Card = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <>
   <section className='flex p-4 flex-col justify-center items-center'>
    <h1 className=' md:text-[50px] sm:text-[40px] text-[25px] font-bold'>
      CORPORATE GIFTS
    </h1>

    <div className="embla h-[50vh] w-[100%] bg-green-700 overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex w-[20%] gap-x-[20px] bg-black">
        
        <div className="embla__slide bg-slate-800 h-[500px] w-[50px]">Slide 1</div>
        <div className="embla__slide bg-yellow-600 h-[500px] w-[50px]">Slide 1</div>
        <div className="embla__slide bg-red-200 h-[500px] w-[50px]">Slide 1</div>
        
  

      
      </div>
    </div>
    </section>
    </>
  )
}

export default Card
