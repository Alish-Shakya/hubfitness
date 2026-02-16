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
  {
    name: "Sarah Jenkins",
    role: "Member since 2021",
    image: "/placeholder.svg",
    quote:
      "The personalized programming helped me hit my PRs in record time. Truly elite coaching staff.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Member since 2022",
    image: "/placeholder.svg",
    quote:
      "Clean, professional, and intense. Exactly what I was looking for in a high-performance strength gym.",
    rating: 5,
  },
];

// Double the array for the seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-3 uppercase">
            Strength In Numbers
          </h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase italic leading-none text-white">
            MEMBERS{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              STORIES
            </span>
          </h3>
        </motion.div>
      </div>

      {/* UX FIX: The "mask-image" creates a fade effect on the left and right 
          so cards don't "blink" or pop in/out harshly.
      */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-6 flex-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          // UX IMPROVEMENT: Pause on hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#E41C38]/50 transition-colors duration-500 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#E41C38] text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 text-lg leading-relaxed mb-8 italic font-medium">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#E41C38] transition-colors">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#E41C38] uppercase font-black tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
