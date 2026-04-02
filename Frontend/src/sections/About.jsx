import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#b7b2ad] pt-40 pb-24 px-10 md:px-20 text-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* === HERO SECTION === */}
        <header className="mb-32 border-b border-black/10 pb-10">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-extralight tracking-tighter italic leading-none"
          >
            Elvora.
          </motion.h1>
          <p className="mt-6 text-[10px] uppercase tracking-[0.8em] opacity-40">
            Simple • Honest • Pure
          </p>
        </header>

        {/* === BRAND STORY GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-32">
          <div className="md:col-span-4">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold opacity-30">Our Philosophy</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl leading-tight font-light italic mb-8">
              "Indulgence should be a calm, sensory experience. We focus on the churn and the soul of the flavor."
            </p>
            <p className="text-base leading-relaxed opacity-70 max-w-lg">
              Welcome to a space where flavor meets tranquility. We source every ingredient with intention, ensuring every scoop brings a moment of peace to your day.
            </p>
          </div>
        </div>

        {/* === THE CREATOR GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-16 border-t border-black/10">
          <div className="md:col-span-4">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold opacity-30">The Architect</h2>
          </div>
          <div className="md:col-span-8 flex flex-col md:flex-row justify-between items-baseline gap-8">
            <div>
              <h3 className="text-5xl font-light tracking-tighter uppercase mb-4">Sainjal</h3>
              <p className="text-sm leading-relaxed opacity-70 max-w-sm">
                The intersection of precise web development and the artisanal craft of luxury ice cream. Hand-coded and hand-crafted.
              </p>
            </div>
            <div className="text-[9px] uppercase tracking-[0.5em] opacity-30 self-end">
              Est. 2026
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;