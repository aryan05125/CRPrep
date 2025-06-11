import React from "react";
import { useParams, Link } from "react-router-dom";

const topicsData = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "Django", "FastAPI"],
  fullstack: ["Frontend", "Backend", "REST API", "Authentication", "Deployment"],
  database: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Redis"],
  devops: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  cloud: ["AWS", "Azure", "Google Cloud", "Serverless", "Cloud Security"],
  cybersecurity: ["Network Security", "Firewalls", "OWASP Top 10", "Penetration Testing"],
  hacking: ["Ethical Hacking", "Metasploit", "Wireshark", "Burp Suite", "Social Engineering"],
  testing: ["Jest", "Mocha", "Cypress", "Selenium", "Playwright"],
  git: ["Git Basics", "Branching", "Merging", "GitHub Actions", "Pull Requests"],
  linux: ["Linux Commands", "Shell Scripting", "Permissions", "Cron Jobs", "SSH"],
  docker: ["Docker Basics", "Volumes", "Images", "Docker Compose", "Networking"],
  mobile: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase"],
  "project-management": ["Agile", "Scrum", "Kanban", "Jira", "SDLC"],
  tools: ["Postman", "VS Code", "Chrome DevTools", "Figma", "Lighthouse"],
  stack: ["MERN", "FARM", "JAMstack", "T3 Stack", "MEAN"],
};

const Topics = () => {
  const { category } = useParams();
  const topics = topicsData[category] || [];

  return (
    <section className="min-h-screen py-12 px-4 sm:px-8 bg-gray-900 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-purple-400 capitalize">
        {category.replace(/-/g, " ")} Topics
      </h2>

      {topics.length === 0 ? (
        <p className="text-center text-gray-400">No topics found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/questions/${topic.toLowerCase().replace(/ /g, "-")}`}
              className="bg-gray-800 hover:bg-purple-700 transition-all duration-300 p-6 rounded-xl flex items-center justify-center shadow-md hover:scale-105 text-lg font-semibold text-center"
            >
              {topic}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Topics;
