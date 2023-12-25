"use client";
import React, { useState, useEffect,} from "react";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "@/front_utils/info";
import useStickyNav from "@/front_utils/useStickyNav";
const Header = () => { 
//for FadeIn when scroll.
const [stickyClass, setStickyClass] = useState("");

useEffect(() => {
  window.addEventListener('scroll', stickNavbar);
  return () => window.removeEventListener('scroll', stickNavbar);
}, []);

const stickNavbar = () => {
  if (window !== undefined) {
    let windowHeight = window.scrollY;
    // window height changed for the demo
    windowHeight > 150 ? setStickyClass('nav') : setStickyClass('');
  }
};
  // for hambar and menu_drawer.
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const menu = (
    <React.Fragment>
      
        {
          navlinks.map(nav => (
              <li onClick={navToggle} key={nav?.id}><button className={'px-8 tablet:text-primaryDark text-[#fff] '}>{nav.title}</button></li>
        ))
        }
    </React.Fragment>
  );

  return (
    <nav  className={`${stickyClass} sm:px-10  xl:px-16 px-4 py-7 shadow-none w-[100vw] nav1`}
    >
      <div className={`flex w-full items-center   justify-between largeMonitor:justify-between largeMonitor:px-20 largestMonitor:px-[150px] `}>
        <div className="flex justify-start    items-center">
          <Link href={'/'}><Image src={'/images/LOGO.png'} width={100} height={100} alt="savor logo" /></Link>
        </div>
        <ul className={`${active} `}>
        <Link  className="menu_image" href={'/'}><Image  src={'/images/LOGO.png'} width={100} height={100} alt="savor logo" /></Link>
          {menu}
        </ul>
      </div>
      {/* for hamburger menu icon */}
      <div onClick={navToggle} className={icon}>
        <div className={stickyClass?'bg-[#fff]':'bg-[#FC8A06] line1'}></div>
        <div className={stickyClass?'bg-[#fff]':'bg-[#FC8A06] line2'}></div>
        <div className={stickyClass?'bg-[#fff]':'bg-[#FC8A06] line3'}></div>
      </div>
    </nav>
  )
};
export default Header;