
"use client";
import acemlogo from "@/assets/logo-acme.png";
import quantumlogo from "@/assets/logo-quantum.png";
import calestiallogo from "@/assets/logo-celestial.png";
import pulselogo from "@/assets/logo-pulse.png";
import apexlogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [acemlogo, quantumlogo, calestiallogo, pulselogo, apexlogo];

export default function LogoImage() {
  return (
    <section className="pt-10 bg-white">
      {/* Hidden overflow for smooth scrolling */}
      <div className="flex justify-center items-center overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex justify-center items-center space-x-10 p-4"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 12, // Longer duration for smoother animation
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }} // GPU optimization
        >
          {/* Duplicate logos for seamless loop */}
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-9 w-28 lg:h-12 lg:w-36"
              loading="eager" // Load immediately for better LCP (Largest Contentful Paint)
              priority // Boost load priority for faster rendering
              quality={100} // High-quality rendering
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
