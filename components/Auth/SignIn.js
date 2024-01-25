"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Form from "../reusableComponent/Form";
import Button from "../reusableComponent/Button";
import Image from "next/image";
import Title from "../reusableComponent/Title";

const Signin = ({ callbackUrl }) => {
  const [showPassword, setShowPassword] = useState(false);

  async function handleCredentialLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    await signIn("credentials", { email, password ,callbackUrl});
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full mt-[100px] bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <p className="text-green-500      text-2xl">       SuccessFully Login
</p>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
  }

  return (
    <>
     
      <div className=" flex flex-col-reverse  desktop::flex-none desktop:grid grid-cols-2">
        <div className="h-full bg-[#03081f] flex justify-center items-center">
          <Image  src="/images/process.png" alt="burger" width={600} height={800} className=""  />
        </div>

        <div className="px-4 mx-auto max-w-[600px]   sm:px-16 py-10">
        <Title text={"  Sign In Page"}/>
          <button
            className="w-full six:w-[567px] lg:w-full xl:w-[567px]"
            title="login with google"
            onClick={() => signIn("google", { callbackUrl:'/'})}
          >
            <Image
                          className="mt-3 h-[58px] w-full six:w-[567px] lg:w-full xl:w-[567px]"
                          width={300}
                          height={58}
              src="/images/Google.png"
              alt="google_icon"
            />
          </button>
          <button
                      onClick={() => signIn("twitter", { callbackUrl })}

            className="w-full six:w-[567px] lg:w-full xl:w-[567px]">
            <Image
                          className="my-6 h-[58px] w-full six:w-[567px] lg:w-full xl:w-[567px]"
                          width={300}
                          height={58}
              src="/images/twitter.png"
              alt="twitter_icon"
            />
          </button>
          <Image className="my-6" src="/images/divider.png" width={600} height={2} alt="divider" />
          <Form action={handleCredentialLogin} className="  flex-cols">
            <div className="">
              <p className="     tracking-wide font-normal  my-3	">
                Email Address
              </p>
              <input
                type="email"
                placeholder="Email"
                required
                className="py-4 px-4 w-full six:w-[567px] lg:w-full xl:w-[567px] border rounded-md  border-gray-700"
                name="email"
              />
            </div>
            <div className="my-6">
              <p className="     tracking-wide font-normal  my-3	">
                Password
              </p>
              <div className="relative w-full six:w-[567px] lg:w-full xl:w-[567px]">
                       <label 
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute top-3 right-3 rounded px-2 py-1 "
                                  htmlforfor="toggle"
                                >
                                  {showPassword ? <Image width={20} height={20} className="" src="/images/hidee.png" alt="eye" /> :<Image className="" width={20} height={20} src="/images/visible.png" alt="eye" /> } 
                                </label>
                                <input
                                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                                  className="py-4 px-4 w-full six:w-[567px] lg:w-full xl:w-[567px] border rounded-md  border-gray-700 "
                                />
                               
                               
                              </div>
             

              <Link href={'/forget_password'}>
              <p className="     underline underline-offset-4 w-full six:w-[567px] lg:w-full xl:w-[567px] text-end tracking-wide font-normal  my-3	">
                Forget your password
              </p>
              </Link>
            </div>

            <br />
                      <div className="mt-[-50px]">
                      <Button value="Sign In" />
            <p className="   tracking-wide font-normal  my-3	">
              Don't have an account?{" "}
              <Link href={"/signup"} className="underline underline-offset-4">
                Sign Up
              </Link>
            </p>
         </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signin;