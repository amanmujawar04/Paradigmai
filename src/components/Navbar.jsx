import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      {/* Logo */}
      <div className="text-xl font-bold text-white">❒ ParadigmAI</div>

      {/* Desktop Nav Links */}
      <div className="items-center hidden space-x-6 text-gray-400 md:flex text-md">
        <a href="#" className="transition hover:text-white">Solution</a>
        <a href="#" className="transition hover:text-white">Products</a>
        <a href="#" className="transition hover:text-white">Templates</a>
        <a href="#" className="transition hover:text-white">Careers</a>
        <a href="#" className="transition hover:text-white">Blog</a>
        <a href="#" className="transition hover:text-white">Pricing</a>
      </div>

      {/* Desktop Buttons */}
      <div className="items-center hidden space-x-4 md:flex">
        <button className="text-gray-300 transition hover:text-white">Log in</button>
        <button className="px-4 py-2 font-medium text-white transition border border-gray-300 rounded hover:bg-gray-700">
          Sign up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 z-50 flex flex-col items-start w-full p-6 space-y-4 bg-black border-t border-gray-800 top-16 md:hidden">
          <a href="#" className="block text-gray-300 transition hover:text-white">Solution</a>
          <a href="#" className="block text-gray-300 transition hover:text-white">Products</a>
          <a href="#" className="block text-gray-300 transition hover:text-white">Templates</a>
          <a href="#" className="block text-gray-300 transition hover:text-white">Careers</a>
          <a href="#" className="block text-gray-300 transition hover:text-white">Blog</a>
          <a href="#" className="block text-gray-300 transition hover:text-white">Pricing</a>
          
          <div className="flex flex-col w-full pt-4 space-y-3 border-t border-gray-700">
            <button className="text-left text-gray-300 transition hover:text-white">Log in</button>
            <button className="px-4 py-2 font-medium text-left text-white transition border border-gray-300 rounded hover:bg-gray-700">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;