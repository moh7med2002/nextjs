"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {motion} from 'framer-motion'
import React, { useRef, useState } from "react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: false,
      callbackUrl: "/",
    });
    if (result?.error) {
      setErrorMessage(result.error);
    } else {
      router.push("/");
    }    
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center bg-[#eee] h-[92vh]"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2 w-[500px] max-w-full">
        {/* <TextBox
          labelText="User Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <TextBox
          labelText="Password"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        /> */}
        <input type="text"       
        placeholder="email"    
        onChange={(e) => (userName.current = e.target.value)}
        className=" border border-blue-500 p-2 outline-none mb-4"
        />
        <input type="text"       
        placeholder="password"    
        onChange={(e) => (userName.current = e.target.value)}
        className=" border border-blue-500 p-2 outline-none mb-4"
        />
        <motion.button 
        whileTap={{opacity:0.7}}
        className=" bg-blue-500 text-white py-2" onClick={onSubmit}>Login</motion.button>
        {errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
