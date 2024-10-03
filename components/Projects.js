"use client";

import Image from "next/image";
import project1 from "../public/jw-fotografia.vercel.app.png";
import project2 from "../public/transporter-travel.pl.png";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import ProjectContainer from "./ProjectContainer";

export default function Projects() {
  return (
    <div id="projects" className="mx-auto max-w-6xl mt-24">
      <div className="prose lg:prose-xl ">
        <h1>
          Check out my <span className="text-pink-600"> projects</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
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
