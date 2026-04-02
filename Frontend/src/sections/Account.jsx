import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountPage = ({ url }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserData = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/user/profile`, {
        headers: { token }
      });

      if (response.data.success) {
        setUserData(response.data.user);
      } else {
        setError(response.data.message);
        // If token is invalid/expired, clear it
        if (response.data.message.toLowerCase().includes("token")) {
           localStorage.removeItem("token");
           navigate("/signin");
        }
      }
    } catch (err) {
      setError("Unable to connect to Elvora servers.");
      console.error("Profile Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, [url, navigate]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const logout = () => {
    // Simple but elegant logout
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  // --- LOADING STATE (SKELETON UI) ---
  if (loading) {
    return (
      <div className="h-screen bg-[#b7b2ad] flex flex-col items-center justify-center space-y-4">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-12 h-12 border-4 border-black/10 border-t-black rounded-full"
        />
        <p className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Synchronizing Profile</p>
      </div>
    );
  }

  // --- ERROR STATE ---
  if (error) {
    return (
      <div className="h-screen bg-[#b7b2ad] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold uppercase mb-4 italic">Something melted...</h2>
        <p className="text-sm opacity-60 mb-8">{error}</p>
        <button onClick={() => window.location.reload()} className="border-b border-black text-[10px] font-black uppercase tracking-widest">Try Again</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#b7b2ad] pt-32 pb-20 px-6 md:px-20 text-black"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* === HEADER === */}
        <header className="mb-12 border-b border-black/10 pb-8 flex justify-between items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-2">Member Dashboard</p>
            <h1 className="text-5xl font-bold uppercase tracking-tighter leading-none">Welcome, {userData?.name}</h1>
          </div>
          <p className="hidden md:block text-[10px] font-bold opacity-30 italic">ELV-MEM-{userData?._id.slice(-6).toUpperCase()}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* === PROFILE DETAILS === */}
          <div className="md:col-span-1 space-y-8">
            <section className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 space-y-4">
              <h2 className="text-xs font-black uppercase tracking-widest opacity-30">Account Details</h2>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-tight">{userData?.name}</p>
                <p className="text-sm opacity-60 font-medium lowercase italic">{userData?.email}</p>
                <p className="text-[10px] opacity-40 mt-4 font-bold tracking-widest uppercase">Verified Elvora Member</p>
              </div>
              
              <button className="text-[10px] uppercase font-black tracking-widest border-b-2 border-black pb-0.5 hover:opacity-50 transition-all pt-2">
                Edit Profile
              </button>
            </section>

            <button 
              onClick={logout}
              className="w-full bg-black text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all border-2 border-black shadow-xl active:scale-95"
            >
              Logout Session
            </button>
          </div>

          {/* === ORDER HISTORY === */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xs font-black uppercase tracking-widest opacity-30">Recent Orders</h2>
                <span className="text-[9px] bg-black/5 px-2 py-1 rounded-full font-bold uppercase">Lifetime: 0</span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/5 border-2 border-dashed border-black/10 rounded-3xl py-20 flex flex-col items-center justify-center text-center px-6"
            >
                <div className="w-12 h-12 bg-black/5 rounded-full mb-4 flex items-center justify-center opacity-20">🍦</div>
                <p className="text-sm italic opacity-40 max-w-[200px]">No orders found yet. Your dessert history is a blank canvas.</p>
                <button 
                    onClick={() => navigate('/flavors')}
                    className="mt-6 text-[10px] font-black uppercase tracking-widest bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
                >
                    Browse Flavors
                </button>
            </motion.div>
          </div>

        </div>

        {/* === QUICK ACTIONS === */}
        <div className="mt-20 pt-10 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group p-8 rounded-3xl bg-white/20 border border-transparent hover:border-black/10 hover:bg-white/40 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest">Saved Addresses</h3>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
            <p className="text-[11px] opacity-50 uppercase font-bold tracking-tighter">Manage your delivery locations.</p>
          </div>

          <div className="group p-8 rounded-3xl bg-white/20 border border-transparent hover:border-black/10 hover:bg-white/40 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest">Payment Methods</h3>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
            <p className="text-[11px] opacity-50 uppercase font-bold tracking-tighter">Securely stored for faster checkout.</p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AccountPage;