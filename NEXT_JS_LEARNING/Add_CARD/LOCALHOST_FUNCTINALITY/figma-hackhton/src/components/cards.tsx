"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  imageUrl: string;
  h1: string;
  stars: string;
  ranking: string;
  price: number;
  className: string;
  id: number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  h1,
  stars,
  price,
  className,
  id,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Parallax effect for Y-axis
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]); // Fade-in effect

  return (
    <Link href={`/Product/${id}`}>
      <motion.div
        ref={ref}
        key={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y, opacity }} // Applying parallax and fade-in effects
        className={`w-[296px] h-[444px] ml-[-1px] flex flex-col gap-5 ${className} bg-white`}
      >
        <div className="flex flex-col gap-3 hover:transition-transform items-center md:text-start hover:scale-105">
          <Image
            src={imageUrl}
            alt="product image"
            width={295}
            height={298}
            className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED]"
          />
          <h1 className="capitalize font-satoshi text-[18px] text-center font-bold leading-[27px] truncate text-black">
            {h1.toLowerCase()}
          </h1>
          <div>
            <Image
              src={stars}
              alt="stars"
              width={150}
              height={19}
              className="w-[150px] h-[19px] flex items-center justify-start gap-[13px]"
            />
          </div>
          <h2 className="text-2xl leading-[32.4px] text-black">${price}</h2>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
