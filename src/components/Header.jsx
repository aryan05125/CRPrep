import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCode, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <FaCode className="text-purple-500" />
          CRPrep
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-purple-400 transition duration-300 ${
                  isActive ? "text-purple-500 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl transition"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] py-4 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm hover:text-purple-400 transition ${
                    isActive ? "text-purple-500 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
