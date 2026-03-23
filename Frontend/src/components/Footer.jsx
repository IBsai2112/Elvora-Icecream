import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0f0f0f] border-t border-white/5 pt-12 pb-8 px-6 md:px-16 overflow-hidden">
      {/* 1. SCROLLING TICKER (Adds Motion) */}
      <div className="flex whitespace-nowrap mb-12 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 text-[6rem] font-black italic tracking-tighter text-white uppercase leading-none"
        >
          <span>Small-Batch Churn</span>
          <span>Botanical Infusions</span>
          <span>Limited 2026</span>
          <span>Sainjal Atelier</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        {/* 2. BRANDING & NEWSLETTER */}
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-white text-[10px] font-black uppercase tracking-[0.5em]">The Journal</h3>
          <div className="relative group max-w-sm">
            <input 
              type="text" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-white/20 py-4 text-white font-light focus:outline-none focus:border-[#e8d5c4] transition-colors placeholder:text-white/20 uppercase text-[10px] tracking-widest"
            />
            <button className="absolute right-0 bottom-4 text-white/40 hover:text-[#e8d5c4] transition-colors text-[10px] font-bold uppercase tracking-widest">
              Join
            </button>
          </div>
        </div>

        {/* 3. NAVIGATION (MINIMAL) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <FooterLink label="Collection" />
            <FooterLink label="Our Story" />
            <FooterLink label="Sustainability" />
          </div>
          <div className="space-y-2">
            <FooterLink label="Instagram" />
            <FooterLink label="Archives" />
            <FooterLink label="Contact" />
          </div>
        </div>

        {/* 4. COPYRIGHT & LOGO */}
        <div className="md:col-span-3 text-right">
          <div className="inline-block border border-white/10 rounded-full px-4 py-2 mb-4">
            <span className="text-[10px] font-bold text-[#e8d5c4] tracking-widest uppercase">
              Sainjal / 2026
            </span>
          </div>
          <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
            All rights reserved. Designed for the <br /> modern connoisseur.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for hover effect
const FooterLink = ({ label }) => (
  <a 
    href="#" 
    className="block text-white/40 text-[10px] font-black uppercase tracking-widest hover:text-white hover:translate-x-1 transition-all duration-300"
  >
    {label}
  </a>
);

export default Footer;