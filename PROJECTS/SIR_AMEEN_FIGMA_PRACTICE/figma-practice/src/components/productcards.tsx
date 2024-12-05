import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

import { Button } from "./ui/button";
import { Eye, Heart, Star, Trash2 } from "lucide-react";
import { FlashCard } from "@/constant/flascard";  2


function ProductCard({loop}: {loop: FlashCard[]}) {
  return (
    <>
      {loop.map((items,index)=>{return (
              <Card key={index} className="w-[270px] h-full overflow-hidden grow-0 shrink-0">
              {/* Top Image */}
              <div  className="relative w-full h-[250px] bg-[#F5F5F5] p-3 flex justify-center items-center">
                <Image src={items.src} alt="image" width={172} height={152}></Image>
      
                {/* Badge */}
                <Button className="bg-[#DB4444] py-1 px-3 absolute top-3 left-3">
                  -{items.discountPrice}%
                </Button>
      
                {/* icon div */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {/* trash */}
                {items.trashIcon &&
                  <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full w-[34px] h-[34px]"
                >
                  <Trash2 size={24} />
                </Button>}

      
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
                  <span className="text-gray-500 line-through">{items.oldPrice && "$"}{items.oldPrice}</span>
                </div>
      
                {/* 3 */}
                <div className="flex gap-1 items-center">
                  {[...Array(items.star)].map(() => {
                    return <Star size={20} fill="#FFAD33" color="#FFAD33" />;
                  })}
      
                  <p className="text-gray-500">({items.reviews})</p>
                </div>
              </div>
            </Card>
      )})}
    </>
  );
}

export default ProductCard;
