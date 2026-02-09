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
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4">
            Our <span className="text-lime-400">Programs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the program that fits your goals and experience level
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <h3 className="text-3xl font-black uppercase mb-3 group-hover:text-lime-400 transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-400 mb-6">{program.description}</p>

              <ul className="space-y-2 mb-6">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-lime-400">✓</span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/programs"
                className="inline-block bg-white/5 border border-white/10 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
