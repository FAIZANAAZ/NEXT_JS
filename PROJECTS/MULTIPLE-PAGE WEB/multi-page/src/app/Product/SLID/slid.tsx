
"use client";
// SwiperComponent.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'; // Custom styles
import Image from 'next/image';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperComponent: React.FC = () => {
  return (
    <>
    <div className='myswiperscontainer'>
    <Swiper 
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide><Image src="/slid1.jpg" alt="slid1" width={3000} height={3000} className='h-full w-full'/></SwiperSlide>
      <SwiperSlide><Image src="/slid2.jpg" alt="slid1" width={3000} height={3000} className='h-full w-full'/></SwiperSlide>
      <SwiperSlide><Image src="/slid3.jpg" alt="slid1" width={3000} height={3000} className='h-full w-full'/></SwiperSlide>
      <SwiperSlide><Image src="/slid4.jpg" alt="slid1" width={3000} height={3000} className='h-full w-full'/></SwiperSlide>
      <SwiperSlide><Image src="/slid5.jpg" alt="slid1" width={3000} height={3000} className='h-full w-full'/></SwiperSlide>
    </Swiper>
    </div>
    </>
  );
};

export default SwiperComponent;

