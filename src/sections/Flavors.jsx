import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Flavors = ({ addToCart }) => {
  // Luxury Data - Easy to add more items here
  const flavorCategories = [
    {
      id: "scoops",
      label: "Scoop Collection",
      products: [
        { id: 1, name: "Velvet Chocolate", price: 12, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400" },
        { id: 2, name: "Sicilian Pistachio", price: 14, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=400" },
        { id: 3, name: "Wild Berry Swirl", price: 11, img: "https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=400" },
        { id: 4, name: "Madagascar Gold", price: 13, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=400" },
      ]
    }
  ];

  const [activeCat, setActiveCat] = useState(flavorCategories[0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#b7b2ad] pt-32 pb-20 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Horizontal Menu */}
        <div className="flex justify-center gap-10 mb-16 border-b border-black/10 pb-4">
          {flavorCategories.map((cat) => (
            <button 
              key={cat.id} 
              className="text-[10px] uppercase tracking-[0.5em] text-black font-bold"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Product Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {activeCat.products.map((product) => (
            <motion.div 
              key={product.id} 
              whileHover={{ y: -5 }}
              className="flex items-center gap-6 border-b border-black/10 pb-8 group"
            >
              {/* Product Image */}
              <div className="w-32 h-32 overflow-hidden rounded-xl bg-black/5 flex-shrink-0 shadow-sm">
                <img 
                  src={product.img} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
                  alt={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow space-y-2">
                <h3 className="text-lg font-bold uppercase tracking-tight text-black/80">
                  {product.name}
                </h3>
                <p className="text-black/50 text-sm font-light italic italic">
                  Premium Selection — ${product.price}.00
                </p>
                <button 
                  onClick={() => addToCart(product)}
                  className="text-[9px] uppercase tracking-widest bg-black text-white px-6 py-2.5 mt-2 hover:bg-white hover:text-black transition-all border border-black active:scale-95"
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