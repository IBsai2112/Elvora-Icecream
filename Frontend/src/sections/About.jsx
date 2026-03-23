import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#b7b2ad] pt-48 pb-32 px-8 text-[#2a2a2a]"
    >
      <div className="max-w-2xl mx-auto text-center">
        
        {/* === HEADER === */}
        <header className="mb-20 space-y-4">
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.6em] font-black opacity-40"
          >
            The Essence of Elvora
          </motion.p>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl font-light tracking-tighter italic text-black"
          >
            Simple. Honest. Pure.
          </motion.h1>
        </header>

        {/* === BRAND STORY === */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-12 mb-24"
        >
          <div className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-black opacity-30">Our Story</h2>
            <p className="text-xl leading-relaxed font-light text-black/90 italic">
              "We believe that the best things in life are often the simplest. At Elvora, we don't hide behind complex additives. We focus on the cream, the churn, and the soul of the flavor."
            </p>
            <p className="text-sm leading-relaxed opacity-70 font-medium max-w-lg mx-auto">
              Welcome to a space where flavor meets tranquility. Elvora is a premium ice cream brand built on the philosophy that indulgence should be a calm, sensory experience. We source every ingredient with intention, ensuring that every scoop brings a moment of peace to your day.
            </p>
          </div>
        </motion.section>

        {/* === CREATOR SECTION === */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-16 border-t border-black/10"
        >
          <div className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-black opacity-30">The Architect</h2>
            <h3 className="text-4xl font-black tracking-tighter uppercase italic text-black">Sainjal</h3>
            <p className="text-sm leading-relaxed opacity-70 font-medium max-w-lg mx-auto">
              Elvora is a personal project by Sainjal. It is the intersection of two worlds: the precise logic of modern web development and the warm, artisanal craft of luxury ice cream. 
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              Hand-coded and hand-crafted with heart.
            </p>
          </div>
        </motion.section>

        {/* === DARK FOOTER NOTE === */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }} 
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-32 pt-8 border-t border-black/5"
        >
          <p className="text-[10px] uppercase tracking-[1em] text-black font-black">
            Elvora • 2026
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default AboutPage;