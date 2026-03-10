import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#b7b2ad] pt-40 pb-20 px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black italic tracking-tighter mb-12 text-black/90 uppercase text-center md:text-left">
          Your Bag
        </h1>
        
        <AnimatePresence mode="popLayout">
          {cart.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20 border-2 border-dashed border-black/10 rounded-3xl"
            >
              <p className="text-black/40 uppercase tracking-widest text-xs">
                Your luxury selection is empty.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <motion.div 
                  key={item.cartId} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex justify-between items-center border-b border-black/10 pb-6"
                >
                  <div className="flex items-center gap-6">
                    <img src={item.img} className="w-20 h-20 object-cover rounded-lg mix-blend-multiply" alt={item.name} />
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-widest text-black/80">{item.name}</h2>
                      <p className="text-[10px] text-black/40 uppercase tracking-tighter">Premium Grade</p>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[9px] text-red-900 font-bold uppercase mt-3 hover:underline tracking-widest"
                      >
                        [ Remove Item ]
                      </button>
                    </div>
                  </div>
                  <span className="font-bold text-lg text-black/80">${item.price}.00</span>
                </motion.div>
              ))}

              {/* Order Summary Table */}
              <div className="mt-16 pt-8 border-t-2 border-black/20 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
                <div>
                  <p className="text-black/40 uppercase text-[10px] tracking-[0.4em] mb-2 text-center md:text-left">
                    Final Amount
                  </p>
                  <h2 className="text-6xl md:text-7xl font-light text-black/90">${total}.00</h2>
                </div>
                <button className="w-full md:w-auto bg-black text-white px-16 py-6 font-black uppercase text-xs tracking-[0.4em] hover:bg-white hover:text-black transition-all border border-black shadow-2xl active:scale-95">
                  Confirm Checkout
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CartPage;