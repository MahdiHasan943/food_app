'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
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
    <div className='py-20 h-[400px] overflow-hidden w-full px-4 desktop:px-16'>
      <Swiper
        ref={swiperRef}
        watchSlidesProgress={true}
        slidesPerView={3}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {exclusive.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="px-3 relative group ">
              <Image
                src={content.img}
                alt={content.title}
                width={400}
                height={400}
                className=" rounded-lg "
              />
              <p className="absolute top-0 right-[20px] bg-[#000] text-[#fff] px-4 rounded-md py-2">{content.offer}</p>
              <div className={content.id===2? 'absolute bottom-0  duration-200 delay-75 ease-linear  left-0 px-8 py-4':` absolute bottom-[-100px] group-hover:bottom-0  duration-200 delay-75 ease-linear  left-0 px-8 py-4`}>
              <p className="text-[#FC8A06]">{content.title}</p>
              <h3 className="text-[#fff] text-[22px] leading-[25px] font-semibold">{content.des}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Exclusive;
