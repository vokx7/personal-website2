import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      {" "}
      <Landing />
      <div className=" min-h-screen p-8 lg:p-14 pb-20">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
