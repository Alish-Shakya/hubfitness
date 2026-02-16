"use client";

import { navLinks } from "@/data/navLinks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="text-4xl text-white italic tracking-tighter hover:cursor-pointer"
        >
          <div className="flex items-center select-none">
            {/* Logo image as 'H' */}
            <img
              src="logo.png"
              alt="H Logo"
              className="w-12 h-12 object-contain"
            />

            {/* UB part */}
            <span className="-ml-1 text-white font-black uppercase tracking-tight text-2xl font-montserrat">
              UB
            </span>

            {/* FITNESS part */}
            <span
              className="ml-2 font-extrabold uppercase tracking-widest text-2xl font-montserrat"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
              }}
            >
              FITNESS
            </span>
          </div>
        </Link>

        {/* LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-[0.2em] font-bold text-white">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#E41C38] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
