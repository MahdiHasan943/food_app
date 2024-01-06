import Signin from '@/components/Auth/SignIn'
import React from 'react'

const page = ({ searchParams: { callbackUrl } })=> {
  return (
    <Signin callbackUrl={callbackUrl || '/'} />
  )
}

export default page
