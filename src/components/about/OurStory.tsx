"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-20 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black uppercase mb-6">
              Our <span className="text-lime-400">Story</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Founded in 2015, HUB FITNESS began with a simple vision: to create
              a space where fitness meets community. What started as a small
              warehouse gym has grown into a movement.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Our founders, former athletes themselves, understood the power of
              training alongside like-minded individuals. They built HUB FITNESS
              not just as a place to work out, but as a home for those who push
              their limits every single day.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, we've helped over 10,000 members transform their lives
              through strength training, community support, and unwavering
              dedication to excellence.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/cover.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
