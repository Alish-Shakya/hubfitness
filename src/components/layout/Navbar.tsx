"use client";

import { navLinks } from "@/components/data/navLinks";
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
          HUB<span className="text-lime-400">FITNESS</span>
        </Link>

        {/* LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-[0.2em] font-bold text-white">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-lime-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
