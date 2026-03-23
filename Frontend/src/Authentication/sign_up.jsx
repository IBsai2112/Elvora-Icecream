import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Use one of your high-quality assets here
import iceHero from "../assets/ice0.jpeg"; 

const SignUp = () => {
  return (
    <div className="h-screen w-full bg-[#d6b7b7] flex items-center justify-center p-4 md:p-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl h-full max-h-[600px] bg-[#e5d9d9] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:row lg:flex-row"
      >
        {/* LEFT SIDE: THE IMAGE */}
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <img 
            src={iceHero} 
            alt="Sign Up Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="flex-1 h-full p-10 md:p-16 flex flex-col justify-center relative">
          <div className="mb-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#5c4033] opacity-60 mb-2">Join Elvora</h2>
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-[#2c1e1a]">
              Experience the delicious!
            </h1>
          </div>

          <form className="space-y-4">
            <div className="group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#5c4033] mb-1 block">Full Name</label>
              <input type="text" placeholder="Sainjal" className="w-full bg-white/40 border border-[#5c4033]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5c4033] transition-all" />
            </div>
            <div className="group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#5c4033] mb-1 block">Email</label>
              <input type="email" placeholder="hello@elvora.in" className="w-full bg-white/40 border border-[#5c4033]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5c4033] transition-all" />
            </div>
            <div className="group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#5c4033] mb-1 block">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-white/40 border border-[#5c4033]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5c4033] transition-all" />
            </div>

            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" id="terms" className="accent-[#5c4033]" />
              <label htmlFor="terms" className="text-[10px] text-[#5c4033] opacity-60">I agree with Terms & Privacy Policy</label>
            </div>

            <button className="w-full bg-[#5c4033] text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-lg active:scale-95">
              Let's Taste it!
            </button>
          </form>

          <p className="mt-8 text-[11px] text-[#5c4033] opacity-60 font-bold uppercase tracking-widest">
            Already have an account? <Link to="/signin" className="text-[#2c1e1a] border-b border-[#2c1e1a] pb-0.5">Sign In</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;