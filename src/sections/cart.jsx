import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sicilian Pistachio",
      description: "Roasted nuts with sea salt",
      price: 12.50,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=200"
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter text-slate-900 mb-10">
          Your Cart
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-slate-100">
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-2xl" />
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-slate-50 rounded-full border border-slate-200 px-2">
                      <button className="p-2 font-bold">-</button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button className="p-2 font-bold">+</button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-xl font-black">${(item.price * item.quantity).toFixed(2)}</span>
                  <button className="text-red-400 text-sm uppercase font-bold">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 h-fit sticky top-32">
            <h3 className="text-2xl font-bold mb-8 italic">Summary</h3>
            <div className="flex justify-between mb-10">
              <span className="opacity-60 uppercase tracking-widest">Total</span>
              <span className="text-4xl font-black">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-pink-500 hover:text-white transition-all">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;