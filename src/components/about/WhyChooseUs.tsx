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
    <section className="py-20 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase text-center mb-16"
        >
          Why Choose <span className="text-lime-400">HUB FITNESS</span>
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
              <div className="absolute -left-4 -top-4 text-8xl font-black text-lime-400/10 group-hover:text-lime-400/20 transition-colors">
                {reason.number}
              </div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:border-lime-400/50 transition-all">
                <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-lime-400 transition-colors">
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
