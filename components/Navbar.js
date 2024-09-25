import { PiSunLight, PiMoonLight } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="px-16 py-9 lg:py-12 bg-transparent">
      <nav className="max-w-8xl flex flex-row justify-between items-center mx-auto">
        <div className="flex justify-center gap-4 align-middle">
          <a className="text-2xl font-medium ">
            {" "}
            <h1>Weronika Pawlak</h1>
          </a>
        </div>

        <ul className="hidden lg:flex">
          <li className="px-5 py-2">
            {" "}
            <a href="/#" className="texxt-lg font-medium">
              About
            </a>
          </li>
          <li className="px-5 py-2">
            {" "}
            <a href="/#" className="texxt-lg font-medium">
              Projects
            </a>
          </li>
          <li className="px-5 py-2">
            {" "}
            <a href="/#" className="texxt-lg font-medium">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-4">
          <PiSunLight size={28} />
          <PiMoonLight size={28} />
        </div>
      </nav>
    </div>
  );
}
