'use client'
import React from 'react'
import Link from 'next/link'
import Form from '@/components/reusableComponent/Form'
import Button from '@/components/reusableComponent/Button'
import { forgetPasswordCredentials } from '@/actions/authActions'
import Image from 'next/image'

const forgetPasswordPage = () => {
  async function handleForgetPassword(formData) {
    const email = formData.get('email')
    const res = await forgetPasswordCredentials({ email });
    if(res?.msg) alert(res?.msg)
    
  }
  return (
    <div className=" flex flex-col-reverse  tablet:flex-none desktop:grid grid-cols-2">
        <div className="flex justify-center mx-auto">
        <Image  src="/images/process.png" alt="burger" width={600} height={800} className=""  />
        </div>

        <div className="px-4  desktop:px-16 py-10">
          <h2 className="text-[34px] font-lato font-bold text-[#333333]">
          Reset Your Password          </h2>
        <p className='text-[16px] font-lato text-[#676B80] '>Enter your email and we'll send you a link to reset your password.</p>
        <p className='text-[16px] font-lato text-[#676B80] '>Please  check it.</p>

          <Form action={handleForgetPassword} className=" py-4 flex-cols">
          <div className="">
            
              <p className="font-lato tracking-wide font-normal  my-3	">
               Put Email Address
              </p>
              <input
                type="email"
                placeholder="Email"
                required
                className="py-4 px-4 w-full six:w-[567px] lg:w-full xl:w-[567px] border rounded-md  border-gray-700"
                name='email'              />
            </div>         

            <br />
            <Button value="Send" />
          </Form>
        </div>
      </div>
  )
}

export default forgetPasswordPage