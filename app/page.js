import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      {" "}
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
