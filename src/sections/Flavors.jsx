import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flavorData } from "../assets/assets.js";

const Flavors = ({ addToCart }) => {
  // Set the first category as default
  const [activeCategory, setActiveCategory] = useState(flavorData[0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#b7b2ad] pt-32 pb-20 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* LUXURY CATEGORY NAV */}
        <div className="flex justify-center gap-6 md:gap-12 mb-20 border-b border-black/10 pb-6 overflow-x-auto no-scrollbar">
          {flavorData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-300 relative pb-2 whitespace-nowrap ${
                activeCategory.id === category.id 
                ? "text-black font-black" 
                : "text-black/30 hover:text-black"
              }`}
            >
              {category.label}
              {activeCategory.id === category.id && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black" 
                />
              )}
            </button>
          ))}
        </div>

        {/* 2-COLUMN PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <AnimatePresence mode="wait">
            {activeCategory.products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-6 border-b border-black/5 pb-8 group"
              >
                {/* Image Container */}
                <div className="w-32 h-32 overflow-hidden rounded-2xl bg-black/5 flex-shrink-0 shadow-sm border border-black/5">
                  <img 
                    src={product.img} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                    alt={product.name}
                  />
                </div>

                {/* Details */}
                <div className="flex-grow space-y-2 text-black/80">
                  <h3 className="text-lg font-bold uppercase tracking-tight italic">
                    {product.name}
                  </h3>
                  <p className="text-black/50 text-xs font-light tracking-wide">
                    Hand-crafted Premium — Rs.{product.price}.00
                  </p>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="text-[9px] uppercase tracking-[0.2em] bg-black text-white px-6 py-2.5 mt-4 hover:bg-white hover:text-black transition-all border border-black active:scale-95 shadow-lg shadow-black/10"
                  >
                    Add to Bag
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Flavors;