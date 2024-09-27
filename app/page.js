import About from "@/components/About";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <>
      {" "}
      <Landing />
      <div className=" min-h-screen p-8 lg:p-14 pb-20">
        <About />
      </div>
    </>
  );
}
