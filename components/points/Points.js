import React from 'react'

const Points = () => {
  return (
      <div className='px-4 flex justify-center py-8 items-center desktop:px-16  '>
          <div className="grid w-full desktop:w-[90%]  mx-auto grid-cols-2 desktop:grid-cols-4 py-5 px-4 desktop:px-8 gap-4 desktop:gap-8 bg-[#FC8A06] rounded-xl">
              <div className="desktop:border mx-auto desktop:mx-0 desktop:border-t-0 desktop:border-l-0 desktop:border-b-0 desktop:border-[#D9D9D9]">
              <p className='text-[#fff] text-[40px]'>546+
</p>
                  <p className='text-[#fff] text-[18px] font-bold'>
Registered Riders</p>
                  <p></p>
              </div>

              <div className="desktop:border mx-auto desktop:mx-0 desktop:border-t-0 desktop:border-l-0 desktop:border-b-0 desktop:border-[#D9D9D9]">
              <p className='text-[#fff] text-[40px]'>789,900+
</p>
                  <p className='text-[#fff] text-[18px] font-bold'>
                  Orders Delivered</p>
                  <p></p>
              </div>
              <div className="desktop:border mx-auto desktop:mx-0 desktop:border-t-0 desktop:border-l-0 desktop:border-b-0 desktop:border-[#D9D9D9]">
              <p className='text-[#fff] text-[40px]'>690+
</p>
                  <p className='text-[#fff] text-[18px] font-bold'>
                  Restaurants Partnered</p>
                  <p></p>
              </div>
              <div className="mx-auto desktop:mx-0">
              <p className='text-[#fff] text-[40px]'>17,457+
</p>
                  <p className='text-[#fff] text-[18px] font-bold'>
                  Food items</p>
                  <p></p>
              </div>
           </div>
    </div>
  )
}

export default Points