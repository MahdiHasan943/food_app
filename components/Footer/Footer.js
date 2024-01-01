import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>   
      <div className='grid grid-cols-1 desktop:grid-cols-3  shadow-xl py-10  bg-[#D9D9D9]  justify-center  items-start gap-8 desktop:gap-4 px-4 largeMonitor:px-20 largestMonitor:px-[150px]'>
        <div className="">
          <Image src={'/images/LOGO.png'} alt='logo' width={268} height={66} className='' />
          <Image src={'/images/app&googleplay.png'} alt='google_play' width={361} height={53} className='py-6'/>
          <p>
          Company # 490039-445, Registered with <br /> House of companies.
           </p>
        </div>
        <div className="">
          <p className='text-[#03081F] py-4 text-[22px] font-semibold'>Get Exclusive Deals in your Inbox</p>
          <form className="flex desktop:ml-[-20px]  items-center">
          <input
            placeholder="youremail@gmail.com"
            className="mr-[-50px] focus:outline-none bg-[#D9D9D9] py-4 px-8 tablet:px-12 border border-gray-400 rounded-full"
            type="text"
          />
          <button className="bg-[#FC8A06] text-[#fff] py-5 px-8 tablet:px-14 rounded-full leading-[20px]">
            Search
            </button>
            
        </form>
          <p className=''>we wont spam, read our email policy</p>
          <div className="flex py-4 items-center gap-4">
            <Image src={'/images/fb.png'} alt='social_icon' width={30} height={30} />
            <Image src={'/images/ins.png'} alt='social_icon' width={30} height={30}/>
            <Image src={'/images/tik.png'} alt='social_icon' width={30} height={30}/>
            <Image src={'/images/snap.png'} alt='social_icon' width={30} height={30}/>

          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <p className='text-[#03081F] py-4 text-[22px] font-semibold'>Legal Pages</p>
            <p>Terms and conditions</p>
            <p className='py-2'>Privacy</p>
            <p>Cookies</p>
            <p className='py-2'>Modern Slavery Statement</p>

          </div>
          <div className="">
          <p className='text-[#03081F] py-4 text-[22px] font-semibold'>Important Links</p>
            <p>Get help</p>
            <p className='py-2'>Add your restaurant</p>
            <p>Sign up to deliver</p>
            <p className='py-2'>Create a business account</p>
          </div>
        </div>
      </div>
      
      <div className="bg-footerBottombg text-[#fff] tablet:grid grid-cols-2 gap-8 items-center py-6 px-4 largeMonitor:px-20 largestMonitor:px-[150px] ">
        <p className='text-center tablet:text-start'>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className="hidden  tablet:flex justify-center items-center gap-4">
          <a href="">Privacy Policy  </a>
          <a href="">Terms</a>
          <a href="">Pricing</a>
          <a href="">                                       Do not sell or share my personal information
</a>
       </div>
      </div>
      </>
  )
}

export default Footer