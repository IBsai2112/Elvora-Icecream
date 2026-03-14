import React from 'react';
import { motion } from 'framer-motion';

const Trending = () => {
  return (
    <section className="w-full bg-[#b7b2ad]">
      
      {/* --- PAGE 2: TRENDING & SUMMER DASHBOARD --- */}
      <div className="h-screen w-full p-6 md:p-10 flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[10px] font-black uppercase tracking-[0.8em] opacity-40 text-black">Collection 2026</h2>
          <span className="text-[10px] font-bold uppercase italic text-black">By Sainjal</span>
        </div>

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[80vh]">
          {/* LEFT: TRENDING HERO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative rounded-[3rem] overflow-hidden group shadow-2xl border-4 border-white/30"
          >
            <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="Trending" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[9px] uppercase tracking-[0.5em] bg-black text-white px-4 py-2 rounded-full mb-4 inline-block font-bold">Trending Now</motion.span>
              <h3 className="text-6xl font-black italic uppercase tracking-tighter leading-none text-black">Velvet Noir.</h3>
            </div>
          </motion.div>

          {/* RIGHT: IMPROVISED SUMMER SECTION (Light Palette) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#fdf5e6] rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden border-4 border-white/50"
          >
            {/* Soft Marquee Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none">
                <motion.h2 
                  animate={{ x: [0, -1000] }} 
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="text-9xl font-black uppercase italic text-orange-900"
                >
                  SUMMER SUMMER SUMMER SUMMER
                </motion.h2>
            </div>

            <div className="relative z-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-orange-900/40 mb-4">Limited Edition</h4>
              <h2 className="text-5xl font-black italic tracking-tighter text-orange-900 leading-none">THE <br /> SUMMER <br /> EDIT.</h2>
            </div>

            <div className="relative z-10 flex items-end justify-between">
              <div className="space-y-4">
                <p className="text-xs font-bold text-orange-900/60 uppercase tracking-widest">Mango • Lychee • Lime</p>
                <button className="bg-white text-orange-900 px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl hover:bg-orange-900 hover:text-white transition-all">Get it Chilled</button>
              </div>
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-2 border-dashed border-orange-900/20 rounded-full flex items-center justify-center text-[10px] font-bold text-orange-900/30"
              >
                FRESH
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- PAGE 3: THE CRAFT SECTION (Creamy & Light) --- */}
      <div className="h-screen w-full bg-[#f4f1ee] flex items-center justify-center relative overflow-hidden">
        {/* Soft Glowing Orbs (Pastel Colors) */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-black/30">Our Process</h2>
                <h3 className="text-7xl font-black italic uppercase tracking-tighter text-black leading-[0.8]">Hand <br /> Churned <br /> Quality.</h3>
                <p className="text-sm text-black/60 leading-relaxed font-medium max-w-sm">
                    We don't believe in machines doing a human's job. Every batch is churned slowly to ensure a texture that melts perfectly.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                    <p className="text-2xl font-black italic">0%</p>
                    <p className="text-[8px] uppercase tracking-widest opacity-60">Additives</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                    <p className="text-2xl font-black italic">100%</p>
                    <p className="text-[8px] uppercase tracking-widest opacity-60">Real Milk</p>
                  </div>
                </div>
            </motion.div>

            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               className="relative"
            >
                {/* Clean Artisan Image */}
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1570197788417-0e0587a19391?auto=format&fit=crop&w=800" className="w-full h-full object-cover" alt="Process" />
                </div>
                {/* Floating Soft Badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }} 
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white text-black py-6 px-8 rounded-full shadow-xl border border-black/5"
                >
                    <p className="text-[9px] font-black uppercase leading-tight tracking-widest text-center">Pure <br /> Craft</p>
                </motion.div>
            </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Trending;