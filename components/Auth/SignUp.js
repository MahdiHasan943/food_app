"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Form from "../reusableComponent/Form";
import Button from "../reusableComponent/Button";
import Image from "next/image";
import Title from "../reusableComponent/Title";
import { SignUpCredentials } from "@/actions/authActions";

const Signup = ({ callbackUrl }) => {
  const [showPassword, setShowPassword] = useState(false);

  async function handleSignUpCredentials(formData) {

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, email, password);

    const res = await SignUpCredentials({ name, email, password })
    if (res?.msg) alert(res?.msg)
   
    // redirect('/signin')


  }

  return (
    <>
     
      <div className=" flex flex-col-reverse  desktop::flex-none desktop:grid grid-cols-2">
        <div className="h-full bg-[#03081f] flex justify-center items-center">
          <Image  src="/images/process.png" alt="burger" width={600} height={800} className=""  />
        </div>

        <div className="px-4 mx-auto max-w-[600px]   sm:px-16 py-10">
        <Title text={"Sign Up Page"}/>
          <button
            className="w-full six:w-[567px] lg:w-full xl:w-[567px]"
            title="login with google"
            onClick={() => signIn("google", { callbackUrl})}
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
          <Form action={handleSignUpCredentials} className="  flex-cols">
          <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
                User Name{" "}
              </p>
              <input
                className="py-4 px-4 w-full six:w-[567px] lg:w-full xl:w-[567px]  border rounded-md border-gray-700"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
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
            <div className="my-4">
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
             

            
            </div>

            <br />
                      <div className="mt-[-20px]">
                      <Button value="Sign Up" />
            <p className="   tracking-wide font-normal  my-3	">
            Already have an account?{" "}
              <Link href={"/login"} className="underline underline-offset-4">
                Sign In
              </Link>
            </p>
         </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signup;