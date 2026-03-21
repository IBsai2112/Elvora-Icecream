import React from 'react';
import { motion } from 'framer-motion';

const Trending = () => {
  return (
    <section className="min-h-screen md:h-screen w-full bg-[#673b2b] flex flex-col md:flex-row overflow-x-hidden relative selection:bg-[#e8d5c4] selection:text-black">
      
      {/* 1. KINETIC TEXT BACKGROUND (TOP ON MOBILE / LEFT ON DESKTOP) */}
      <div className="w-full md:w-3/5 min-h-[50vh] md:h-full relative flex flex-col justify-center p-8 sm:p-12 md:p-16 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <h2 className="text-[#b7b2ad] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.8em] sm:tracking-[1em] mb-4 sm:mb-6">
            Collection 2026 / By Sainjal
          </h2>
          <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black italic leading-[0.85] sm:leading-[0.8] tracking-tighter">
            VELVET <br /> 
            <span className="text-outline-white text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              NOIR.
            </span>
          </h1>
          
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
            <div className="h-[1px] w-16 sm:w-24 bg-white/20"></div>
            <p className="text-[#b7b2ad]/50 text-[10px] uppercase tracking-widest max-w-[250px] leading-relaxed">
              Experience the depth of dark roasted botanicals and silk-pressed minerals.
            </p>
          </div>
        </motion.div>

        {/* Floating Year Tag - Hidden on very small screens to avoid clutter */}
        <div className="hidden sm:block absolute top-10 left-6 sm:left-10 overflow-hidden">
          <motion.span 
            animate={{ y: [20, 0] }}
            className="block text-[10px] font-bold text-white/20 rotate-90 origin-left"
          >
            EST. MMXXVI
          </motion.span>
        </div>
      </div>

      {/* 2. OVERLAPPING IMAGE CARD (BOTTOM ON MOBILE / RIGHT ON DESKTOP) */}
      <div className="w-full md:w-2/5 min-h-[50vh] md:h-full relative flex items-center justify-center p-8 sm:p-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[400px] group"
        >
          {/* Main Product Image */}
          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 bg-[#1a1a1a]">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              src="https://i.pinimg.com/736x/f0/cc/41/f0cc4116ba59e77edcfe03a2abcf5184.jpg" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Velvet Noir" 
            />
          </div>

          {/* Floating Action Badge - Scaled down for mobile */}
          <motion.button 
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.5 }}
            className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-[#e8d5c4] rounded-full flex items-center justify-center p-3 text-center shadow-2xl z-20 group"
          >
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-tighter text-black leading-none group-hover:rotate-12 transition-transform">
              Limited <br /> Summer <br /> Edit 26'
            </span>
          </motion.button>

          {/* Floating Price/Detail Tag */}
          <div className="absolute top-6 -right-2 sm:top-8 sm:-right-4 bg-white py-1.5 px-4 sm:py-2 sm:px-6 rounded-full shadow-xl">
             <span className="text-black font-black text-[10px] sm:text-xs tracking-widest italic">PRE-ORDER NOW</span>
          </div>
        </motion.div>
      </div>

      {/* 3. UTILITY FOOTER */}
      <div className="md:absolute bottom-6 left-0 w-full px-8 sm:px-12 flex justify-between items-center py-8 md:py-0">
        <div className="hidden md:block">
           <p className="text-[9px] text-white/30 font-bold uppercase tracking-[0.5em]">01 / 04 Selected</p>
        </div>
        <div className="flex gap-6">
          {['IG', 'TW', 'FB'].map((link) => (
            <a key={link} href="#" className="text-white/40 text-[10px] font-bold hover:text-[#e8d5c4] transition-colors tracking-widest">{link}</a>
          ))}
        </div>
      </div>

      {/* Global Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default Trending;