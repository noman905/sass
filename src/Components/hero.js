"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import cogimage from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="p-2 max-w-[100%] overflow-hidden mt-0 flex flex-col md:flex-row bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">

      {/* Left Content */}
      <div className="flex flex-col space-y-5 md:space-y-7">
        <p>
          {/* Version Tag */}
          <span className="smallhero">
            Version 3.0 is here
          </span>
        </p>

        {/* Heading */}
        <h1 className="text-5xl font-bold pl-2.5 lg:text-[78px]">
          Pathway to <span className="text-[#0f25c6]">Productivity</span>
        </h1>

        {/* Description */}
        <p className="text-justify p-2.5 pr-4 lg:text-[20px]">
          Productivity is about working smarter, not harder. It means focusing on important tasks, managing time well, and avoiding distractions to get more done efficiently.
        </p>

        {/* Buttons */}
        <div className="flex space-x-5 p-2.5">
          <button className="bg-black text-white h-10 w-30 lg:h-14 lg:w-32 lg:text-[19px] rounded">
            Get for free
          </button>
          <div className="flex justify-center items-center space-x-[1px]">
            <button className="text-black lg:text-[19px] font-bold h-10 w-25 lg:h-14 lg:w-32 rounded">
              Learn More
            </button>
            <FaArrowRightLong className="text-black" />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="mt-5 md:mt-0 relative">
        {/* Cylinder Animation */}
        <motion.div
          className="hidden md:block absolute -left-20 -top-6 h-[170px] w-[170px]"
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <Image src={cylinder} alt="cylinder image" />
        </motion.div>

        {/* Cog Animation */}
        <motion.div
          className="lg:h-[509px]"
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <Image src={cogimage} alt="cog image" />
        </motion.div>

        {/* Noodle Image (Original Position) */}
        <motion.div
          className="hidden h-[190px] w-[190px] lg:block absolute -bottom-15 left-108"
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <Image src={NoodleImage} alt="noodle image" />
        </motion.div>
      </div>
    </section>
  );
}
