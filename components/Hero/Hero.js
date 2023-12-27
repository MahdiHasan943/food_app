import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-2 items-center gap-4 py-8 tablet:gap-8 ">
      <div className="">
        <p className="text-[16px] font-semibold text-[#03081F]">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-[#03081F] font-bold text-[40px] leading-[40px] tablet:text-[66px] tablet:leading-[70px]">
          Feast Your Senses, <br className="hidden tablet:block" />
          <span className="text-[#FC8A06]">Fast and Fresh</span>
        </h1>
        <p className="text-[13px] py-6 text-[#03081]">
          Enter a postcode to see what we deliver
        </p>
        <form className="flex  items-center">
          <input
            placeholder="type here"
            className="mr-[-50px] focus:outline-none py-4 px-12 border border-gray-400 rounded-full"
            type="text"
          />
          <button className="bg-[#FC8A06] text-[#fff] py-5 px-14 rounded-full leading-[20px]">
            Search
          </button>
        </form>
      </div>
      <div className="overflow-hidden">
      <Image src={'/images/curvedbg.png'} className="ml-auto" alt="curve shape" width={600} height={1000} />
      </div>
    </div>
  );
};

export default Hero;
