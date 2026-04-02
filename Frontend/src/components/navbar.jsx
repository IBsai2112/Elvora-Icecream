import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu helper
  const closeMenu = () => setMenuOpen(false);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 py-3 shadow-lg" : "bg-transparent py-5"
      } text-white`}
    >
      <div className="flex justify-between items-center px-8">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-widest hover:opacity-80 transition"
          onClick={closeMenu}
        >
          ELVORA
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase items-center tracking-wider">
          <li>
            <Link to="/" className="hover:opacity-50 transition-opacity">Home</Link>
          </li>
          <li>
            <Link to="/Flavors" className="hover:opacity-50 transition-opacity">Flavors</Link>
          </li>
          <li>
            <Link to="/About" className="hover:opacity-50 transition-opacity">About</Link>
          </li>
          <li>
            <Link to="/Account" className="hover:opacity-50 transition-opacity">Account</Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Cart
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`absolute top-full left-0 w-full flex flex-col items-center gap-6 py-10 backdrop-blur-xl bg-black/95 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link to="/" onClick={closeMenu} className="text-lg uppercase tracking-widest">Home</Link>
        <Link to="/Flavors" onClick={closeMenu} className="text-lg uppercase tracking-widest">Flavors</Link>
        <Link to="/About" onClick={closeMenu} className="text-lg uppercase tracking-widest">About</Link>
        <Link to="/Account" onClick={closeMenu} className="text-lg uppercase tracking-widest">Account</Link>
        <Link 
          to="/cart" 
          onClick={closeMenu} 
          className="text-lg uppercase tracking-widest text-yellow-400 border border-yellow-400 px-8 py-2 rounded-full"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;