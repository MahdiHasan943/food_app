"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const Faq = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 grid grid-cols-1 desktop:grid-cols-2 gap-4 desktop:gap-8 desktop:px-16 py-20">
      <div className="mx-auto">
        <h2 className="font-bold text-[22px] tablet:text-[32px] px-4 pb-5 leading-[42px]">
          Foodie FAQ: Your Culinary <br className="hidden desktop:block" />{" "}
          Queries Answered
        </h2>
        <Disclosure>
          <Disclosure.Button
            onClick={() => setOpen(!open)}
            className="bg-[#fff] text-start relative shadow-md px-4 w-[300px] desktop:w-[450px] rounded-sm py-4"
          >
            What type of cuisine does your restaurant offer?
            <Image
              src={open ? "/images/fag_arrowtoop.png" : "/images/fag_arrow.png"}
              alt="icon arrow"
              width={30}
              height={30}
              className="absolute top-3 right-2 desktop:right-5"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="bg-[#fafafa] text-gray-600    px-4 w-[300px] desktop:w-[450px] rounded-sm py-2">
            We offer [insert type of cuisine, e.g., Italian, Asian fusion,
            Mediterranean] cuisine that combines traditional flavors with modern
            twists.
          </Disclosure.Panel>
        </Disclosure>

        <div className="py-4">
        <Disclosure>
          <Disclosure.Button
            onClick={() => setOpen(!open)}
            className="bg-[#fff] relative text-start shadow-md px-4 w-[300px] desktop:w-[450px] rounded-sm py-4"
          >
Can I make a reservation online?
            <Image
              src={open ? "/images/fag_arrowtoop.png" : "/images/fag_arrow.png"}
              alt="icon arrow"
              width={30}
              height={30}
              className="absolute top-3 right-2 desktop:right-5"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="bg-[#fafafa] text-gray-600   px-4 w-[300px] desktop:w-[450px] rounded-sm py-2">
          We offer [insert type of cuisine, e.g., Italian, Asian fusion, Mediterranean] cuisine that combines traditional flavors with modern twists.

          </Disclosure.Panel>
        </Disclosure>
       </div>

        <Disclosure>
          <Disclosure.Button
            onClick={() => setOpen(!open)}
            className="bg-[#fff] text-start relative shadow-md px-4 w-[300px] desktop:w-[450px] rounded-sm py-4"
          >
Is there a dress code for dining at your restaurant?            <Image
              src={open ? "/images/fag_arrowtoop.png" : "/images/fag_arrow.png"}
              alt="icon arrow"
              width={30}
              height={30}
              className="absolute top-3 right-2 desktop:right-5"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="bg-[#fafafa]  text-gray-600  px-4 w-[300px] desktop:w-[450px] rounded-sm py-2">
          We offer [insert type of cuisine, e.g., Italian, Asian fusion, Mediterranean] cuisine that combines traditional flavors with modern twists.

          </Disclosure.Panel>
        </Disclosure>

        <div className="py-4">
        <Disclosure>
          <Disclosure.Button
            onClick={() => setOpen(!open)}
            className="bg-[#fff] text-start relative shadow-md px-4 w-[300px] desktop:w-[450px] rounded-sm py-4"
          >
Is there a dress code for dining at your restaurant?            <Image
              src={open ? "/images/fag_arrowtoop.png" : "/images/fag_arrow.png"}
              alt="icon arrow"
              width={30}
              height={30}
              className="absolute top-3 right-2 desktop:right-5"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="bg-[#fafafa] text-gray-600 px-4 w-[300px] desktop:w-[450px] rounded-sm py-2">
          We offer [insert type of cuisine, e.g., Italian, Asian fusion, Mediterranean] cuisine that combines traditional flavors with modern twists.

          </Disclosure.Panel>
        </Disclosure>
      </div>
      </div>
      <div className="mx-auto">
        <div className="tablet:flex   gap-4">
          <Image src={'/images/eventDining.png'} alt="diningroom" width={400} height={400} className=" rounded-md"/>
          <Image src={'/images/eventblack.png'} alt="diningroom" width={250} height={300} className="mt-4 tablet:mt-0 mx-auto rounded-md"/>

        </div>
        <div className="tablet:flex pt-4   gap-4">
          <Image src={'/images/eventred.png'} alt="diningroom" width={300} height={300} className="mx-auto rounded-md"/>
          <Image src={'/images/eventDining4.png'} alt="diningroom" width={350} height={300} className="mt-4 tablet:mt-0 rounded-md"/>

        </div>

      </div>
    </div>
  );
};

export default Faq;
