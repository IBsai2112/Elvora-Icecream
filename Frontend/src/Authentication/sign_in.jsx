import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import iceHero from "../assets/ice3.jpeg"; // Using a different asset for variety

const SignIn = () => {
  return (
    <div className="h-screen w-full bg-[#d6b7b7] flex items-center justify-center p-4 md:p-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl h-full max-h-[600px] bg-[#e5d9d9] rounded-[2rem] overflow-hidden shadow-2xl flex lg:flex-row-reverse"
      >
        {/* RIGHT SIDE: THE IMAGE (Flipped for Sign In) */}
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <img src={iceHero} alt="Login Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* LEFT SIDE: THE FORM */}
        <div className="flex-1 h-full p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#5c4033] opacity-60 mb-2">Welcome Back</h2>
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-[#2c1e1a]">
              Your Scoop is Waiting.
            </h1>
          </div>

          <form className="space-y-6">
            <div className="group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#5c4033] mb-1 block">Email</label>
              <input type="email" placeholder="sainjal@elvora.in" className="w-full bg-white/40 border border-[#5c4033]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5c4033] transition-all" />
            </div>
            <div className="group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#5c4033] mb-1 block">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-white/40 border border-[#5c4033]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5c4033] transition-all" />
            </div>

            <button className="w-full bg-[#5c4033] text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-lg active:scale-95">
              Sign In
            </button>
          </form>

          <p className="mt-10 text-[11px] text-[#5c4033] opacity-60 font-bold uppercase tracking-widest">
            Need an account? <Link to="/signup" className="text-[#2c1e1a] border-b border-[#2c1e1a] pb-0.5">Join the Club</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;