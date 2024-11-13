"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "../../../constant/card";


interface ProductDetailsProps {
  cardid: number;
}

const Productdetails: React.FC<ProductDetailsProps> = ({ cardid }) => {
  const cardData = data.find((item) => item.id == cardid);

  return (
    <>
      <section>
        <div key={cardData?.id} className="container mx-auto pt-[20px] sm:h-[90vh]  flex justify-center items-center  lg:pt-[60px]">
          <div className="flex flex-col  sm:flex-row">
            {/* Image Section */}
            <div className="lg:w-[500px] lg:h-[500px] md:h-[450px] md:w-[450px] sm:h-[350px] sm:w-[350px]   h-[300px] w-[300px]">
              {cardData?.picture && (
                <Image
                  alt="Product details"
                  width={600}
                  height={600}
                  src={cardData?.picture}
                  className="object-cover"
                />
              )}
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2 lg:pl-4 mt-4 ml-8 lg:mt-0">
              <nav className="text-sm text-gray-500 mb-4">
                <Link
                  href="../frontpage"
                  className="hover:underline hover:decoration-orange-400 hover:font-bold transition-all duration-300"
                >
                  Home
                </Link>
              </nav>

              <h1 className="text-2xl font-bold mb-2">{cardData?.name}</h1>

              <p className="text-xl text-gray-700 mb-4">{cardData?.price}</p>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Days
                </label>
                <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Choose an option</option>
                  {/* Options can be dynamically rendered if needed */}
                </select>
              </div>

              <div className="flex items-center mb-4">
                <button className="px-2 py-1 border border-gray-300 text-gray-700">-</button>
                <input
                  className="w-12 text-center border-t border-b border-gray-300"
                  type="text"
                  defaultValue="1"
                  aria-label="Quantity"
                />
                <button className="px-2 py-1 border border-gray-300 text-gray-700">+</button>
              </div>

              <div className="flex flex-col sm:flex-row items-center mb-4">
                <button className="bg-orange-500 hover:text-black hover:bg-yellow-300 text-white px-10 py-2 rounded-md mr-0 sm:mr-2 mb-2 sm:mb-0">
                  Add to cart
                </button>
              </div>

              <p className="text-sm text-gray-500">Sold By: Gifterzz</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productdetails;
