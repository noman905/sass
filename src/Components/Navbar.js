"use client";
import { useState } from "react";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";

import Logo from "@/assets/logosaas.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  backdrop-blur-3xl ">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Image 
       src={Logo} 
       alt="SaaS Logo" 
       className="h-10 w-10 md:h-10 md:w-10"
        />


        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-black text-lg font-medium">
          <a href="#" className="hover:text-gray-600 transition">About</a>
          <a href="#" className="hover:text-gray-600 transition">Features</a>
          <a href="#" className="hover:text-gray-600 transition">Customers</a>
          <a href="#" className="hover:text-gray-600 transition">Help</a>
        </nav>

        {/* Get for Free Button (Desktop) */}
        <button className="hidden md:block bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition text-sm sm:text-base">
          Get for Free
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose className="h-8 w-8" /> : <MdMenu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Open & Close */}
      <div
        className={`md:hidden flex flex-col items-center space-y-4 bg-white text-black shadow-md w-full transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "opacity-100 scale-y-100 h-auto py-4" : "opacity-0 scale-y-95 h-0 py-0"
        }`}
      >
        <a href="#" className="hover:text-gray-600 transition text-lg">About</a>
        <a href="#" className="hover:text-gray-600 transition text-lg">Features</a>
        <a href="#" className="hover:text-gray-600 transition text-lg">Customers</a>
        <a href="#" className="hover:text-gray-600 transition text-lg">Help</a>
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition text-sm">
          Get for Free
        </button>
      </div>
    </header>
  );
}
