import React from 'react';
import { motion } from 'framer-motion';

const Trending = () => {
  return (
    <section className="h-screen w-full bg-[#0f0f0f] flex flex-col md:flex-row overflow-hidden relative selection:bg-[#e8d5c4] selection:text-black">
      
      {/* 1. KINETIC TEXT BACKGROUND (LEFT) */}
      <div className="w-full md:w-3/5 h-1/2 md:h-full relative flex flex-col justify-center p-8 md:p-16 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <h2 className="text-[#b7b2ad] text-[10px] font-black uppercase tracking-[1em] mb-4">
            Collection 2026 / By Sainjal
          </h2>
          <h1 className="text-white text-7xl md:text-[10rem] font-black italic leading-[0.8] tracking-tighter">
            VELVET <br /> 
            <span className="text-outline-white text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              NOIR.
            </span>
          </h1>
          
          <div className="mt-8 flex gap-8 items-center">
            <div className="h-[1px] w-24 bg-white/20"></div>
            <p className="text-[#b7b2ad]/50 text-[10px] uppercase tracking-widest max-w-[200px] leading-relaxed">
              Experience the depth of dark roasted botanicals and silk-pressed minerals.
            </p>
          </div>
        </motion.div>

        {/* Floating Year Tag */}
        <div className="absolute top-10 left-10 overflow-hidden">
          <motion.span 
            animate={{ y: [20, 0] }}
            className="block text-[10px] font-bold text-white/20 rotate-90 origin-left"
          >
            EST. MMXXVI
          </motion.span>
        </div>
      </div>

      {/* 2. OVERLAPPING IMAGE CARD (RIGHT) */}
      <div className="w-full md:w-2/5 h-1/2 md:h-full relative flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] max-w-[400px] group"
        >
          {/* Main Product Image with Masking Effect */}
          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 2 }}
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Velvet Noir" 
            />
          </div>

          {/* Floating Action Badge */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#e8d5c4] rounded-full flex items-center justify-center p-4 text-center shadow-2xl z-20 group"
          >
            <span className="text-[10px] font-black uppercase tracking-tighter text-black leading-none group-hover:rotate-12 transition-transform">
              Limited <br /> Summer <br /> Edit 26'
            </span>
          </motion.button>

          {/* Floating Price/Detail Tag */}
          <div className="absolute top-8 -right-4 bg-white py-2 px-6 rounded-full shadow-xl">
             <span className="text-black font-black text-xs tracking-widest italic">PRE-ORDER NOW</span>
          </div>
        </motion.div>
      </div>

      {/* 3. SUBTLE UTILITY FOOTER */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-10 flex justify-between items-end pointer-events-none">
        <div className="hidden md:block">
           <p className="text-[9px] text-white/30 font-bold uppercase tracking-[0.5em]">01 / 04 Selected</p>
        </div>
        <div className="flex gap-4 pointer-events-auto">
          {['IG', 'TW', 'FB'].map((link) => (
            <a key={link} href="#" className="text-white/40 text-[10px] font-bold hover:text-[#e8d5c4] transition-colors">{link}</a>
          ))}
        </div>
      </div>

      {/* Global Grain Overlay for Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default Trending;