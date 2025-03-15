"use client";
import ProductImage from "@/assets/product-image.png";
import pyramidimage from "@/assets/pyramid.png";
import tubeimage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Productshow() {
  const ref = useRef(null);

  // Create parallax effect based on scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjusted parallax range for smoother motion
  const tubeY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]); // More natural range
  const pyramidY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]); // More natural range

  return (
    <section ref={ref} className="pt-6 overflow-hidden lg:p-10">
      {/* SEO Optimized Container */}
      <div className="flex bg-gradient-to-b from-white to-[#bfcbf8] rounded-b-4xl flex-col justify-center items-center space-y-4 p-3 md:p-9 lg:p-12">
        {/* Header Section */}
        <div className="md:text-center md:px-12 flex flex-col lg:space-y-6 space-y-4 md:mx-auto">
          <div className="text-center">
            <span className="smallhero">
              Boost Your Productivity
            </span>
          </div>
          <h1 className="heading">
            A more effective way to track progress
          </h1>
          <p className="pricepara">
            Productivity is about working smarter, not harder. Focus on what truly matters and eliminate distractions. 🚀
          </p>
        </div>

        {/* Product Image with Parallax Effect */}
        <div className="flex justify-center items-center relative">
          {/* Tube Image with Parallax */}
          <motion.div
            style={{ y: tubeY, willChange: "transform" }}
            className="hidden md:block absolute -top-16 -right-20 lg:-right-64 lg:-top-32"
          >
            <Image
              src={tubeimage}
              alt="Tube-shaped decorative element"
              width={216}
              height={216}
              className="h-36 w-36 lg:h-48 lg:w-48"
              loading="eager"
              priority
              quality={90}
            />
          </motion.div>

          {/* Main Product Image */}
          <Image
            src={ProductImage}
            alt="Product display showing tracking progress"
            width={600}
            height={400}
            className="h-86 w-[95vw] md:w-[75vw] lg:w-[50vw] border-[#021963] border-[5px] rounded-3xl"
            loading="eager"
            priority
            quality={90}
          />

          {/* Pyramid Image with Parallax */}
          <motion.div
            style={{ y: pyramidY, willChange: "transform" }}
            className="hidden md:block absolute -bottom-10 -left-24 lg:-left-56 lg:-bottom-16"
          >
            <Image
              src={pyramidimage}
              alt="Pyramid-shaped decorative element"
              width={216}
              height={216}
              className="h-36 w-36 lg:h-48 lg:w-48"
              loading="eager"
              priority
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
