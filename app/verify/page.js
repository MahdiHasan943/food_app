import React from 'react';
import Link from 'next/link';
import { verifyCredentials } from '@/actions/authActions';

const VerifyPage =async ({ searchParams: { token } }) => {
  const res = await verifyCredentials(token);
 

    console.log({ token });
  return (
    <div className='h-[400px] flex justify-center items-center'>
      <div className="">
      <h1 className="font-Arimo text-mostPurple text-[50px] leading-[60px] text-center  lg:text-[80px] lg:leading-[90px]">
      {res?.msg} .. Please sign in 
          
        </h1>
        <div className="flex justify-center text-center my-4">
              <Link href={"/login"}>
                  <button
                   
                    className="bg-[#FF413D] py-3 px-10 rounded-lg font-lato text-white ">
                  Login
                </button>
              </Link>
            </div>
        
      </div>
      
    </div>
  )
}

export default VerifyPage