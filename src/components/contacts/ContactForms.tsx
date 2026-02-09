"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-1"
    >
      <form className="flex flex-col gap-6 bg-[#111] p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#222] text-white px-4 py-3 rounded-md border border-white/10 focus:border-lime-400 focus:outline-none transition"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="bg-[#222] text-white px-4 py-3 rounded-md border border-white/10 focus:border-lime-400 focus:outline-none transition"
        />
        <input
          type="text"
          placeholder="Subject"
          className="bg-[#222] text-white px-4 py-3 rounded-md border border-white/10 focus:border-lime-400 focus:outline-none transition"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-[#222] text-white px-4 py-3 rounded-md border border-white/10 focus:border-lime-400 focus:outline-none transition resize-none"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-lime-400 text-black font-black py-4 px-8 rounded-md uppercase tracking-widest hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] transition-all"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}
