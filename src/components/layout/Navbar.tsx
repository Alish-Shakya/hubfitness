"use client";

import { navLinks } from "@/components/data/navLinks";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  // Split links for left & right
  const middleIndex = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, middleIndex);
  const rightLinks = navLinks.slice(middleIndex);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-center items-center px-6 py-8 z-50">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-10 py-4 flex items-center justify-between w-full max-w-5xl"
      >
        <div className="hidden lg:flex items-center w-full justify-between text-[10px] uppercase tracking-[0.2em] font-bold">
          {/* LEFT LINKS */}
          <div className="flex items-center gap-10">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-lime-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* LOGO */}
          <Link href="/" className="mx-6">
            <h1 className="text-2xl text-white italic tracking-tighter whitespace-nowrap hover:cursor-pointer">
              HUB<span className="text-lime-400">FITNESS</span>
            </h1>
          </Link>

          {/* RIGHT LINKS */}
          <div className="flex items-center gap-10">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-lime-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
