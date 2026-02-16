"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    images: ["/hello.jpg", "/hello.jpg"], // Replace with your actual image paths
    text: "This gym has a great atmosphere. Trainers are so friendly and always on hand to give support or advice to their clients whenever they need regarding diet and exercises. Thanks to the HUB FITNESS family for providing us a homely environment.",
    name: "Alish Shakya",
    role: "Student",
  },
  {
    images: ["/placeholder.svg", "/placeholder.svg"],
    text: "Joining this gym changed my lifestyle. Trainers here guide step by step and motivate me daily. I've never felt more supported in my fitness journey.",
    name: "Sarada Munikar",
    role: "Civil Engineer",
  },
  {
    images: ["/placeholder.svg", "/placeholder.svg"],
    text: "From being unfit to lifting confidently, I gained both strength and confidence. The community here is incredible and pushes you to be your best.",
    name: "Riyaz Munikar",
    role: "Student",
  },
  {
    images: ["/placeholder.svg", "/placeholder.svg"],
    text: "The supportive environment and modern equipment helped me achieve my goals. I've transformed not just physically, but mentally as well.",
    name: "Astha Karki",
    role: "Designer",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#050505] to-black text-white overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#E41C38]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <div>
            <h2 className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-3 uppercase">
              Voices Of Strength
            </h2>

            <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white">
              CLIENT{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                STORIES
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left Side - Images */}
          <div className="w-full lg:w-1/2 flex gap-4">
            {testimonials[active].images.map((img, i) => (
              <div
                key={i}
                className="relative w-1/2 h-[400px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`Testimonial ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2 text-left lg:text-left">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#E41C38] transition-all">
              {/* Quote Icon */}
              <div className="text-6xl text-[#E41C38] mb-4 opacity-30">"</div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                {testimonials[active].text}
              </p>

              {/* Author Info */}
              <div className="border-l-4 border-[#E41C38] pl-4">
                <p className="font-black text-xl uppercase text-[#E41C38]mb-1">
                  {testimonials[active].name}
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActive(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold transition-all ${
                active === index
                  ? "bg-[#E41C38] text-black shadow-[0_0_20px_rgba(228,28,56,0.5)]"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-[#E41C38]/50"
              }`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
