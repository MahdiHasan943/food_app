import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>   
    <div className='flex shadow-xl py-6  justify-center items-center gap-4'>
              <Link href={'/'}><Image src={'/images/LOGO.png'} width={100} height={100} alt="savor logo" /></Link>
           <p className='text-[#fff] text-[14px] '>All rights Reserved.</p>
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