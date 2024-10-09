import { PiSunLight, PiMoonLight } from "react-icons/pi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-8 lg:px-16 py-9 lg:py-12 absolute z-50 w-full">
      <nav className="max-w-8xl mx-auto flex flex-row justify-between">
        <div className="z-[100]">
          <a className="text-2xl font-semibold ">
            {" "}
            <h1>Weronika Pawlak</h1>
          </a>
        </div>
        <div
          id="nav-icon4"
          className={`lg:hidden ${isOpen ? "open" : ""} z-[100]`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hidden lg:flex ">
          {" "}
          <ul className="hidden lg:flex text-lg mx-auto">
            <li className="px-5 py-6 lg:py-2">
              {" "}
              <a href="/#about" className="font-semibold hover:text-pink-600">
                About
              </a>
            </li>
            <li className="px-5 py-6 lg:py-2">
              {" "}
              <a
                href="/#projects"
                className="font-semibold hover:text-pink-600"
              >
                Projects
              </a>
            </li>
            <li className="px-5 py-6 lg:py-2">
              {" "}
              <a href="/#contact" className="font-semibold hover:text-pink-600">
                Contact
              </a>
            </li>
          </ul>
          {/* <div className=" flex items-center justify-end gap-10 min-w-[180px] ">
            <PiSunLight size={28} color="transparent" />
            <PiMoonLight size={28} color="transparent" />
          </div> */}
        </div>

        {isOpen && (
          <div className="w-full lg:w-auto absolute top-0 left-0 bg-white flex flex-col lg:flex-row items-center justify-center h-screen lg:h-auto">
            {" "}
            <ul className="text-xl lg:text-lg text-center lg:text-left">
              <li className="px-5 py-6 lg:py-2">
                {" "}
                <a
                  href="/#about"
                  className="text-lg font-semibold hover:text-pink-600"
                  onClick={handleToggle}
                >
                  About
                </a>
              </li>
              <li className="px-5 py-6 lg:py-2">
                {" "}
                <a
                  href="/#projects"
                  className="text-lg font-semibold hover:text-pink-600"
                  onClick={handleToggle}
                >
                  Projects
                </a>
              </li>
              <li className="px-5 py-6 lg:py-2">
                {" "}
                <a
                  href="/#contact"
                  className="text-lg font-semibold hover:text-pink-600"
                  onClick={handleToggle}
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* <div className=" flex items-center justify-end gap-10 min-w-[180px] ">
              <PiSunLight size={28} color="transparent" />
              <PiMoonLight size={28} color="transparent" />
            </div> */}
          </div>
        )}
      </nav>
    </div>
  );
}
