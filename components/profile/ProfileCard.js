import React from 'react'

const ProfileCard = ({user}) => {
  return (
      <div >
          <h2>Name : {user?.name}</h2>
          {
              <img className='w-[100px] h-[100px]' src={user?.image} alt="user" />
          }
          <h3>Email : {user?.email}</h3>
          <h3>Role : {user?.role}</h3>
          <h3>Provider : {user?.provider}</h3>


    </div>
  )
}

export default ProfileCard