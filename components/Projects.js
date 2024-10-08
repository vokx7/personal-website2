"use client";

import project1 from "../public/jw-fotografia.vercel.app.png";
import project2 from "../public/transporter-travel.pl.png";
import React from "react";
import ProjectContainer from "./ProjectContainer";

export default function Projects() {
  return (
    <div id="projects" className="px-8 lg:px-auto mx-auto max-w-6xl mt-24">
      <div className="prose lg:prose-xl pb-8 lg:pb-auto">
        <h1>
          Check out my <span className="text-pink-600"> projects</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center lg:gap-10 items-center">
        <ProjectContainer
          title={"Julia Wąsala Fotografia"}
          info={"Hover over this card to unleash the power of CSS perspective"}
          image={project1}
          link={"https://jw-fotografia.vercel.app/"}
        />
        <ProjectContainer
          title={"Transporter Travel"}
          info={"Hover over this card to unleash the power of CSS perspective"}
          image={project2}
          link={"https://transporter-travel.pl/"}
        />
      </div>
    </div>
  );
}
