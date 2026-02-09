"use client";

import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  oldPrice?: string;
  period: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

export default function PricingCard({
  title,
  price,
  oldPrice,
  period,
  features,
  highlight = false,
  badge,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col rounded-xl p-8 border border-white/10 min-w-[250px] max-w-[300px] ${
        highlight ? "bg-lime-400/20 border-lime-400" : "bg-black/40"
      }`}
    >
      {badge && (
        <span className="text-[10px] uppercase font-bold bg-black/40 px-3 py-1 rounded-full self-start mb-3">
          {badge}
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <div className="flex items-center gap-2 mb-4">
        {oldPrice && (
          <span className="line-through text-gray-400">${oldPrice}</span>
        )}
        <span className="text-3xl font-extrabold">{price}</span>
        <span className="text-sm text-gray-400">{period}</span>
      </div>

      <div className="mb-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-sm mb-2">
            <span className="w-3 h-3 border-2 border-lime-400 rounded-full mt-1" />
            <p>{f}</p>
          </div>
        ))}
      </div>

      <button
        className={`mt-auto py-3 rounded-full font-bold text-sm uppercase tracking-wide ${
          highlight
            ? "bg-black text-white hover:bg-black/80"
            : "bg-lime-400 text-black hover:bg-lime-300"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}
