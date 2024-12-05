import Category from "@/components/category";
import Features from "@/components/features";
import FlashSale from "@/components/fleshsale";
import Hero from "@/components/hero";
import Month from "@/components/month";
import NewArrival from "@/components/newarival";
import OurProduct from "@/components/OurProducts";


export default function Home() {
  return (
  <><div className="overflow-hidden px-[135px]">
    <Hero/>
  <FlashSale/>
  <Category/> 
  <NewArrival/>
  <Month/>
  <OurProduct/>
  <Features/>
  </div>
  </>
 
  );
}
