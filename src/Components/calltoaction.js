"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

import Starimage from "@/assets/star.png";
import Springimage from "@/assets/spring.png";

export default function Calltoaction() {
  return (
    <section className="pt-20 pb-6 overflow-hidden flex justify-center items-center">
      <div className="flex flex-col gap-6 relative justify-center items-center rounded-4xl p-3 w-[85%] bg-gradient-to-b from-[#FFFFFF] to-[#bfcbf8]">
        <h1 className="heading">Sign Up for Free</h1>

        <p className="text-[18px] text-justify lg:text-center px-1 sm:px-8 text-[#010925] md:px-32 lg:px-[260px]">
          Boost your focus and get more done! Try our productivity app today and unlock your full potential.
        </p>

        {/* Buttons */}
        <div className="flex space-x-5 p-2.5">
          <motion.button
            whileHover={{ scale: 1.05 }} // Slight increase in size on hover
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-black text-white h-10 w-30 lg:h-12 lg:w-30 lg:text-[19px] rounded"
          >
            Get for free
          </motion.button>

          <div className="flex justify-center items-center space-x-[1px]">
            <motion.button
              whileHover={{ scale: 1.05 }} // Slight increase in size on hover
              transition={{ type: "spring", stiffness: 200 }}
              className="text-black lg:text-[19px] font-bold h-10 w-25 lg:h-12 lg:w-28 rounded"
            >
              Learn More
            </motion.button>
            <FaArrowRightLong className="text-black" />
          </div>
        </div>

        {/* Animated Images */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="hidden md:block absolute -top-10 right-0"
        >
          <Image
            src={Springimage}
            alt="spring image"
            className="h-41 w-41 lg:h-54 lg:w-54 lg:-right-10 lg:-top-6"
          />
        </motion.div>

        <motion.div
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="hidden md:block absolute bottom-0 -left-10"
        >
          <Image
            src={Starimage}
            alt="star image"
            className="h-41 w-41 lg:h-54 lg:w-54 lg:-left-20 lg:-bottom-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
