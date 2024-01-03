'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { exclusive } from "@/front_utils/info";
import Image from "next/image";

const Exclusive = () => {
  const swiperRef = useRef(null);

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className='pt-20 h-[400px] overflow-hidden w-full px-4 desktop:px-16'>
      <h2 className="font-bold text-[22px] tablet:text-[32px] px-4 pb-5 leading-[32px]">Up to -40% 🎊 Order.uk exclusive deals</h2>
      <Swiper
        ref={swiperRef}
        watchSlidesProgress={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,

        }}
        modules={[Pagination]}
        slidesPerView={3}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {exclusive.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="px-3 relative group overflow-hidden ">
              <Image
                src={content.img}
                alt={content.title}
                width={400}
                height={400}
                className=" rounded-lg transform mx-auto scale-100 hover:scale-110 transition-transform duration-500 largestMonitor:w-[600px] "
              />
              <p className="absolute top-0 right-[20px] bg-[#000] text-[#fff] px-4 rounded-md py-2">{content.offer}</p>
              <div className={content.id===2? 'absolute bottom-0 largestMonitor:bottom-[60px] abovtwosounaids:bottom-[100px] duration-200 delay-75 ease-linear  left-0 px-8 py-4':` absolute bottom-[-100px] group-hover:bottom-0 largestMonitor:group-hover:bottom-[60px] abovtwosounaids:group-hover:bottom-[100px]   duration-200 delay-75 ease-linear  left-0 px-8 py-4`}>
              <p className="text-[#FC8A06]">{content.title}</p>
              <p className="text-[#fff] text-[22px] leading-[25px] font-semibold">{content.des}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Exclusive;
