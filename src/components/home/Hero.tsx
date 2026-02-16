"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
  {
    type: "video",
    src: "/heroVideo/coverVideo.mp4",
    title: "Unleash Your Inner Beast",
    subtitle:
      "State-of-the-art equipment and elite coaching to reach your peak performance.",
  },
  {
    type: "video",
    src: "/heroVideo/cover2.mp4",
    title: "Crush Your Goals",
    subtitle:
      "From weight loss to muscle gain, we provide the roadmap to your success.",
  },
];
const SLIDE_DURATION = 10;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Play / Pause videos
  useEffect(() => {
    const currentVideo = videoRefs.current[current];

    if (currentVideo) {
      currentVideo.play().catch(() => {});

      Object.keys(videoRefs.current).forEach((key) => {
        const index = parseInt(key);
        if (index !== current && videoRefs.current[index]) {
          videoRefs.current[index]?.pause();
        }
      });
    }
  }, [current]);

  // Preload next video
  useEffect(() => {
    const nextIndex = (current + 1) % backgrounds.length;
    const nextVideo = videoRefs.current[nextIndex];

    if (nextVideo && !isTransitioning) {
      nextVideo.load();
    }
  }, [current, isTransitioning]);

  // Auto slide
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, SLIDE_DURATION * 1000);

    return () => clearTimeout(timer);
  }, [current]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % backgrounds.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const handleSlideClick = (index: number) => {
    if (index !== current) {
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }
  };

  const bg = backgrounds[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Videos */}
      {backgrounds.map((item, index) => {
        const isActive = index === current;

        return (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 1 : 0,
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-contain object-center"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          </div>
        );
      })}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                {bg.title.split(" ").map((word, i, arr) => {
                  const lastIndex = arr.length - 1;

                  return (
                    <span
                      key={i}
                      className={i === lastIndex ? "text-[#E41C38]" : ""}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10">
                {bg.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/membership"
                  className="px-8 py-4 font-bold bg-[#E41C38] text-black rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
                >
                  Membership
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full max-w-5xl px-6">
        <div className="flex gap-3 w-full">
          {backgrounds.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideClick(index)}
              className="flex-1 h-[3px] md:h-[4px] bg-white/20 rounded-full overflow-hidden cursor-pointer"
            >
              {/* Active progress */}
              {index === current && (
                <motion.div
                  className="h-full bg-[#E41C38] "
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: SLIDE_DURATION,
                    ease: "linear",
                  }}
                />
              )}

              {/* Completed */}
              {index < current && (
                <div className="h-full w-full bg-[#E41C38]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
    </section>
  );
}
