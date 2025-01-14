"use client"
import React, { useEffect, useState } from 'react'
import RedHeading from './redheading'
import {  ChevronLeft, ChevronRight} from 'lucide-react'
import { Button } from './ui/button'

import ProductCard from './productcards'
// import { flashCard } from '@/constant/flascard'
import { client } from '@/sanity/lib/client'
import { fetchData } from '@/service/api'
// import { fetchData } from '@/service/api'
interface SanityProduct {
  _id: Number
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  image: string
}

const FlashSale = () => {
  
    const [Card, setCard] = useState([]);
 
  
    useEffect(() => {
      const fetchProducts = async () => {
        const products = await client.fetch(`*[_type == "product" ][]{
          title,
          description,
          price,
          discountPercentage,
          priceWithoutDiscount,
          rating,
          ratingCount,
          tags,
          sizes,
          "image": image.asset->url
        }
      `);
      const mappedProducts = products.map((product: SanityProduct) => ({
        Heading: product.title, // `name` ko `Heading` assign kiya
        description: product.description,
        price: product.price,
        discountPrice: product.discountPercentage,
        oldPrice: product.priceWithoutDiscount,
        star: Math.round(product.rating), // Agar decimal rating hai toh round karenge
        reviews: product.ratingCount,
        src: product.image, // `image` ko `src` assign kiya
        tags: product.tags,
        sizes: product.sizes
      }));
        setCard(mappedProducts);
        if (!products || products.length === 0 ) {
          await fetchData();
  
          const products = await client.fetch(`*[_type == "product" ][]{
            title,
            description,
            price,
            discountPercentage,
            priceWithoutDiscount,
            rating,
            ratingCount,
            tags,
            sizes,
            "image": image.asset->url
          }
        `);
          setCard(products);
        }
      };
  
      fetchProducts();
    }, []);

  return (
   <>
   <section className=' '>
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
      <ChevronLeft size={24}/>
    </Button>
    <Button variant={"outline"} size={"icon"} className="rounded-full">
      
      <ChevronRight size={24}/>
    </Button>
    </div> 
    </div>
    </div>
    </div>
              {/* Cards Div */}
           <div>   <div className='w-[1308px]   mt-[40px] flex gap-[30px] overflow-x-auto  '>
           <ProductCard loop={Card}/>
        </div>
        <div className='text-center mt-[60px]'>
          
        <button className='bg-[#DB4444] text-white py-[10px] px-[58px] text-center hover:bg-gray-600 rounded-[4px] text-[16px] leading-[24px]'>View All</button>
        </div>
        </div>



   </section>
   </>
  )
}

export default FlashSale
