import React from "react";
import { motion } from "framer-motion";
// The Fix: Go up to src (..), then into assets folder (/assets), then find file (/assets.js)
import { flavorData } from "../assets/assets.js";

const Flavors = ({ addToCart }) => {
  // Safety check to ensure data loaded
  const activeCat = flavorData ? flavorData[0] : null;

  if (!activeCat) {
    return (
      <div className="min-h-screen bg-[#b7b2ad] flex items-center justify-center">
        <p className="text-black uppercase tracking-[0.5em] animate-pulse">Loading Collection...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#b7b2ad] pt-32 pb-20 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Collection Title */}
        <div className="flex justify-center mb-16 border-b border-black/10 pb-4">
          <button className="text-[10px] uppercase tracking-[0.6em] text-black font-bold pointer-events-none">
            {activeCat.label}
          </button>
        </div>

        {/* 2-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {activeCat.products.map((product) => (
            <motion.div 
              key={product.id} 
              whileHover={{ y: -5 }}
              className="flex items-center gap-6 border-b border-black/10 pb-8 group"
            >
              {/* Product Image Container */}
              <div className="w-32 h-32 overflow-hidden rounded-xl bg-black/5 flex-shrink-0 shadow-sm border border-black/5">
                <img 
                  src={product.img} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                  alt={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow space-y-2 text-black/80">
                <h3 className="text-lg font-bold uppercase tracking-tight italic">
                  {product.name}
                </h3>
                <p className="text-black/50 text-xs font-light tracking-wide">
                  Signature Selection — ${product.price}.00
                </p>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="text-[9px] uppercase tracking-[0.2em] bg-black text-white px-6 py-2.5 mt-4 hover:bg-white hover:text-black transition-all border border-black active:scale-95 shadow-lg shadow-black/10"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Flavors;