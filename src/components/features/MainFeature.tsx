"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MainFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "lime" | "orange" | "cyan" | "red" | "yellow" | "purple";
}

const colorClasses = {
  lime: "from-lime-400 to-lime-600",
  orange: "from-orange-500 to-orange-700",
  cyan: "from-cyan-400 to-cyan-600",
  red: "from-red-500 to-red-700",
  yellow: "from-yellow-400 to-yellow-600",
  purple: "from-purple-500 to-purple-700",
};

export default function MainFeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: MainFeatureCardProps) {
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
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-white/10 rounded-2xl p-8 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Icon */}
      <div className="relative mb-6">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Decorative corner */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${colorClasses[color]} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
      />
    </motion.div>
  );
}
