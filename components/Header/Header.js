"use client";
import React, { useState, useEffect,} from "react";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "@/front_utils/info";
import useStickyNav from "@/front_utils/useStickyNav";
const Header = () => { 
  const [log, setLog] = useState(true);
//for FadeIn when scroll.
  const stickyClass = useStickyNav();
  const [navActive,setNavActive]=useState(false)
// for hambar and menu_drawer.
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  console.log(icon,active);

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
            <li onClick={() => {
              navToggle();
              setNavActive(nav?.href);               
            }} key={nav?.id}><Link href={`/${nav?.href}`} className={stickyClass ? ` text-[#fff]  px-8 ${navActive===nav?.href?'border border-[#fff] py-3 px-8 rounded-md':''}` : `${navActive===nav?.href?'bg-[#FC8A06] border border-[#fff] tablet:border-0  py-3 px-8 rounded-md text-[#fff]':'tablet:text-primaryDark text-[#fff]'} px-8  `}>{nav.title}</Link></li>
        ))
      }
      <li>
        <Link onClick={()=>{navToggle()}} href={'/addTocart'}>

        <Image src={stickyClass?"/images/addToCart.png":'/images/addToCartd.png'} alt="cart" width={50} height={50}/>
        </Link>
      </li>
     
      <li>
      {
        log ? <Link href={'/login'}>
          <button
          className={stickyClass ? ` text-[#010101] bg-[#fff] py-5 px-8 tablet:px-14 rounded-full   ${navActive==='/login'?'border border-[#fff] py-3 px-8 rounded-md':''}` : `${navActive==='/login'?'bg-[#FC8A06] border border-[#fff] tablet:border-0  py-3 px-8 rounded-md text-[#fff]':'bg-[#fff] py-5 px-8 tablet:px-14 rounded-full leading-[20px] text-[#010101] tablet:text-[#fff]  tablet:bg-[#FC8A06]  '} px-8  `}>
            Sign In
          </button>
        </Link>
          : ""
      }
      </li>

    
    </React.Fragment>
  );

  return (
    <nav  className={`overflow-hidden ${stickyClass} sm:px-10  xl:px-16 px-4 py-7 shadow-none w-[100vw] nav1`}
    >
      <div className={`flex w-full items-center   justify-between largeMonitor:justify-between largeMonitor:px-20 largestMonitor:px-[150px] `}>
        <div className="flex justify-start    items-center">
          <Link href={'/'}><Image src={'/images/LOGO.png'} width={100} height={100} alt="savor logo" /></Link>
        </div>
        <ul className={`${active} `}>
       <li>  <Link onClick={()=>{navToggle()}} className="menu_image" href={'/'}><Image  src={'/images/LOGO.png'} width={100} height={100} alt="savor logo" /></Link></li>
          {menu}
   
        </ul>
        <div className="tablet:hidden flex items-center gap-2">
        {
        log ? <Link href={'/login'}>
          <button
          className={stickyClass ? ` text-[#010101] bg-[#fff] py-5 px-8 tablet:px-14 rounded-full   ${navActive==='/login'?'border border-[#fff] py-3 px-8 rounded-md':''}` : `${navActive==='/login'?'bg-[#FC8A06] border border-[#fff] tablet:border-0  py-3 px-8 rounded-md text-[#fff]':' py-5 px-8 tablet:px-14 rounded-full leading-[20px] text-[#fff]  bg-[#FC8A06]  '} px-8  `}>
            Sign In
          </button>
        </Link>
          : ""
      }
        <Link  href={'/addTocart'}>
     
<Image src={stickyClass?"/images/addToCart.png":'/images/addToCartd.png'} alt="cart" width={50} height={50}/>
</Link>
        </div>
      </div>
      {/* for hamburger menu icon */}
      <div onClick={navToggle} className={icon}>
        <div className={ 'line1'}></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
};
export default Header;