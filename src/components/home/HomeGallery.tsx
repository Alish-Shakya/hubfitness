"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="bg-[#050505] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-3 uppercase">
              The Performance Vault
            </h2>
            <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white">
              VISUAL{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                ENERGY
              </span>
            </h3>
          </div>
          <Link href="/features" className="self-end">
            <button className="px-8 py-3 bg-white/5 border border-white/10 hover:border-[#E41C38] text-[10px] font-bold tracking-[0.2em] uppercase transition-all rounded-full">
              Explore All Media
            </button>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[80vh]">
          {/* Vertical Feature Video */}
          <motion.div className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-xl border border-white/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover max-h-full opacity-50 group-hover:opacity-80 transition-opacity"
              src="/heroVideo/coverVideo.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[#E41C38] text-[10px] font-black tracking-widest uppercase mb-1 block">
                Live Action
              </span>
              <h4 className="text-xl font-bold uppercase tracking-tight">
                Daily Grind
              </h4>
            </div>
          </motion.div>

          {/* Horizontal Image */}
          <motion.div className="md:col-span-2 relative overflow-hidden rounded-xl border border-white/5">
            <Image
              src="/gallery/gallery3.jpg"
              alt="Heavy Lifting"
              fill
              className="object-cover max-h-full group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
          </motion.div>

          {/* Small Square Image */}
          <motion.div className="relative overflow-hidden rounded-xl border border-white/5">
            <Image
              src="/gallery/gallery2.jpg"
              alt="Detail"
              fill
              className="object-cover max-h-full opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-[10px] font-black tracking-widest border border-white/20 px-4 py-2 backdrop-blur-md">
                DETAILS
              </span>
            </div>
          </motion.div>

          {/* Wide Bottom Video */}
          <motion.div className="md:col-span-3 relative overflow-hidden rounded-xl border border-white/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              // poster="/herovideos/asd.mp4"
              className="absolute inset-0 w-full h-full object-cover max-h-full opacity-50 group-hover:opacity-80 transition-opacity"
              src="/heroVideo/asd.mp4"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-xl group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-8 text-white">
              <p className="text-2xl font-black italic tracking-tighter uppercase">
                Community<span className="text-[#E41C38] ml-2">Power</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
