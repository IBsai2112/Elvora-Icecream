import React from "react";
import { motion } from "framer-motion";

const AccountPage = () => {
  // Mock data for a basic account view
  const user = {
    name: "Sainjal",
    email: "sai21@elvora.in",
    memberSince: "January 2026",
  };

  const recentOrders = [
    { id: "#ELV-1024", date: "Mar 12, 2026", status: "Delivered", total: "₹560.00" },
    { id: "#ELV-0988", date: "Feb 28, 2026", status: "Delivered", total: "₹1,240.00" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#b7b2ad] pt-32 pb-20 px-6 md:px-20 text-black"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* === HEADER === */}
        <header className="mb-12 border-b border-black/10 pb-8">
          <p className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-2">Member Dashboard</p>
          <h1 className="text-5xl font-bold uppercase tracking-tighter">Welcome, {user.name}</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* === PROFILE DETAILS === */}
          <div className="md:col-span-1 space-y-8">
            <section className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-widest opacity-30">Account Details</h2>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase">{user.name}</p>
                <p className="text-sm opacity-60 font-medium">{user.email}</p>
                <p className="text-[10px] opacity-40 mt-4 italic">Member since {user.memberSince}</p>
              </div>
              
              <button className="text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-all">
                Edit Profile
              </button>
            </section>

            <section className="pt-8 border-t border-black/5">
              <button className="bg-black text-white px-8 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all border border-black">
                Logout
              </button>
            </section>
          </div>

          {/* === ORDER HISTORY === */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xs font-black uppercase tracking-widest opacity-30">Recent Orders</h2>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div 
                  key={order.id} 
                  className="bg-white/20 p-6 rounded-xl border border-black/5 flex justify-between items-center group hover:bg-white/40 transition-all"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-black tracking-widest opacity-40">{order.id}</p>
                    <p className="text-sm font-bold uppercase">{order.date}</p>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <p className="text-sm font-black">{order.total}</p>
                    <p className="text-[9px] uppercase tracking-widest text-green-800 font-bold">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>

            {recentOrders.length === 0 && (
              <p className="text-sm italic opacity-40">No orders found yet. Time for some ice cream?</p>
            )}
          </div>

        </div>

        {/* === EXTRA OPTIONS === */}
        <div className="mt-20 pt-10 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-black/5 hover:bg-black/10 transition-all cursor-pointer">
            <h3 className="text-sm font-black uppercase tracking-widest mb-2">Saved Addresses</h3>
            <p className="text-xs opacity-50">Manage your delivery locations.</p>
          </div>
          <div className="p-8 rounded-2xl bg-black/5 hover:bg-black/10 transition-all cursor-pointer">
            <h3 className="text-sm font-black uppercase tracking-widest mb-2">Payment Methods</h3>
            <p className="text-xs opacity-50">Securely stored for faster checkout.</p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AccountPage;