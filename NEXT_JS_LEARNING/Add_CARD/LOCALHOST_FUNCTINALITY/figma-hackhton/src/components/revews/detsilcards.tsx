
import Card from "../cards";

export default function Detailcards
() {
  return (
    <>
    <div className="bg-white flex items-center flex-col justify-center object-cover md:mb-[180px]">
        
      <h1 className=" md:pt-5 font-integral md:text-[48px] font-bold leading-[57.6px]">
      You might also like
      </h1>
      <div className=" w-full h-fit flex flex-col md:flex-row items-center justify-between md:mx-[100px] gap-4 md:gap-8 md:mt-10">
        {/* card1 */}
        <Card
            imageUrl="/l4.png"
            h1="Polo with Contrast Trim"
            stars="/s1.png"
            ranking="4.5/5"
            price={212}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED] " id={12}        />
        {/* card2 */}
        <Card
            imageUrl="/l3.png"
            h1="Gradient Graphic T-shirt"
            stars="/s2.png"
            ranking="4.5/5"
            price={140}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]" id={11}        />

        {/* card3 (hidden on mobile, shown on md and up) */}
        <Card
            imageUrl="/l2.png"
            h1="Polo with Tipping Details"
            stars="/s3.png"
            ranking="4.5/5"
            price={180}
            className="hidden md:block  md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]" id={10}        />

        {/* card4 (hidden on mobile, shown on md and up) */}

        
        <Card
            imageUrl="/l1.png"
            h1="Black Striped T-shirt"
            stars="/s4.png"
            ranking="4.5/5"
            price={120}
            className="hidden md:block md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]" id={9}        />
      </div>
     

      </div>
   
    </>
  );
}
