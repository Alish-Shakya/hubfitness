"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface MainFeatureCardProps {
  title: string;
  description: string;
  size?: "small" | "medium" | "large" | "wide";
  image?: string;
}
const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-2 row-span-1",
  large: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  wide: "col-span-1 md:col-span-4 row-span-1",
};

export default function MainFeatureCard({
  title,
  description,
  size = "small",
  image,
}: MainFeatureCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      className={`group relative bg-[#050505] border border-white/5 rounded-2xl overflow-hidden ${sizeClasses[size]} backdrop-blur-sm hover:border-white/10 transition-all duration-500`}
    >
      {/* Image Background */}
      {image && (
        <div className="absolute inset-0 z-0">
          <motion.div
            variants={imageVariants}
            className="relative w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-40 transition-opacity duration-700"
            />
            {/* Gradient Overlay - only appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 p-4 md:p-5 h-full flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            className={`font-bold uppercase mb-2 tracking-tight${
              size === "large" || size === "wide"
                ? "text-xl md:text-2xl"
                : "text-base md:text-lg"
            }`}
          >
            {title}
          </h3>

          {/* Description - only visible on hover */}
          <p
            className={`text-gray-300 leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              size === "large" || size === "wide"
                ? "text-sm md:text-base"
                : "text-xs md:text-sm"
            }`}
          >
            {description}
          </p>

          {/* Hover Arrow */}
          <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span
              className={`text-xs font-bold uppercase text-[#E41C38] cursor-pointer `}
            >``
              Explore
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg
                className={`w-3.5 h-3.5 `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
