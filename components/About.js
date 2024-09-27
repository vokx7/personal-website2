import Image from "next/image";
import author from "../public/weronikap.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="mx-auto grid max-w-6xl items-center lg:grid-cols-2"
    >
      <div className="flex-1 prose lg:prose-xl">
        <h1>
          Hello world, <br />{" "}
          <span className="text-blue-600">I&apos;m Weronika</span>
        </h1>
        <p className="text-xl text-slate-500">
          Morbi fermentum risus ut mauris imperdiet convallis. Sed in orci nunc.
          Praesent feugiat nunc non hendrerit volutpat. Suspendisse ullamcorper
          sem eget lorem elementum posuere. Quisque finibus neque accumsan enim
          viverra aliquet. Integer quis odio ac ex iaculis pellentesque. Mauris
          a metus pretium, rutrum tortor vitae, dictum arcu. Proin accumsan at
          lacus in condimentum. In eleifend efficitur enim, at laoreet lacus
          pharetra at. Mauris auctor interdum dui in pulvinar. In hac habitasse
          platea dictumst. Vivamus venenatis sapien odio, vel mollis odio
          facilisis sit amet.
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
