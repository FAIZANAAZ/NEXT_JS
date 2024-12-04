import React from 'react'
import RedHeading from './redheading'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const FlashSale = () => {
  return (
   <>
   <section className='mb-[500px]'>
{/* today's */}

<RedHeading text={" Today's "} textColor={"red"} />


  {/* flash sale
   */}
<div className='mt-[24px] flex items-center gap-[87px]'>
  <h2 className='leading-[48px] text-[36px] font-semibold'>Flash Sales</h2>
  {/* time div */}
  <div className='inline-flex  items-center gap-8 '>
    <div className='flex  gap-[407px]'>
    <div className='flex gap-8'>
    <div className='text-center'>
     <div className='text-[12px] leading-[18px] font-semibold text-black '>Days</div>
     <div className='text-[32px] leading-[30px] font-bold text-black '>03</div>
     </div>
     <div className='flex flex-col justify-center mt-[20px] gap-1'>
      <div className='w-1 h-1 bg-red-400 rounded-full'></div>
      <div className='w-1 h-1 bg-red-400 rounded-full'></div>

     </div>

     <div className='text-center'>
     <div className='text-[12px] leading-[18px] font-semibold text-black '>Hour</div>
     <div className='text-[32px] leading-[30px] font-bold text-black '>23</div>
     </div>
     <div className='flex flex-col justify-center gap-1 mt-[20px]'>
      <div className='w-1 h-1 bg-red-400 rounded-full'></div>
      <div className='w-1 h-1 bg-red-400 rounded-full'></div>

     </div>

     <div className='text-center'>
     <div className='text-[12px] leading-[18px] font-semibold text-black '>Minutes</div>
     <div className='text-[32px] leading-[30px] font-bold text-black '>19</div>

     </div>
     <div className='flex flex-col mt-[20px]  justify-center gap-1'>
      <div className='w-1 h-1 bg-red-400 rounded-full'></div>
      <div className='w-1 h-1 bg-red-400 rounded-full'></div>

     </div>

     <div className='text-center'>
     <div className='text-[12px] leading-[18px] font-semibold text-black '>Second</div>
     <div className='text-[32px] leading-[30px] font-bold text-black '>56</div>
     </div>
    </div>
    {/* round button */}
    <div className='flex gap-2'>
    <Button variant={"outline"} size={"icon"}    className="rounded-full">
      <ChevronRight size={24}/>
    </Button>
    <Button variant={"outline"} size={"icon"} className="rounded-full">
      
      <ChevronRight size={24}/>
    </Button>
    </div>

    

    
     
    </div>
  </div>
</div>


   </section>
   </>
  )
}

export default FlashSale
