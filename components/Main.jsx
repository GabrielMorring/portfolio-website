import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Hello There
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, {"I'm "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe600] to-[#eb0f60]">
              Gabe
            </span>
          </h1>
          <h1 className="py-2 text-gray-700">A Computer Science Student</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea
            assumenda nihil reprehenderit. Eligendi explicabo, itaque dolores,
            exercitationem nobis laboriosam ea fuga eveniet blanditiis unde
            possimus qui reiciendis, similique sint?
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
