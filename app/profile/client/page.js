"use client";
import ProfileComponent from "@/components/profile";
import { useSession } from "next-auth/react";
import Image from "next/image";
const profileClientPages = () => {
  const { data: session, update } = useSession();
  return (
    <div className="px-4 py-6 tablet:flex gap-6 tablet:px-16 mx-auto w-full">
      <div className="">
        <div className="relative rounded-lg py-10  bg-[#F6F6F6] px-4 tablet:px-16">
          <Image className="absolute top-4  right-3" src="/images/info.png" alt="info" width={20} height={20} />
          <Image
            className="mx-auto  rounded-full"
            src={
              session?.user?.image ? session?.user?.image : "/images/customerP.png"
            }
            alt="customer"
            width={180}
            height={180}
          />
          <p className="text-center capitalize font-lato text-[20px] py-4 font-bold">
            {session?.user?.name}
          </p>
          <p className="text-center font-lato text-[20px] py-4 font-bold">
            {session?.user?.email}
          </p>
          <p className="text-center capitalize font-lato text-[20px] py-4 font-bold">
            Account-Type : {session?.user?.role}
          </p>
          <p className="text-center capitalize font-lato text-[20px] py-4 font-bold">
            Login With : {session?.user?.provider}
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full px-4 sm:px-8 py-6">
        <h2 className="text-[28px] font-bold tracking-wide font-lato">My Profile Info</h2>
        <h2 className="text-[22px]  font-semibold tracking-wide font-lato">Contact Details</h2>  
        <ProfileComponent user={session?.user} update={update} />
      </div>
    </div>
  );
};

export default profileClientPages;