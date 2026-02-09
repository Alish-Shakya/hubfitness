"use client";

import { motion } from "framer-motion";
import MainFeatureCard from "./MainFeature";
import AdditionalFeatureCard from "./AdditionalFeature";
import { mainFeaturesData, additionalFeaturesData } from "./FeaturesData";

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#050505] text-white py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-orange-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-lime-400 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">
            Everything You Need
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            World-Class
            <br />
            Amenities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            More than just a gym - a complete wellness destination with
            cutting-edge facilities
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {mainFeaturesData.map((feature, index) => (
            <MainFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center">
            Plus More Amazing Perks
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {additionalFeaturesData.map((feature, index) => (
            <AdditionalFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to experience the difference?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-black text-sm uppercase tracking-widest px-12 py-4 rounded-full shadow-2xl shadow-orange-500/50 transition-all duration-300"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
