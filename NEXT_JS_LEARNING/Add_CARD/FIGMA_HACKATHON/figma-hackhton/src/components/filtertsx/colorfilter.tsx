'use client'


import Card from "../cards"





export default function ProductFilterColor() {


  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white flex items-center flex-col justify-center object-cover ">
        
      
      <div className="mb-8 flex items-center justify-between w-full">
            <h1 className="text-[32px] leading-[43.2px] font-bold">Casual</h1>
            <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
     
        <div className=" w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr]    md:gap-x-[20px] md:gap-y-[150px] md:mt-10">
          {/* card1 */}
          <Card
            imageUrl="/l3.png"
            h1="Gradient Graphic T-shirt"
            stars="/s2.png"
            ranking="4.5/5"
            price={145}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]" id={11}        />
          {/* card2 */}
          <Card
            imageUrl="/l2.png"
            h1="Polo with Tipping Details"
            stars="/s3.png"
            ranking="4.5/5"
            price={180}
            className="hidden md:block  md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]" id={10}        />
  
          {/* card3 (hidden on mobile, shown on md and up) */}
          <Card
            imageUrl="/l1.png"
            h1="Black Striped T-shirt"
            stars="/s4.png"
            ranking="4.5/5"
            price={120}
            className="hidden md:block md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]" id={9}        />

<Card
            imageUrl="/p2.png"
            h1="SKINNY FIT JEANS"
            stars="/s2.png"
            ranking="4.5/5"
            price={240}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]" id={2}        />
  
          {/* card4 (hidden on mobile, shown on md and up) */}
          <Card
            imageUrl="/p3.png"
            h1="CHECKERED SHIRT"
            stars="/s3.png"
            ranking="4.5/5"
            price={180}
            className="hidden md:block  md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]" id={3}        />



<Card
            imageUrl="/p4.png"
            h1="SLEEVE STRIPED T-SHIRT"
            stars="/s4.png"
            ranking="4.5/5"
            price={130}
            className="hidden md:block md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]" id={4}          />

<Card
            imageUrl="/p5.png"
            h1="VERTICAL STRIPED SHIRT"
            stars="/s5.png"
            ranking="4.5/5"
            price={112}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px]" id={5}          />

<Card
            imageUrl="/p6.png"
            h1="COURAGE GRAPHIC T-SHIRT"
            stars="/s6.png"
            ranking="4.5/5"
            price={145}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px]" id={6}          />

<Card
            imageUrl="/p7.png"
            h1="LOOSE FIT BERMUDA SHORTS"
            stars="/s7.png"
            ranking="4.5/5"
            price={80}
            className="hidden md:block  md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]" id={7}          />
        </div>
        <div className="mt-[150px]">
        <button className=" w-[358px] h-[46px] md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px]   hover:bg-gray-200 flex items-center justify-center">
          View All
        </button>
        </div>
  
        </div>
     
    </div>
  )
}

