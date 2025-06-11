import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Text */}
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">CRPrep</span>. All rights reserved.
        </div>

        {/* Right - Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
