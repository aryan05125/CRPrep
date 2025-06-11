import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-400">
          CRPrep
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-purple-300 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block py-2 border-b border-gray-700 hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
