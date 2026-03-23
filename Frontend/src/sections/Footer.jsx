import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="h-[50vh] w-full bg-[#dfd3c3] px-10 py-10 md:px-20 flex flex-col justify-between overflow-hidden relative border-t border-black/5">
      
      {/* 1. TOP: COMPACT NAVIGATION GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        <div className="space-y-4">
          <h4 className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">Menu</h4>
          <div className="flex flex-col space-y-2">
            {["Home", "Flavors", "About", "Account"].map((item) => (
              <button key={item} className="text-xs font-bold uppercase tracking-tighter italic hover:opacity-50 transition-all text-left">
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">Socials</h4>
          <div className="flex flex-col space-y-2">
            {["Instagram", "LinkedIn", "Pinterest"].map((item) => (
              <button key={item} className="text-[10px] font-medium uppercase tracking-widest hover:opacity-50 transition-all text-left">
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 col-span-2 md:col-span-2 md:text-right">
          <h4 className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">The Lab</h4>
          <p className="text-xs font-medium leading-relaxed opacity-60">
            Pune, Maharashtra • sai21@elvora.in
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 italic underline underline-offset-4 cursor-pointer">
            View Story
          </p>
        </div>
      </div>

      {/* 2. MIDDLE: THE WATERMARK (ADJUSTED SIZE) */}
      <div className="relative text-center pointer-events-none -my-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[14vw] font-black italic uppercase tracking-tighter leading-none text-black/[0.04] select-none"
        >
          ELVORA
        </motion.h1>
      </div>

      {/* 3. BOTTOM: THE CREDIT BAR */}
      <div className="flex justify-between items-end border-t border-black/10 pt-6">
        <div className="space-y-1">
          <p className="text-[8px] font-black uppercase tracking-[0.6em] text-black/30">
            Designed & Engineered By
          </p>
          <h2 className="text-2xl font-black italic tracking-tight uppercase text-black">
            Sainjal
          </h2>
        </div>

        <div className="text-right">
          <p className="text-[9px] uppercase tracking-[0.8em] font-bold opacity-30">
            © 2026 ELVORA
          </p>
        </div>
      </div>

      {/* Decorative Line Animation */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-1 bg-black/5"
      />
    </footer>
  );
};

export default Footer;