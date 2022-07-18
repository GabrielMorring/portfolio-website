import React from "react";
import Image from "next/image";
import Link from "next/link";
import tictactoeImg from "../public/assets/projects/tictactoe.png";
import discordImg from "../public/assets/projects/discord.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#eb0f60]">
          Projects
        </p>
        <h1 className="py-4">What {"I've"} Made</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Discord Clone"
            backgroundImg={discordImg}
            projectUrl="/discord"
          />
          <ProjectItem
            title="TicTacToe online"
            backgroundImg={tictactoeImg}
            projectUrl="https://github.com/GabrielMorring/tictactoe"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
