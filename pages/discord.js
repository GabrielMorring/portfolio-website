import React from "react";
import Image from "next/image";
import Link from "next/link";
import discordImg from "../public/assets/projects/discord.png";

import { RiRadioButtonFill } from "react-icons/ri";

const discord = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={discordImg}
          alt="/"
        />
        <div className="text-white z-10 p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]  ">
          <h2 className="py-2 ">Discord Clone</h2>
          <h3>React js | Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p className="text-[#eb0f60]">Project</p>
          <h2>Overview</h2>
          <p>
            I followed a tuorial to make a discord clone. It looks really nice,
            and allowed you to chat with other people. The chatting {"doesn't"}{" "}
            work anymore because the server is down.
          </p>
          <Link href={"https://discord-clone-46e57.web.app/"}>
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href={"https://github.com/GabrielMorring/discord_clone"}>
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default discord;
