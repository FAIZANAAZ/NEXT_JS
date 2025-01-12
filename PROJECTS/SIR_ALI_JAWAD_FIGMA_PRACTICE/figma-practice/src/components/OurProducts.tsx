import React from 'react'
import RedHeading from './redheading'
import { ChevronLeft, ChevronRight, Eye, Heart, Star,  } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Image from 'next/image'
import { OurProductdata } from '@/constant/product'


const OurProduct = () => {
  return (
  <>
  <section className='mt-[71px] w-full '>
    {/* redheading */}
    <div className='flex justify-between items-end'>
        {/* top-left-div */}
        <div className='flex flex-col gap-[20px]'>
       <RedHeading text={"Categories"} textColor={"red"} />

       <h2 className='text-[36px] leading-[48px] font-semibold tracking-[4%]'>
       Explore Our Products
       </h2>
        </div>

        <div className='flex gap-2'>
    <Button variant={"outline"} size={"icon"}    className="rounded-full">
      <ChevronLeft size={24}/>
    </Button>
    <Button variant={"outline"} size={"icon"} className="rounded-full">
      
      <ChevronRight size={24}/>
    </Button>
    </div>
        </div>

        {/* card div */}

        <div className=' w-full h-[732px] grid grid-cols-4 gap-[60px] mt-[60px] '>
        {OurProductdata.map((items:any)=>{return (
               <Card key={items.id}  className="w-[270px] h-full overflow-hidden grow-0 shrink-0">
               {/* Top Image */}
               <div  className="relative w-full h-[250px] bg-[#F5F5F5] p flex justify-center items-center">
                 <Image src={items.src} alt="image" width={132} height={102}></Image>
       
                 {/* Badge */}
                {items.discountPrice && <Button className="bg-[rgb(103,219,68)] py-1 px-3 absolute top-3 left-3">
                  {items.discountPrice}    </Button>}
       
                 {/* icon div */}
                 <div className="absolute top-3 right-3 flex flex-col gap-2">
                   {/* trash */}
                 
 
       
                   {/* heart */}
                   {items.heartIcon &&<Button
                     size={"icon"}
                     variant={"outline"}
                     className="rounded-full w-[34px] h-[34px]"
                   >
                     <Heart size={24} />
                   </Button>}
       
                   {/* eye */}
                   {items.eyeIcon && 
                   <Button
                   size={"icon"}
                   variant={"outline"}
                   className="rounded-full w-[34px] h-[34px]"
                 >
                   <Eye size={24} />
                 </Button>}
                 </div>
               </div>
       
      
              {/* Bottom content */}
              <div className="w-full flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]">
                {/* 1 */}
                <p className="mt-[10px]">{items.Heading}</p>
      
                {/* 2 */}
                <div className="flex gap-3">
                  <span className="text-red-500">${items.price}</span>
                  <div className="flex gap-1 items-center">
                {[...Array(items.star)].map(() => {
                    return <Star size={20} fill="#FFAD33" color="#FFAD33" />;
                  })}
      
                  <p className="text-gray-500">({items.reviews})</p>
                </div>
                </div>
      {/* 3 */}
{items.colorDiv && items.color1 && <div className='flex items-center gap-2'>
    
    <div className={`w-[20px] h-[20px] rounded-full border-[1px]  border-black border-solid  ${items.color1}`}></div>
    <div className={`w-[20px] h-[20px] rounded-full  bg-red-500 `}></div>
     </div>}               
              </div>
            </Card>
      )})}



        </div>

  </section>
  <div className='text-center mt-[60px]'>
          
          <button className='bg-[#DB4444] text-white py-[10px] px-[58px] text-center hover:bg-gray-600 rounded-[4px] text-[16px] leading-[24px]'>View All</button>
          </div>
  </>
  )
}

export default OurProduct
