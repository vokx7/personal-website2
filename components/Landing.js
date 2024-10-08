"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <>
      {" "}
      <Navbar />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 md:mx-10 lg:mx-14"
        >
          <div className="text-3xl md:text-[4rem] md:leading-none font-bold dark:text-white text-center">
            Transforming <b className="text-pink-600">ideas</b> into sleek,
            responsive and future-proof {/* text-[#84b067] */}
            <b className="text-pink-600">web apps</b>
          </div>
          <div className="font-light text-base md:text-4xl dark:text-neutral-200 py-4">
            Let&apos;s build the future of the web together!
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:bg-pink-600">
            {" "}
            <a href="/#contact"> Contact me</a>
          </button>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
