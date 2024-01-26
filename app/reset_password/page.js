import ResetPassword from '@/components/Auth/ResetPassword'
import React from 'react'

const ResetPasswordPage = ({searchParams:{token}}) => {
  
    return (
      <div>
          
            <ResetPassword token={token} />
    </div>
  )
}

export default ResetPasswordPage