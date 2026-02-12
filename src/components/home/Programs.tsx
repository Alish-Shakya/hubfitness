"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Beginner Program",
    description: "Perfect for those just starting their fitness journey",
    features: [
      "Personalized workout plans",
      "Basic nutrition guidance",
      "2x weekly check-ins",
    ],
    image: "/cover.jpg",
  },
  {
    title: "Advanced Training",
    description: "For experienced athletes looking to level up",
    features: [
      "Custom training programs",
      "Advanced nutrition plans",
      "Daily coach support",
    ],
    image: "/cover.jpg",
  },
  {
    title: "Elite Performance",
    description: "Maximum results for serious competitors",
    features: [
      "1-on-1 coaching sessions",
      "Competition prep",
      "24/7 coach access",
    ],
    image: "/cover.jpg",
  },
];

export default function Programs() {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-black via-neutral-950 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          {/* small label */}
          <p className="text-lime-400 font-black tracking-[0.35em] text-xs mb-6 uppercase">
            Training Categories
          </p>

          {/* big heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic leading-[0.9]">
            OUR
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              PROGRAMS
            </span>
          </h2>

          {/* divider line */}
          <div className="w-24 h-[2px] bg-lime-400 mt-8"></div>
        </motion.div>

        {/* program grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/5 blur-2xl transition-all duration-500 rounded-xl"></div>

              {/* image */}
              <div className="relative h-72 rounded-xl overflow-hidden mb-6">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* title */}
              <h3 className="text-3xl font-black uppercase mb-3 group-hover:text-lime-400 transition-colors">
                {program.title}
              </h3>

              {/* desc */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* features */}
              <ul className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-lime-400 text-lg">✓</span>
                    <span className="text-sm text-gray-300 tracking-wide">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* button */}
              <Link
                href="/programs"
                className="inline-block border border-white/20 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-[0.2em] hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all"
              >
                View Program
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
