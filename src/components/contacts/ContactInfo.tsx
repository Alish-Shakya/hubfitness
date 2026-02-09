"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-1"
    >
      <h2 className="text-lime-400 font-black tracking-[0.3em] text-xs mb-3 uppercase">
        Get In Touch
      </h2>
      <h3 className="text-5xl font-black uppercase italic leading-tight mb-8 text-white">
        Contact{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px white" }}
        >
          Us
        </span>
      </h3>
      <p className="text-gray-300 mb-6">
        Have questions or want to join our community? Fill out the form and
        we’ll get back to you as soon as possible. Your fitness journey starts
        here.
      </p>

      <div className="space-y-4 text-gray-300">
        <p>
          <span className="font-bold text-lime-400">Address:</span> 123 Fitness
          St, Your City
        </p>
        <p>
          <span className="font-bold text-lime-400">Phone:</span> +977 1234 5678
        </p>
        <p>
          <span className="font-bold text-lime-400">Email:</span>{" "}
          info@yourgym.com
        </p>
      </div>
    </motion.div>
  );
}
