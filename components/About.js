import Image from "next/image";
import author from "../public/weronikap.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="mx-auto grid max-w-6xl items-center lg:grid-cols-2 "
    >
      <div className="flex-1 prose lg:prose-xl ">
        <h1>
          Hello world, <br />{" "}
          <span className="text-pink-600">I&apos;m Weronika</span>
        </h1>
        <p className="text-xl text-slate-500">
          Master&apos;s degree in Computer Science in Business with solid
          knowledge in programming, UI/UX design and business analysis. I am
          passionate about designing and implementing web applications, with a
          particular focus on meeting user expectations. I have experience
          working with Next.js, HTML, CSS. I am characterized by excellent work
          organization, conscientiousness and a desire for continuous
          professional development in the IT field.
        </p>
      </div>
      <div className="flex-1 flex justify-end">
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
