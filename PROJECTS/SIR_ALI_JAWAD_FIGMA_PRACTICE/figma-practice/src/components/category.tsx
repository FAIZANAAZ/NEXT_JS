import React from 'react'
import RedHeading from './redheading'
import { ChevronLeft, ChevronRight, Headphones } from 'lucide-react'
import { Button } from './ui/button'
import menuItems from '@/constant/categoryies'

const Category = () => {
  return (
    <>
    <section className=' mt-[60px] '>
{/* for underline */}
        <div className=' h-[463px] pb-[70px] pt-[80px]  border-gray-300 border-b-[1px] border-t-[1px]'>
<div className='w-full flex flex-col gap-[60px]'>

    {/* top-div */}
    <div className='flex justify-between items-end'>
        {/* top-left-div */}
        <div className='flex flex-col gap-[20px]'>
       <RedHeading text={"Categories"} textColor={"red"} />

       <h1 className='text-[36px] leading-[48px] font-semibold tracking-[4%]'>
       Browse By Category
       </h1>
        </div>

        {/* tot-right-div */}
        <div className='flex gap-2'>
    <Button variant={"outline"} size={"icon"}    className="rounded-full">
      <ChevronLeft size={24}/>
    </Button>
    <Button variant={"outline"} size={"icon"} className="rounded-full">
      
      <ChevronRight size={24}/>
    </Button>
    </div>

    </div>

    {/* bottom div */}
    <div className='flex gap-[30px] '>
      {menuItems.map((category)=>(
            <div key={category.id} className={`h-[145px] w-[170px] border-gray-300 border-[1px] flex flex-col  items-center justify-center gap-[16px] text-center ${category.isActive? "bg-red-500 text-white" : "bg-white hover:bg-red-500 hover:text-white transition-all"}`}>
            <category.icon size={56} />
            <h3 className='  text-[16px] leading-[24px] '>{category.label}</h3>


        </div>
      ))

      }

    </div>


</div>

        </div>

    </section>
    </>
  )
}

export default Category
