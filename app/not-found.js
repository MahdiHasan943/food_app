import Link from 'next/link'
import React from 'react'

const Not_found = () => {
  return (
    <div className="flex flex-col py-20 items-center gap-3 h-full min-h-[500px] mx-auto w-full">
    <h2 className='text-[45px] font-bold leading-[45px] text-[#FC8A06]'>Not Found</h2>
    <p className='font-semibold text-[22px]'>Could not find requested resource</p>
    <Link className='text-[20px] text-[#FC8A06] underline' href="/">Return Home</Link>
  </div>  )
}

export default Not_found