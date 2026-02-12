"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from our equipment to our coaching to our community culture.",
    icon: "⭐",
  },
  {
    title: "Community",
    description:
      "We believe in the power of community. Every member is family, and we lift each other up—literally and figuratively.",
    icon: "🤝",
  },
  {
    title: "Dedication",
    description:
      "Success doesn't come easy. We're dedicated to showing up, putting in the work, and never giving up.",
    icon: "💪",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve with the latest training methods, technology, and fitness trends.",
    icon: "🚀",
  },
];

export default function OurValues() {
  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase mb-16"
        >
          <div>
            <h2 className="text-lime-400 font-black tracking-[0.3em] text-xs mb-3 uppercase">
              What Drives Us
            </h2>

            <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white">
              OUR{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                VALUES
              </span>
            </h3>
          </div>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-lime-400/50 transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-lime-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
