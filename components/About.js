import Image from "next/image";
import author from "../public/weronikap.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="px-8 lg:px-auto mx-auto grid max-w-6xl items-center lg:grid-cols-2 "
    >
      <div className="flex-1 prose lg:prose-xl ">
        <h1>
          Hello world, <br />{" "}
          <span className="text-pink-600">I&apos;m Weronika</span>
        </h1>
        <p className="text-xl text-slate-500">
          Master&apos;s degree in IT in Business, specializing in analysis and
          design of systems. I am passionate about designing and implementing
          web applications with a particular focus on meeting user expectations.
          I have experience working with Next.js (React), HTML, CSS, WordPress
          and Figma. I am characterized by excellent work organization,
          conscientiousness and a desire for continuous professional development
          in the IT field.
        </p>
      </div>
      <div className="py-8 lg:py-auto flex-1 flex justify-end">
        <Image
          src={author}
          width={400}
          alt="Weronika Pawlak"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
