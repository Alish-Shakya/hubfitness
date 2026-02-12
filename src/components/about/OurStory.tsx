"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              {/* small top label */}
              <h2 className="text-lime-400 font-black tracking-[0.3em] text-xs mb-3 uppercase">
                Who We Are
              </h2>

              {/* main heading */}
              <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white mb-3">
                OUR{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  STORY
                </span>
              </h3>
            </div>

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
