"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Card from "@/components/cards";

interface CasualData {
  casualHeading: string;
  casualRating: number;
  casualImage: string;
  casualPrice: number;
}
export default function ProductFilterColor() {
  const [res, setRes] = useState<CasualData[]>([]);
  const [sortedData, setSortedData] = useState<CasualData[]>([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == 'casualPage'][0].casualData[] {
          'casualHeading': casualHeading,
          'casualRating': casualRating,
          'casualImage': casualImage.asset->url,
          'casualPrice': casualPrice
        }`
      );
      setRes(data);
      setSortedData(data); // Default میں بغیر کسی sorting کے data show ہوگا
    };

    fetchData();
  }, []);

  // Sorting function
  useEffect(() => {
    let sorted = [...res];

    if (sortOption === "lowToHigh") {
      sorted = sorted.sort((a, b) => a.casualPrice - b.casualPrice);
    } else if (sortOption === "highToLow") {
      sorted = sorted.sort((a, b) => b.casualPrice - a.casualPrice);
    }

    setSortedData(sorted);
  }, [sortOption, res]);

  return (
    <div className="mx-auto w-full px-4 py-8">
      <div className="bg-white flex items-center flex-col justify-center object-cover">
        <div className="mb-8 flex md:flex-row flex-col items-center justify-between w-full md:px-16">
          <h1 className="text-[32px] leading-[43.2px] font-bold">Casual</h1>
          <select
            className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Most Popular</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="w-full h-fit flex flex-col md:flex-row flex-wrap justify-center items-center md:gap-x-[80px] md:gap-y-[150px] md:mt-10">
          {sortedData.map((item, index: number) => {
            return (
              <Card
                key={index}
                imageUrl={item.casualImage}
                h1={item.casualHeading}
                ranking={item.casualRating}
                price={item.casualPrice}
                id={index} // Default index as ID
                className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]"
              />
            );
          })}
        </div>

        <div className="mt-[150px]">
          <Link href={"/Filter"}>
            <button className="w-[358px] h-[46px] font-medium md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px] hover:bg-gray-200 flex items-center justify-center">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
