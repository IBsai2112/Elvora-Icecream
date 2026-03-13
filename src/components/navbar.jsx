import React, { useState } from "react";
import { Link } from "react-router-dom"; // 1. ADD THIS IMPORT

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 text-white">
      <div className="flex justify-between items-center px-8 py-5">
        
        {/* Logo - Wrap in Link */}
        <Link to="/" className="text-2xl font-bold tracking-widest cursor-pointer">
          ELVORA
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase">
          <li className="cursor-pointer hover:opacity-50 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:opacity-50 transition">
            <Link to="/Flavors">Flavors</Link>
          </li>

          {/* 2. CHANGE THIS TO A LINK */}
          <li className="cursor-pointer hover:text-black hover:font-bold transition">
            <Link to="/cart">Cart</Link>
          </li>
          
          <li className="cursor-pointer hover:opacity-50 transition">
            <Link to="/About">About</Link>
          </li>
          <li className="cursor-pointer hover:opacity-50 transition">
            <Link to="/Account">Account</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 backdrop-blur-md bg-black/50">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <span>Flavors</span>
          {/* 3. ADD LINK FOR MOBILE TOO */}
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          <span>About</span>
          <span>Contact</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;