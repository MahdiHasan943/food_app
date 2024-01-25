'use client'
import { useRouter, useSearchParams } from "next/navigation"

const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const errMsg = searchParams.get('error');

  return (
      <div className="px-10 py-4">
          <h1 className="text-red-400 text-bold ">Error : {errMsg}</h1>
          <button className="py-2 border border-gray-500 mt-4 px-4" onClick={()=>router.back()}>Try Again</button>
    </div>
  )
}

export default page