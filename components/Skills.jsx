import React from "react";
import Image from "next/image";

import HTMlImage from "../public/assets/skills/html.png";
import CSSImage from "../public/assets/skills/css.png";
import JSImage from "../public/assets/skills/javascript.png";
import PythonImage from "../public/assets/skills/python.png";
import ReactImage from "../public/assets/skills/react.png";
import TailwindImage from "../public/assets/skills/tailwind.png";
import FirebaseImage from "../public/assets/skills/firebase.png";
import GitImage from "../public/assets/skills/github1.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#eb0f60]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTMlImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSSImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JSImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={PythonImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={FirebaseImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl scale-95 hover:scale-100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GitImage} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git/Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
