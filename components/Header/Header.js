"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navlinks, profilelink } from "@/front_utils/info";
import useStickyNav from "@/front_utils/useStickyNav";
import { useSession } from "next-auth/react";
import SignOut from "../Auth/SignOut";
const Header = () => {
  const [log, setLog] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { data: session } = useSession();
  console.log(session, "nav");
  //for FadeIn when scroll.
  const stickyClass = useStickyNav();
  const [color, setColor] = useState(false);

  const [navActive, setNavActive] = useState(false);
  // for hambar and menu_drawer.
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  console.log(icon, active);
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
      {navlinks.map((nav) => (
        <li
          onClick={() => {
            navToggle();
            setNavActive(nav?.href);
          }}
          key={nav?.id}
        >
          <Link
            href={`/${nav?.href}`}
            className={
              stickyClass
                ? ` text-[#fff]  px-8 ${
                    navActive === nav?.href
                      ? "border border-[#fff] py-3 px-8 rounded-md"
                      : ""
                  }`
                : `${
                    navActive === nav?.href
                      ? "bg-[#FC8A06] border border-[#fff] tablet:border-0  py-3 px-8 rounded-md text-[#fff]"
                      : "tablet:text-primaryDark text-[#fff]"
                  } px-8  `
            }
          >
            {nav.title}
          </Link>
        </li>
      ))}
      <li>
        <Link
          className=""
          onClick={() => {
            navToggle();
          }}
          href={"/addTocart"}
        >
          <Image
            src={
              stickyClass ? "/images/addToCart.png" : "/images/addToCartd.png"
            }
            alt="cart"
            width={50}
            height={50}
          />
        </Link>
      </li>
      {session ? (
        <>
          <li className="hidden tablet:block">
            <Image
              onClick={() => {
                setToggle(!toggle);
                // navToggle()
              }}
              className="rounded-full"
              src={
                session?.user?.image
                  ? session?.user?.image
                  : "/images/hsecondImage1.png"
              }
              alt="profile"
              width={45}
              height={45}
            />
          </li>
        </>
      ) : (
        <Link href={"/login"}>
          <button
            className={
              stickyClass
                ? ` text-[#010101] bg-[#fff] py-5 px-8 tablet:px-14 rounded-full   ${
                    navActive === "/login"
                      ? "border border-[#fff] py-3 px-8 rounded-md"
                      : ""
                  }`
                : `${
                    navActive === "/login"
                      ? "bg-[#FC8A06] border border-[#fff] tablet:border-0  py-3 px-8 rounded-md text-[#fff]"
                      : "bg-[#fff] py-5 px-8 tablet:px-14 rounded-full leading-[20px] text-[#010101] tablet:text-[#fff]  tablet:bg-[#FC8A06]  "
                  } px-8  `
            }
          >
            Sign In
          </button>
        </Link>
      )}
    </React.Fragment>
  );

  return (
    <nav
      className={`${
        !toggle ? "overflow-hidden " : "overflow-none"
      } ${stickyClass} sm:px-10  xl:px-16 px-4 py-7 shadow-none w-[100vw] nav1`}
    >
      <div
        className={`flex w-full items-center   justify-between largeMonitor:justify-between largeMonitor:px-20 largestMonitor:px-[150px] `}
      >
        <div className="flex justify-start    items-center">
          <Link href={"/"}>
            <Image
              src={"/images/LOGO.png"}
              width={100}
              height={100}
              alt="savor logo"
            />
          </Link>
        </div>
        <ul className={`${active} `}>
          <li>
            {" "}
            <Link
              onClick={() => {
                navToggle();
              }}
              className="menu_image"
              href={"/"}
            >
              <Image
                src={"/images/LOGO.png"}
                width={100}
                height={100}
                alt="savor logo"
              />
            </Link>
          </li>
          {menu}
        </ul>
        <div className="tablet:hidden flex items-center gap-2">
          {session  ? (
          <Image
          onClick={() => {
            setToggle(!toggle);
            // navToggle()
          }}
          className="rounded-full"
          src={
            session?.user?.image
              ? session?.user?.image
              : "/images/hsecondImage1.png"
          }
          alt="profile"
          width={45}
          height={45}
        />
          ) : (
            <Link href={"/login"}>
            <button
              className={
                stickyClass
                  ? ` text-[#010101] bg-[#fff] py-5 px-8 tablet:px-14 rounded-full   ${
                      navActive === "/login"
                        ? "border border-[#fff] py-3 px-8 rounded-md"
                        : ""
                    }`
                  : `${
                      navActive === "/login"
                        ? "bg-[#FC8A06] border border-[#fff] tablet:border-0  py-3 px-8 rounded-md text-[#fff]"
                        : " py-5 px-8 tablet:px-14 rounded-full leading-[20px] text-[#fff]  bg-[#FC8A06]  "
                    } px-8  `
              }
            >
              Sign In
            </button>
          </Link>
          )}
          <Link href={"/addTocart"}>
            <Image
              src={
                stickyClass ? "/images/addToCart.png" : "/images/addToCartd.png"
              }
              alt="cart"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "block"
          } p-6 bg-[black]  absolute top-20 right-0 mx-4 my-2 min-w-[250px] z-[1000000!important] rounded-xl`}
        >
          <Image
            className="rounded-full mx-auto"
            src={session?.user?.image ? session?.user?.image :"/images/customerP.png"}
            alt="profile"
            width={80}
            height={80}
          />
          <p className="py-4 text-center font-lato text-white">
            {session?.user?.name}
          </p>
          <ul className="list-none border-0 border-t-[1px] pt-3 border-white flex flex-1 flex-col gap-4">
          
            {profilelink.map((pro) => (
                <li
                  key={pro.id}
                  onClick={() => {
                  setToggle(!toggle);  
                  setColor(pro.href);
                }}
                className={`${
                  color === pro.href ? "text-[#FF413D] " : "text-white "
                } font-lato flex items-center gap-4`}
                >
                  <Link href={`/${pro?.href}`}> {pro.title} </Link>
              
              </li>))
            }
            {
              session?.user?.role === "admin" ? (
                <li onClick={() => {
                  setToggle(!toggle);
                  setColor('dashboard')
                }}  className={`${
                  color === 'dashboard' ? "text-[#FF413D] " : "text-white "
                } font-lato flex items-center gap-4`}><Link href={'/dashboard'}>Dashboard</Link></li>
              ):''
            }
            <li className="flex items-center  gap-4">
              <SignOut
                className={
                  stickyClass
                    ? ` text-[#010101] bg-[#fff] py-5 px-8 tablet:px-14 rounded-full   ${
                        navActive === "/login"
                          ? "border border-[#fff] py-3 px-8 rounded-md"
                          : ""
                      }`
                    : `${
                        navActive === "/login"
                          ? "bg-[#FC8A06] border border-[#fff] tablet:border-0  py-3 px-8 rounded-md text-[#fff]"
                          : "bg-[#fff] py-5 px-8 tablet:px-14 rounded-full leading-[20px] text-[#010101] tablet:text-[#fff]  tablet:bg-[#FC8A06]  "
                      } px-8  `
                }
              />
            </li>
          </ul>
        </div>
      </div>
      {/* for hamburger menu icon */}
      <div onClick={navToggle} className={icon}>
        <div className={"line1"}></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
export default Header;
