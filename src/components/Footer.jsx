import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Left - Text */}
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} CRPrep. All rights reserved.
        </div>

        {/* Right - Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
