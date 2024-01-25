import React from 'react'
import Form from '../reusableComponent/Form'
import { useSession } from 'next-auth/react';
import Button from '../reusableComponent/Button';
import { updatUser } from '@/actions/authActions';

const ProfileUpdate = ({ update }) => {

  const { data: session } = useSession();
  async function handleUpdateProfile(formData) {
    const name = formData.get('name')
    const image = formData.get('image')
    if (update) {
      update({name,image})
    }
    const res =await updatUser({name,image})
    // console.log({name,image});
    console.log(res);

    

    
  }
  
  return (
    <div className='mx-auto px-4 py-4 w-full'>
      <Form action={handleUpdateProfile} className="w-full  flex flex-col ">
        <p className='font-lato text-[#807D7E] text-[14px] '>Your Name</p>
        <input className='border-0 border-b border-[#EDEEF2] focus:outline-none py-3 w-full px-2 rounded-md ' type="text" name='name' placeholder={session?.user?.name} required />
        <div className="my-6 ">
        <p className='font-lato text-[#807D7E] text-[14px] '>Your Image</p>
        <input type="text" name='image' placeholder={session?.user?.image} required className='border-0 border-b border-[#EDEEF2] w-full focus:outline-none py-3 px-2 rounded-md ' />
        </div>
        <p className='font-lato text-[#807D7E] text-[14px] '>Your Email</p>
        <input type="text" name='Email' placeholder={session?.user?.email} readOnly className='border-0 border-b border-[#EDEEF2] w-full focus:outline-none py-3 px-2 rounded-md ' />
        
        <div className="py-4">
          
        <Button  value="Update Profile" />
       </div>
      </Form>

    </div>
  )
}

export default ProfileUpdate