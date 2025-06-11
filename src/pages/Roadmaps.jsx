import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaDatabase,
  FaCogs,
  FaCloud,
  FaShieldAlt,
  FaUserSecret,
  FaBug,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaMobileAlt,
  FaProjectDiagram,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

const roadmaps = [
  { name: "Frontend Development", icon: <FaReact className="text-blue-400 text-3xl" />, path: "frontend" },
  { name: "Backend Development", icon: <FaNodeJs className="text-green-400 text-3xl" />, path: "backend" },
  { name: "Full Stack Development", icon: <FaLaptopCode className="text-pink-400 text-3xl" />, path: "full-stack" },
  { name: "Database Management", icon: <FaDatabase className="text-yellow-300 text-3xl" />, path: "database" },
  { name: "DevOps", icon: <FaCogs className="text-orange-300 text-3xl" />, path: "devops" },
  { name: "Cloud Computing", icon: <FaCloud className="text-blue-300 text-3xl" />, path: "cloud-devops" },
  { name: "Cyber Security", icon: <FaShieldAlt className="text-red-400 text-3xl" />, path: "cyber-security" },
  { name: "Ethical Hacking", icon: <FaUserSecret className="text-gray-400 text-3xl" />, path: "ethical-hacking" },
  { name: "Testing & QA", icon: <FaBug className="text-red-300 text-3xl" />, path: "qa" },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400 text-3xl" />, path: "git" },
  { name: "Linux & Shell", icon: <FaLinux className="text-white text-3xl" />, path: "linux" },
  { name: "Docker & Containers", icon: <FaDocker className="text-blue-400 text-3xl" />, path: "docker" },
  { name: "Mobile App Development", icon: <FaMobileAlt className="text-green-300 text-3xl" />, path: "android" },
  { name: "Project Management", icon: <FaProjectDiagram className="text-purple-300 text-3xl" />, path: "project-management" },
  { name: "Tools & Extensions", icon: <FaTools className="text-yellow-400 text-3xl" />, path: "tools" },
  { name: "FARM / MERN / Stack", icon: <FaLayerGroup className="text-indigo-300 text-3xl" />, path: "mern" },
];

const Roadmaps = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8 bg-gray-900 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-purple-400">
        IT Career Roadmaps
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {roadmaps.map((roadmap, index) => (
          <a
            key={index}
            href={`https://roadmap.sh/${roadmap.path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-700 hover:to-purple-600 transition-all duration-300 rounded-xl shadow-md hover:scale-105 flex flex-col items-center text-center space-y-4"
          >
            {roadmap.icon}
            <h3 className="text-xl font-semibold">{roadmap.name}</h3>
            <p className="text-sm text-gray-300">View full roadmap ➜</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Roadmaps;
