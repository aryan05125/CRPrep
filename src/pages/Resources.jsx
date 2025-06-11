import React from "react";
import {
  FaYoutube,
  FaFileAlt,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

const resources = [
  {
    type: "Video Tutorials",
    icon: <FaYoutube className="text-3xl text-red-500" />,
    items: [
      { title: "React Full Course", link: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
      { title: "Node.js Crash Course", link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
      { title: "Tailwind CSS Tutorial", link: "https://www.youtube.com/watch?v=UBOj6rqRUME" },
      { title: "JavaScript in 1 Hour", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
      { title: "MongoDB Tutorial", link: "https://www.youtube.com/watch?v=Of1hXd_UDxg" },
      { title: "Git & GitHub Full Course", link: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
    ],
  },
  {
    type: "Cheat Sheets",
    icon: <FaFileAlt className="text-3xl text-yellow-300" />,
    items: [
      { title: "HTML Cheat Sheet", link: "https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf" },
      { title: "CSS Cheat Sheet", link: "https://htmlcheatsheet.com/css/" },
      { title: "JavaScript Cheat Sheet", link: "https://htmlcheatsheet.com/js/" },
      { title: "React Cheat Sheet", link: "https://devhints.io/react" },
      { title: "Node.js Cheat Sheet", link: "https://cheatography.com/arslan/cheat-sheets/node-js/" },
      { title: "Git Commands", link: "https://education.github.com/git-cheat-sheet-education.pdf" },
    ],
  },
  {
    type: "Developer Tools",
    icon: <FaTools className="text-3xl text-blue-400" />,
    items: [
      { title: "JSON Formatter", link: "https://jsonformatter.org/" },
      { title: "Regex101", link: "https://regex101.com/" },
      { title: "Free Code Formatter", link: "https://codebeautify.org/" },
      { title: "Color Palette Generator", link: "https://coolors.co/" },
      { title: "Lorem Ipsum Generator", link: "https://www.lipsum.com/" },
      { title: "Responsiveness Checker", link: "https://www.responsinator.com/" },
    ],
  },
  {
    type: "Practice Platforms",
    icon: <FaLaptopCode className="text-3xl text-green-400" />,
    items: [
      { title: "LeetCode", link: "https://leetcode.com/" },
      { title: "HackerRank", link: "https://www.hackerrank.com/" },
      { title: "Codeforces", link: "https://codeforces.com/" },
      { title: "GeeksforGeeks Practice", link: "https://practice.geeksforgeeks.org/" },
      { title: "Frontend Mentor", link: "https://www.frontendmentor.io/" },
      { title: "CodePen", link: "https://codepen.io/" },
    ],
  },
];

const Resources = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8 bg-gray-900 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-purple-400">
        Helpful Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {resources.map((block, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              {block.icon}
              <h3 className="text-xl font-semibold">{block.type}</h3>
            </div>
            <ul className="space-y-2 text-left">
              {block.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white transition underline"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
