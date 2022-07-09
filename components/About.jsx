import React from "react";
import Image from "next/image";
import cimg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#eb0f60]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a student at Brigham Young University Idaho studying Computer
            Science. Recently, I have gotten very interested in react.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            laboriosam omnis rem in quibusdam recusandae asperiores quas vitae
            architecto sed minima cupiditate neque temporibus, illo quos
            eligendi ipsa perferendis reiciendis!
          </p>
        </div>
        <div className="  w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 scale-75 hover:scale-[.8] md:scale-100  md:hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={cimg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
