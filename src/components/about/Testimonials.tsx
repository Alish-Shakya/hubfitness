"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Matthews",
    role: "Member since 2018",
    image: "/placeholder.svg",
    quote:
      "HUB FITNESS transformed my life. The community here is unlike anything I've experienced. Everyone pushes you to be better.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    role: "Member since 2020",
    image: "/placeholder.svg",
    quote:
      "Best investment I've ever made. The coaches are incredible, the facilities are top-notch, and I've never been stronger.",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "Member since 2019",
    image: "/placeholder.svg",
    quote:
      "I've tried other gyms, but nothing compares to HUB FITNESS. The energy, the people, the results—it's unmatched.",
    rating: 5,
  },
];

export default function Testimonials() {
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
          What Our <span className="text-lime-400">Members</span> Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-lime-400/50 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lime-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-black uppercase">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
