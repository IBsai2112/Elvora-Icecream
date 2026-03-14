import React from 'react';
import { motion } from 'framer-motion';

const Trending = () => {
  return (
    <section className="h-screen w-full bg-[#b7b2ad] p-6 md:p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-black/40">Collection 2026</h2>
        <span className="text-[10px] font-bold uppercase italic text-black">By Sainjal</span>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[80vh]">
        {/* LEFT: TRENDING HERO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 relative rounded-[3rem] overflow-hidden group shadow-2xl border border-black/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
            alt="Trending" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <span className="text-[9px] uppercase tracking-[0.5em] bg-[#b7b2ad] text-black px-4 py-2 rounded-full mb-4 inline-block font-black">Best Seller</span>
            <h3 className="text-6xl font-black italic uppercase tracking-tighter leading-none text-white">Velvet Noir.</h3>
          </div>
        </motion.div>

        {/* RIGHT: SUMMER EDIT */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-[#e8d5c4] rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden shadow-xl border border-black/5"
        >
          <div className="relative z-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-orange-900/40 mb-4">Limited Edition</h4>
            <h2 className="text-5xl font-black italic tracking-tighter text-[#5c4033] leading-none">THE <br /> SUMMER <br /> EDIT.</h2>
          </div>

          <div className="relative z-10 space-y-4">
            <p className="text-[10px] font-bold text-[#5c4033]/60 uppercase tracking-[0.3em]">Mango • Lychee • Lime</p>
            <button className="w-full bg-[#5c4033] text-[#e8d5c4] py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg">
              Taste the Sun
            </button>
          </div>
          
          <h2 className="absolute -bottom-10 -right-10 text-[12rem] font-black opacity-[0.03] pointer-events-none">HOT</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Trending;