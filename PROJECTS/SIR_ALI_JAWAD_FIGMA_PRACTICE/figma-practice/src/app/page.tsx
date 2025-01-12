import Category from "@/components/category";
import Features from "@/components/features";
import FlashSale from "@/components/fleshsale";
import Hero from "@/components/hero";
import Month from "@/components/month";
import OurProduct from "@/components/OurProducts";
import ServiceFeatures from "@/components/service";


export default function Home() {
  return (
  <><div className="overflow-hidden px-[135px]">
    <Hero/>
  <FlashSale/>
  <Category/> 
  
  <Month/>
  <OurProduct/>
  <Features/>
  <ServiceFeatures/>
  </div>
  </>
 
  );
}
