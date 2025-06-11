import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4 sm:px-8">
      <div className="text-center space-y-6 max-w-2xl">

        {/* Animated Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse drop-shadow-md">
          Crack Your IT Interview with CRPrep 🚀
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          Master all technical categories – frontend, backend, devops, data structures,
          and more with curated questions, roadmaps & resources.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-xl hover:scale-105"
          >
            Start Learning
            <FaArrowRight className="animate-bounce-x" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
