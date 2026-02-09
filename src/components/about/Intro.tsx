"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Intro() {
  // Mouse tracking for the spotlight glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#050505] h-screen text-white font-sans relative selection:bg-lime-400 selection:text-black">
      {/* 🟢 DYNAMIC MOUSE GLOW */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none z-30"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 🖼️ BACKGROUND LAYER (The community image you downloaded) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cover.jpg"
          alt="Community"
          fill
          className="object-cover opacity-40 grayscale"
        />
        {/* Dark gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
      </div>

      {/* ⚡ HERO SECTION (CENTERED LIKE BEFORE) */}
      <section className="relative flex flex-1 items-center justify-center z-10 h-full">
        <div className="relative w-full max-w-[1400px] flex items-center justify-center">
          {/* CENTER IMAGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="relative w-[300px] h-[460px] sm:w-[380px] sm:h-[560px] md:w-[460px] md:h-[640px] lg:w-[520px] lg:h-[720px]">
              <Image
                src="/svg.png"
                alt="Main Athlete"
                fill
                className="object-contain drop-shadow-[0_0_120px_rgba(163,230,53,0.25)]"
                priority
              />
            </div>
          </motion.div>

          {/* TEXT OVER IMAGE */}
          <div className="absolute flex items-center justify-center gap-40 text-center pointer-events-none z-20 -translate">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="leading-none"
            >
              <div className="relative flex flex-col items-center">
                {/* UNITED */}
                <h1
                  className="text-7xl font-black uppercase tracking-tighter text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                  }}
                >
                  UNITED
                </h1>

                {/* WRAPPER FOR BY + IMAGE */}
                <div className="relative mt-2">
                  {/* BY (FLOATING BETWEEN) */}
                  <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-[26px] font-black tracking-[0.4em] text-white/40 uppercase z-20">
                    By
                  </span>

                  {/* STRENGTH */}
                  <Image
                    src="/str2.png"
                    alt="Strength"
                    width={220}
                    height={120}
                    className="object-contain -mt-13 -rotate-25"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="leading-none"
            >
              <div className="relative flex flex-col items-center">
                {/* UNITED */}
                <h1
                  className="text-7xl font-black uppercase tracking-tighter text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                  }}
                >
                  powered
                </h1>

                {/* WRAPPER FOR BY + IMAGE */}
                <div className="relative mt-2">
                  {/* BY (FLOATING BETWEEN) */}
                  <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-[26px] font-black tracking-[0.4em] text-white/40 uppercase z-20">
                    By
                  </span>

                  {/* STRENGTH */}
                  <Image
                    src="/community2.png"
                    alt="community"
                    width={220}
                    height={120}
                    className="object-contain -mt-13 rotate-25"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔘 CALL TO ACTION FOOTER */}
      <div className="absolute bottom-10 left-0 w-full px-10 lg:px-20 flex flex-col md:flex-row items-end justify-between z-40">
        <div className="max-w-md">
          <p className=" leading-relaxed mb-6 border-l-2 border-lime-400 pl-4">
            Designed to optimize your fitness, recovery, performance, and
            connection. Hub Fitness delivers unmatched value for elite members.
          </p>
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-black font-black py-4 px-12 rounded-sm text-sm tracking-widest hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] transition-all"
            >
              JOIN NOW
            </motion.button>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500" />
                </div>
              ))}
              <div className="pl-6">
                <p className="text-xl font-black leading-none">2.4k+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                  Followers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hidden md:flex flex-col items-center gap-4 relative">
          {/* Dumbbell Line */}
          <div className="hidden md:flex flex-col items-center gap-4">
            {/* Vertical Scroll Text */}
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray [writing-mode:vertical-lr] rotate-180">
              Scroll Down
            </span>

            {/* Dumbbell Line */}
            <div className="w-px h-20 bg-gradient-to-b from-lime-400 to-transparent relative flex flex-col items-center">
              {/* Dumbbell Icon */}
              <div className="w-6 h-3 bg-gray-800 rounded-full flex justify-between items-center px-1">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
