import React from "react";
import { FaLeaf, FaLightbulb, FaRocket, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen px-4 sm:px-8 py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-400 animate-pulse">
            About CRPrep
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            CRPrep is a sleek, modern web platform focused on helping developers and techies crack interviews, explore technology stacks, and stay job-ready.
          </p>
          <p className="text-sm text-gray-400">
            Crafted using <span className="text-blue-400">React.js</span>,{" "}
            <span className="text-green-400">Vite</span>, and{" "}
            <span className="text-pink-400">Tailwind CSS</span>.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaLightbulb className="text-yellow-300 text-4xl mb-3" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">Our Vision</h3>
            <p className="text-gray-400 text-sm">
              Empower every tech learner with structured content, deep insights, and visual learning to succeed in the IT industry.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaRocket className="text-pink-400 text-4xl mb-3" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">Mission</h3>
            <p className="text-gray-400 text-sm">
              Provide free, open, and updated resources to help everyone grow from beginner to pro in web, devops, and full stack development.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaLeaf className="text-green-300 text-4xl mb-3" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">Eco Friendly</h3>
            <p className="text-gray-400 text-sm">
              Built with performance-first approach — minimal requests, optimized assets, and carbon-aware dark theme for eco-saving browsing. 🌱
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaCode className="text-blue-300 text-4xl mb-3" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">Tech Stack</h3>
            <p className="text-gray-400 text-sm">
              ReactJS + Vite + TailwindCSS with reusable components, animations, and best practices — no backend, just frontend magic. ✨
            </p>
          </div>
        </div>

        {/* Developer Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-2 text-purple-300">
            Project by Aryan Chauhan
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I'm Aryan — a passionate frontend developer focused on building beautiful, fast, animated websites. I love helping developers grow through design-focused learning. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
