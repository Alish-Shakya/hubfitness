"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative flex flex-col rounded-2xl p-8 min-w-[280px] max-w-[320px] backdrop-blur-sm ${
        highlight
          ? "bg-gradient-to-br from-[#E41C38]/20 via-black/60 to-black/80 border-2 border-[#E41C38] shadow-[0_0_30px_rgba(228,28,56,0.3)]"
          : "bg-gradient-to-br from-black/60 to-black/40 border border-white/10 hover:border-[#E41C38]/40"
      }`}
    >
      {/* Glow effect for highlighted card */}
      {highlight && (
        <div className="absolute inset-0 bg-[#E41C38]/5 rounded-2xl blur-xl -z-10" />
      )}

      {/* Badge */}
      {badge && (
        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold bg-[#E41C38] text-white px-3 py-1.5 rounded-full self-start mb-4 shadow-lg">
          <Sparkles className="w-3 h-3" />
          {badge}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {title}
      </h3>

      {/* Pricing */}
      <div className="flex items-baseline gap-2 mb-6">
        {oldPrice && (
          <span className="line-through text-gray-500 text-lg font-medium">
            ${oldPrice}
          </span>
        )}
        <div className="flex items-baseline">
          <span
            className={`text-5xl font-black tracking-tight ${
              highlight ? "text-[#E41C38]" : "text-white"
            }`}
          >
            {price}
          </span>
          <span className="text-gray-400 text-base ml-1">{period}</span>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`h-[2px] w-full mb-6 ${
          highlight
            ? "bg-gradient-to-r from-[#E41C38] via-[#E41C38]/50 to-transparent"
            : "bg-gradient-to-r from-white/20 via-white/10 to-transparent"
        }`}
      />

      {/* Features */}
      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 text-sm leading-relaxed"
          >
            <div
              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                highlight
                  ? "bg-[#E41C38] shadow-[0_0_10px_rgba(228,28,56,0.5)]"
                  : "bg-white/10 border border-[#E41C38]/50"
              }`}
            >
              <Check
                className={`w-3 h-3 ${
                  highlight ? "text-white" : "text-[#E41C38]"
                }`}
              />
            </div>
            <p className="text-gray-200">{feature}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
          highlight
            ? "bg-[#E41C38] text-white shadow-[0_4px_20px_rgba(228,28,56,0.4)] hover:shadow-[0_6px_30px_rgba(228,28,56,0.6)] hover:bg-[#c91830]"
            : "bg-gradient-to-r from-white to-gray-200 text-black hover:from-[#E41C38] hover:to-[#c91830] hover:text-white shadow-lg"
        }`}
      >
        Get Started
      </motion.button>

      {/* Corner accent */}
      {highlight && (
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#E41C38]/20 rounded-bl-full blur-2xl" />
      )}
    </motion.div>
  );
}
