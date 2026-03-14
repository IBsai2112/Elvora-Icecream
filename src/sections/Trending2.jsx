import React from 'react';
import { motion } from 'framer-motion';

const Trending2 = () => {
  return (
    <section className="h-screen w-full bg-[#dfd3c3] flex items-center justify-center relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

      <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-black/30 mb-4">Our Heritage</h2>
            <h3 className="text-7xl font-black italic uppercase tracking-tighter text-[#2c1e1a] leading-[0.85]">Artisan <br /> Churning.</h3>
          </div>
          
          <p className="text-sm text-[#2c1e1a]/70 leading-relaxed font-medium max-w-sm">
            By churning at lower speeds, we achieve a density and richness that machines simply can't replicate. Every batch is a tribute to slow craft.
          </p>
          
          <div className="flex gap-12 pt-4">
            <div className="space-y-1">
              <p className="text-3xl font-black italic text-[#2c1e1a]">100%</p>
              <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">Organic Dairy</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black italic text-[#2c1e1a]">Slow</p>
              <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">Batch Churn</p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE VISUAL */}
        <motion.div 
          initial={{ rotate: 2, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-[12px] border-white/40 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1570197788417-0e0587a19391?auto=format&fit=crop&w=800" 
              className="w-full h-full object-cover" 
              alt="Craft" 
            />
          </div>
          
          {/* SIGNATURE BADGE */}
          <motion.div 
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-black text-white p-8 rounded-full shadow-2xl"
          >
            <p className="text-[10px] font-black uppercase tracking-widest leading-tight text-center">
              best<br /> <span className="opacity-50">seller</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trending2;