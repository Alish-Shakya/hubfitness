"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "World-Class Facilities",
    description:
      "State-of-the-art equipment, spacious training areas, and premium amenities designed for peak performance.",
  },
  {
    number: "02",
    title: "Expert Coaches",
    description:
      "Our certified trainers bring decades of combined experience in strength training, nutrition, and athletic performance.",
  },
  {
    number: "03",
    title: "Proven Results",
    description:
      "Over 10,000 transformations and counting. Our members achieve their goals—and surpass them.",
  },
  {
    number: "04",
    title: "Flexible Programs",
    description:
      "From beginners to elite athletes, we offer customized training programs that fit your goals and schedule.",
  },
  {
    number: "05",
    title: "Community Support",
    description:
      "Train alongside motivated individuals who push you to be better every single day.",
  },
  {
    number: "06",
    title: "24/7 Access",
    description:
      "Your schedule is unique. Our facility is open around the clock so you can train on your time.",
  },
];

export default function WhyChooseUs() {
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
            <h2 className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-3 uppercase">
              Train Different
            </h2>

            <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white">
              THE HUB{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                ADVANTAGE
              </span>
            </h3>
          </div>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className="absolute top-2 left-4 text-7xl font-black text-[#E41C38]/20
                          group-hover:text-[#E41C38]/40 blur-[0.5px]"
              >
                {reason.number}
              </div>
              <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 h-full hover:border-[#E41C38]/50 transition-all">
                <h3 className="text-2xl font-black uppercase mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
