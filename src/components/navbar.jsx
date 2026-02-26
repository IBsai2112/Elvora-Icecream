import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 text-white">

      <div className="flex justify-between items-center px-8 py-5">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest">
          ELVORA
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase">
          <li className="cursor-pointer hover:opacity-70 transition">Home</li>
          <li className="cursor-pointer hover:opacity-70 transition">Flavors</li>
          <li className="cursor-pointer hover:opacity-70 transition">Cart</li>
          <li className="cursor-pointer hover:opacity-70 transition">About</li>
          <li className="cursor-pointer hover:opacity-70 transition">Account</li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 backdrop-blur-md bg-black/50">
          <span>Home</span>
          <span>Flavors</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      )}

    </nav>
  );
};

export default Navbar;