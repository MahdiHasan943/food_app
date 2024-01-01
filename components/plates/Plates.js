'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { plates } from "@/front_utils/info";
import Image from "next/image";
const Plates = () => {
    const swiperRef = useRef(null);

    const breakpoints = {
      300: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 4,
  
      },
      1024: {
        slidesPerView: 6,
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
      {plates.map((content, index) => (
        <SwiperSlide key={index}>
          <div className="px-3 relative  group ">
            <Image
              src={content.img}
              alt={content.title}
              width={238}
              height={203}
              className=" rounded-lg "
            />
            <div className='max-w-[238px] px-4 py-2 h-[80px] tablet:h-[70px]  rounded-xl rounded-t-none bg-[#03081F]'>
            <p className="text-[#FC8A06] text-[18px] leading-[20px] font-semibold">{content.title}</p>
            <h3 className="text-[#fff] ">{content.des}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default Plates