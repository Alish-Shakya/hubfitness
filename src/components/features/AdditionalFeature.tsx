"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AdditionalFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function AdditionalFeatureCard({
  icon: Icon,
  title,
  description,
}: AdditionalFeatureCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-gray-900/60 to-black/80 border border-white/5 rounded-xl p-6 text-center group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-400/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-lime-400" strokeWidth={2} />
      </div>
      <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
        {title}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
