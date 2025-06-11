import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCode, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  // (Optional) Dark mode toggle logic (can be improved later)
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <FaCode className="text-purple-500" />
          CRPrep
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
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

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
