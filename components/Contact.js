"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export default function Contact() {
  return (
    <div id="contact" className="mx-auto max-w-6xl mt-24">
      <div className="my-auto prose lg:prose-xl">
        <h1>
          Feel free to <span className="text-pink-600">contact me!</span>
        </h1>
      </div>
      <div className="mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "GitHub",
    description: "Visit my GitHub!",
    link: "https://github.com/vokx7",
  },
  {
    title: "E-mail",
    description: "Leave a message!",
    link: "mailto:pawlak-weronika@outlook.com",
  },
  {
    title: "LinkedIn",
    description: "Check out my LinkedIn!",
    link: "https://www.linkedin.com/in/weronika-pawlak-605596256/",
  },
];
