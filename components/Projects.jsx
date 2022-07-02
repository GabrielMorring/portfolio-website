import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";
import discordImg from "../public/assets/projects/discord.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#eb0f60]">
          Projects
        </p>
        <h1 className="py-4">What {"I've"} Made</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property"
            backgroundImg={propertyImg}
            projectUrl="/"
          />
          <ProjectItem
            title="Discord Clone"
            backgroundImg={discordImg}
            projectUrl="/"
          />
          <ProjectItem
            title="TicTacToe online"
            backgroundImg={propertyImg}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
