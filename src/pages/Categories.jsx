import React from "react";
import { Link } from "react-router-dom";
import {
  FaReact, FaNodeJs, FaDatabase, FaAws, FaBug, FaGitAlt,
  FaLinux, FaDocker, FaShieldAlt, FaMobileAlt, FaCloud, FaLaptopCode,
  FaCogs, FaProjectDiagram, FaTools, FaLayerGroup, FaUserSecret
} from "react-icons/fa";

const categories = [
  { name: "Frontend Development", icon: <FaReact className="text-blue-400 text-3xl" />, path: "frontend" },
  { name: "Backend Development", icon: <FaNodeJs className="text-green-400 text-3xl" />, path: "backend" },
  { name: "Full Stack Development", icon: <FaLaptopCode className="text-pink-400 text-3xl" />, path: "fullstack" },
  { name: "Database Management", icon: <FaDatabase className="text-yellow-300 text-3xl" />, path: "database" },
  { name: "DevOps", icon: <FaCogs className="text-orange-300 text-3xl" />, path: "devops" },
  { name: "Cloud Computing", icon: <FaCloud className="text-blue-300 text-3xl" />, path: "cloud" },
  { name: "Cyber Security", icon: <FaShieldAlt className="text-red-400 text-3xl" />, path: "cybersecurity" },
  { name: "Ethical Hacking", icon: <FaUserSecret className="text-gray-400 text-3xl" />, path: "hacking" },
  { name: "Testing & QA", icon: <FaBug className="text-red-300 text-3xl" />, path: "testing" },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400 text-3xl" />, path: "git" },
  { name: "Linux & Shell", icon: <FaLinux className="text-white text-3xl" />, path: "linux" },
  { name: "Docker & Containers", icon: <FaDocker className="text-blue-400 text-3xl" />, path: "docker" },
  { name: "Mobile App Development", icon: <FaMobileAlt className="text-green-300 text-3xl" />, path: "mobile" },
  { name: "Project Management", icon: <FaProjectDiagram className="text-purple-300 text-3xl" />, path: "project-management" },
  { name: "Tools & Extensions", icon: <FaTools className="text-yellow-400 text-3xl" />, path: "tools" },
  { name: "FARM / MERN / Stack", icon: <FaLayerGroup className="text-indigo-300 text-3xl" />, path: "stack" },
];

const Categories = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8 bg-gray-900 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-purple-400">
        Explore Job-Based Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/topics/${cat.path}`}
            className="bg-gray-800 hover:bg-purple-800 transition-all duration-300 p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 text-center"
          >
            {cat.icon}
            <h3 className="text-lg font-semibold mt-4">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
