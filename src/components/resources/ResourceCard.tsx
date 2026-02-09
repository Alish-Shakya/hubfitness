"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ResourceCard({
  icon: Icon,
  title,
  description,
}: ResourceCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-gray-900/60 to-black/80 border border-white/5 rounded-xl p-6 text-center group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors duration-300">
        <Icon className="w-6 h-6 text-orange-500" strokeWidth={2} />
      </div>
      <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
        {title}
      </h4>
      <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
