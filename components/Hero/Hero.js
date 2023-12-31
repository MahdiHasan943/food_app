import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full relative  max-w-[2100px] mx-auto grid grid-cols-1  laptop:grid-cols-2 items-center gap-4 pt-8 px-4 tablet:px-16 tablet:gap-8 ">
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
            className="mr-[-50px] focus:outline-none py-4 px-8 tablet:px-12 border border-gray-400 rounded-full"
            type="text"
          />
          <button className="bg-[#FC8A06] text-[#fff] py-5 px-8 tablet:px-14 rounded-full leading-[20px]">
            Search
          </button>
        </form>
      </div>
      {/* <div className="z-0 absolute w-full h-full flex justify-center items-center"> */}
      <Image src={'/images/heroMain.png'} alt="pizza" width={805} height={537} className="hidden desktop:block absolute left-[24%] largestMonitor:left-[28%] bottom-0 z-50 m-auto"/>

 {/* </div> */}
      <div className="overflow-hidden hidden tablet:block relative">
        <Image src={'/images/curvedbg.png'} className="ml-auto relative" alt="curve shape" width={626} height={1000} />
        <Image src={'/images/heroMain2.png'} alt="noodles" className="absolute bottom-0 left-0 desktop:left-[150px]" width={377} height={455} />
        <Image src={`/images/newToast.png`}  alt="toast" className="absolute top-[10px] desktop:top-[80px]  right-[100px] rounded-lg"  width={290} height={130} />
        <Image src={`/images/newToast2.png`}  alt="toast" className="absolute top-[150px] desktop:top-[250px]  right-0 rounded-lg"  width={290} height={130} />
        <Image src={`/images/newToast3.png`}  alt="toast" className="absolute bottom-[20px] desktop:bottom-[80px]  right-[100px] rounded-lg"  width={290} height={130} />

        
      </div>
    </div>
  );
};

export default Hero;
