import React from 'react'
import { changePasswordCredentials } from '@/actions/authActions'
import Button from '../reusableComponent/Button'
import Form from '../reusableComponent/Form'

const ChangePassword = () => {
  async function handleChangePassword(formData) {
    const old_pass = formData.get('old_pass')
    const new_pass = formData.get('new_pass')
    console.log({ old_pass, new_pass });
    const res=await changePasswordCredentials({old_pass,new_pass})
    if(res?.msg) alert(res?.msg)
  
}

  return (
    <div className='w-full'>
      <h1 className='text-4xl font-lato  font-bold'>ChangePassword</h1>
      <Form action={handleChangePassword} className="my-3 w-full flex flex-col  ">
 <input className='border-0 border-b border-[#EDEEF2] focus:outline-none py-3 w-full px-2 rounded-md' type="password" name="old_pass"  placeholder='Old-Password' required/>
              <input className='border-0 border-b border-[#EDEEF2] focus:outline-none w-full py-3 px-2 rounded-md' type="password" name="new_pass"  placeholder='New-Password' required/>
     
        <div className="my-4">
        <Button value="Change Password"/>

      </div>
      </Form>
    </div>
  )
}

export default ChangePassword