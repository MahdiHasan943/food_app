import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full relative bg-[#03081F]  tablet:rounded-xl   grid grid-cols-1  laptop:grid-cols-2 items-center gap-4 pt-8 px-4 tablet:px-0 tablet:pl-16 largeMonitor:gap-8 ">
      <div className="py-16 tablet:py-20">
        <p className="text-[16px]  text-[#fff]">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-[#fff] font-extraboldbold text-[40px] leading-[40px] tablet:text-[66px] tablet:leading-[70px]">
          Feast Your Senses, <br className="hidden tablet:block" />
          <span className="text-[#FC8A06]">Fast and Fresh</span>
        </h1>
        <p className="text-[13px] py-6 text-[#fff]">
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
      <Image src={'/images/hherobg.png'} alt="pizza" width={805} height={537}   className="hidden desktop:block absolute left-1/2 transform -translate-x-1/2 bottom-0 z-50 m-auto"
/>

      <div className="overflow-hidden hidden tablet:block relative ">
        <Image src={'/images/hsecondImage.png'} alt="pizza girl" className="absolute left-0 w-[380px] largeMonitor:w-[465px] bottom-0 z-50"  width={465} height={541}/>
        <Image src={'/images/curvedbg.png'} className="ml-auto relative" alt="curve shape" width={626} height={1000} />
        <Image src={`/images/newToast.png`}  alt="toast" className="absolute  top-[110px] laptop:top-[10px] desktop:top-[80px]  right-[100px] abovtwosounaids:right-[200px] rounded-lg"  width={270} height={130} />
        <Image src={`/images/newToast2.png`}  alt="toast" className="absolute top-[260px] laptop:top-[150px] desktop:top-[250px]  right-[20px] abovtwosounaids:right-[150px] rounded-lg"  width={270} height={130} />
        <Image src={`/images/newToast3.png`}  alt="toast" className="absolute bottom-[50px] laptop:bottom-[20px] desktop:bottom-[80px]  right-[70px] abovtwosounaids:right-[190px] rounded-lg"  width={270} height={130} />

        
      </div>
    </div>
  );
};

export default Hero;
