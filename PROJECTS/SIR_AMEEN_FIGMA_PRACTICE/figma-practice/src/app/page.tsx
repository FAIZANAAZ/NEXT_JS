import Category from "@/components/category";
import FlashSale from "@/components/fleshsale";
import Hero from "@/components/hero";
import NewArrival from "@/components/newarival";
import Image from "next/image";

export default function Home() {
  return (
  <><div className="overflow-hidden">
    <Hero/>
  <FlashSale/>
  <Category/> 
  <NewArrival/>
  </div>
  </>
 
  );
}
