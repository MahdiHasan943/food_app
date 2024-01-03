import { logos } from '@/front_utils/info'
import Image from 'next/image'
import React from 'react'
import Title from '../reusableComponent/Title'
const Poplar = () => {
    
  return (
      <div className=' px-4 desktop:px-16 py-20'>
<Title text="Popular Restaurants" />
          <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-6 gap-4">
          {
              logos.map((logo, index) => (
                      <Image key={index} src={logo.image} alt='logos' width={238} height={266} className=''/>
        ))
          }
          </div>
          </div>
  )
}

export default Poplar