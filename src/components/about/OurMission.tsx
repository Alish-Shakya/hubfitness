"use client";

import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#050505] to-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase mb-8"
        >
          Our <span className="text-lime-400">Mission</span>
        </motion.h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
        >
          <p className="text-2xl text-gray-300 leading-relaxed mb-6">
            To empower individuals to reach their peak physical and mental
            performance through world-class training, cutting-edge facilities,
            and an unbreakable community bond.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            We believe that true strength comes from within, but it's amplified
            when you're surrounded by others who share your passion and drive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
