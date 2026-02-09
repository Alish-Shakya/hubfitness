"use client";

import { motion } from "framer-motion";
import ResourceCard from "./ResourceCard";
import { resourcesData } from "./ResourceData";

export default function ResourcesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">
            Learn & Grow
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            Gym Resources
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Access high-quality guides, videos, and workout plans to reach your
            goals faster.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resourcesData.map((resource, index) => (
            <ResourceCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
