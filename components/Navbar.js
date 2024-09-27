import { PiSunLight, PiMoonLight } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="px-16 py-9 lg:py-12 absolute z-50 w-full">
      <nav className="max-w-8xl flex flex-row justify-between items-center mx-auto">
        <div className="">
          <a className="text-2xl font-semibold ">
            {" "}
            <h1>Weronika Pawlak</h1>
          </a>
        </div>

        <ul className="hidden lg:flex text-lg ">
          <li className="px-5 py-2">
            {" "}
            <a href="/#about" className="texxt-lg font-semibold">
              About
            </a>
          </li>
          <li className="px-5 py-2">
            {" "}
            <a href="/#projects" className="texxt-lg font-semibold">
              Projects
            </a>
          </li>
          <li className="px-5 py-2">
            {" "}
            <a href="/#contact" className="texxt-lg font-semibold">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-end gap-10 min-w-[180px] ">
          <PiSunLight size={28} />
          <PiMoonLight size={28} />
        </div>
      </nav>
    </div>
  );
}
