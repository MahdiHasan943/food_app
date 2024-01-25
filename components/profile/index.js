'use client'
import ChangePassword from "./ChangePassword";
import ProfileCard from "./ProfileCard";
import ProfileUpdate from "./ProfileUpdate";
import { useSession } from "next-auth/react";

const ProfileComponent = ({ user}) => {
  console.log({user},'procompo');
  const { data: session,update } = useSession();

  return (
    <div className="w-full">
      {/* <ProfileCard user={user}/> */}
      <ProfileUpdate user={user} update={update} />
      {
        (session?.user?.provider === 'credentials' || user?.provider === 'credentials') &&
        <ChangePassword/>
      }
    </div>
  )
}

export default ProfileComponent