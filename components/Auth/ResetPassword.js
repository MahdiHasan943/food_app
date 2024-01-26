'use client'
import React from 'react'
import { redirect } from 'next/navigation';
import { resetPasswordCredentials } from '@/actions/authActions';
import Form from '../reusableComponent/Form';
import Button from '../reusableComponent/Button';

const ResetPassword = ({token}) => {

    async function handleResetPassword(formData) {
        const password = formData.get('password');
        const res = await resetPasswordCredentials({token,password})

      if (res?.msg) alert(res?.msg)
      redirect('/login')

      
    }
  return (
      <div className=" flex flex-col-reverse  lg:flex-none lg:grid grid-cols-2">
        <div className="">
          <img className="w-full" src="/reset.png" alt="" />
        </div>

        <div className="px-4  sm:px-16 py-10">
          <h2 className="text-[34px] font-lato font-bold text-[#333333]">
          Reset Your Password
          </h2>
        
          <Form action={handleResetPassword} className="  flex-cols">
            <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
                Your Password 
              </p>
              <input
               type="password" name='password' placeholder='Password' required
                className="py-4 px-4 w-full six:w-[567px] lg:w-full xl:w-[567px] border rounded-md  border-gray-700"
                         />
            </div>         

            <br />
            <Button value="Reset  Password" />
          </Form>
        </div>
      </div>
  

  )
}

export default ResetPassword