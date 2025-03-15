"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar9 from "@/assets/avatar-9.png";

const testimonials = [
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar5.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar9.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const TestimonialsColumn = ({ className, speed }) => {
  return (
    <div className={`overflow-hidden h-[400px] ${className}`}>
      <motion.div
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          willChange: "transform", // Helps with GPU acceleration and reduces lag
        }}
      >
        {/* Duplicate for seamless looping */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col w-full items-center border border-black p-4 shadow-md bg-white rounded-3xl mb-3"
          >
            <p className="text-[18px] text-center text-[#010925]">
              {testimonial.text}
            </p>
            <div className="flex items-center justify-center space-x-4 mt-3">
              <Image
                src={testimonial.imageSrc}
                alt={`Avatar of ${testimonial.name}`}
                className="h-16 w-16 rounded-full"
                loading="lazy"
              />
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                <p className="text-[#010925]">{testimonial.username}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="mt-8">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-[38px] lg:text-[50px] leading-10 font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center">
          What our users say
        </h1>
        <p className="text-[17px] md:text-[26px] text-[#010925]">
          Our loved ones
        </p>
        <div className="flex justify-center items-center gap-3 p-4 lg:px-10 maskImage:linear-gradient(to_top,transparent,black,transparent) bg-[#f5f5f5]">
          {/* First column on mobile */}
          <TestimonialsColumn speed={10} className="flex " />
          {/* Second column on tablet */}
          <TestimonialsColumn className="hidden md:flex" speed={10} />
          {/* Third column for desktop */}
          <TestimonialsColumn className="hidden lg:flex" speed={3} />
           
        </div>
      </div>
    </section>
  );
}
