"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Marcus Steel",
    role: "Founder & Head Coach",
    image: "/placeholder.svg",
    bio: "Former Olympic weightlifter with 15+ years of coaching experience.",
  },
  {
    name: "Sarah Johnson",
    role: "Nutrition Specialist",
    image: "/placeholder.svg",
    bio: "Certified nutritionist helping members fuel their performance.",
  },
  {
    name: "David Chen",
    role: "Strength & Conditioning Coach",
    image: "/placeholder.svg",
    bio: "Ex-NFL trainer specializing in athletic performance.",
  },
  {
    name: "Emily Rodriguez",
    role: "Recovery & Wellness Coach",
    image: "/placeholder.svg",
    bio: "Physical therapist focused on injury prevention and recovery.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase mb-16"
        >
          <div>
            {/* small top label */}
            <h2 className="text-lime-400 font-black tracking-[0.3em] text-xs mb-3 uppercase">
              The People Behind Hub
            </h2>

            {/* main heading */}
            <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white">
              MEET THE{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                TEAM
              </span>
            </h3>
          </div>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              <h3 className="text-2xl font-black uppercase group-hover:text-lime-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-lime-400 text-sm uppercase tracking-wider mb-2">
                {member.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
