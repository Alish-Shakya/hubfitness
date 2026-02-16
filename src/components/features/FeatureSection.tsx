"use client";

import { motion } from "framer-motion";
import MainFeatureCard from "./MainFeature";
import AdditionalFeatureCard from "./AdditionalFeature";
import {
  mainFeaturesData,
  additionalFeaturesData,
} from "../../data/FeaturesData";

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
    <section className="relative py-28 md:py-36 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-20 w-96 h-96 bg-orange-500 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-[#E41C38] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div>
              {/* small top label */}
              <h2 className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-3 uppercase">
                Everything You Need
              </h2>

              {/* main heading */}
              <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white mb-3">
                World-Class <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Amenities
                </span>
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl">
                More than just a gym - a complete wellness destination with
                cutting-edge facilities
              </p>
            </div>
          </motion.div>

          {/* Main Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-4"
          >
            {mainFeaturesData.map((feature, index) => (
              <MainFeatureCard key={index} {...feature} />
            ))}
          </motion.div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28 md:mt-36 mb-12"
          >
            <div>
              {/* small top label */}
              <h2 className="text-[#E41C38] font-black tracking-[0.3em] text-xs mb-3 uppercase">
                Plus Even More
              </h2>

              {/* main heading */}
              <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-white mb-3">
                Exclusive
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Perk
                </span>
              </h3>
            </div>
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
        </div>
      </div>
    </section>
  );
}
