import React, { Suspense } from "react";
import Link from "next/link";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";

import MainThree from "/components/MainThree";

const Main = () => {
  return (
    <>
      <div className="absolute z-[-10] w-full h-screen">
        <Canvas className="bg-slate-600">
          <Suspense fallback={null}>
            <MainThree />
          </Suspense>
        </Canvas>
      </div>
      <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Hello There
            </p>
            <h1 className="py-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe600] to-[#eb0f60]">
                Hi, {"I'm "}
                Gabe
              </span>
            </h1>
            <h1 className="py-2 ">A Computer Science Student</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              I am a student at Brigham Young University Idaho studying Computer
              Science.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
              <Link href="https://www.linkedin.com/in/gabriel-morring-a85aa7245/">
                <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link href="https://github.com/GabrielMorring">
                <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </Link>
              <Link href="/#contact">
                <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
