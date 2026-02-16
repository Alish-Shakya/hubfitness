"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Marcus Steel",
    role: "Founder & Head Coach",
    image: "/cover.jpg",
    bio: "Former Olympic weightlifter with 15+ years of coaching experience.",
  },
  {
    name: "Sarah Johnson",
    role: "Nutrition Specialist",
    image: "/cover.jpg",
    bio: "Certified nutritionist helping members fuel their performance.",
  },
  {
    name: "David Chen",
    role: "Strength & Conditioning Coach",
    image: "/cover.jpg",
    bio: "Ex-NFL trainer specializing in athletic performance.",
  },
  {
    name: "Emily Rodriguez",
    role: "Recovery & Wellness Coach",
    image: "/cover.jpg",
    bio: "Physical therapist focused on injury prevention and recovery.",
  },
];

export default function MeetTheTeam() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          {/* Small top label */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-4 uppercase"
          >
            The People Behind Hub
          </motion.h2>

          {/* Main heading */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic leading-none text-white"
          >
            MEET THE{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              TEAM
            </span>
          </motion.h3>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden mb-5 bg-zinc-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay - always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Hover Overlay - darkens on hover for better text readability */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                {/* Name overlay at bottom - visible on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.p
                    initial={false}
                    animate={{
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm leading-relaxed"
                  >
                    {member.bio}
                  </motion.p>
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-black uppercase leading-tight group-hover:text-[#E41C38] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#E41C38]/80 text-xs md:text-sm uppercase tracking-wider font-bold">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA or additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm md:text-base">
            Want to train with us?{" "}
            <span className="text-[#E41C38] font-bold cursor-pointer hover:text-[#E41C38]/80 transition-colors">
              Get in touch →
            </span>
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
