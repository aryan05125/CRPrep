import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFileDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen px-4 sm:px-8 py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto space-y-12 text-center">

        {/* Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-400 animate-pulse">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mt-3">
            Let's collaborate, connect, and grow together. Whether it’s a project, suggestion, or just a hello — I’m here!
          </p>
        </div>

        {/* Card-Based Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <a
            href="mailto:aryanchauhan144512@gmail.com"
            className="bg-gray-800 hover:bg-purple-700 transition rounded-xl p-6 shadow-lg flex flex-col items-center justify-center space-y-4"
          >
            <FaEnvelope className="text-3xl text-red-400" />
            <span className="text-lg font-semibold">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aryan-chauhan"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-purple-700 transition rounded-xl p-6 shadow-lg flex flex-col items-center justify-center space-y-4"
          >
            <FaLinkedin className="text-3xl text-blue-400" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>

          <a
            href="https://github.com/aryanchauhan"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-purple-700 transition rounded-xl p-6 shadow-lg flex flex-col items-center justify-center space-y-4"
          >
            <FaGithub className="text-3xl text-white" />
            <span className="text-lg font-semibold">GitHub</span>
          </a>

          <a
            href="https://wa.me/919409647292"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-purple-700 transition rounded-xl p-6 shadow-lg flex flex-col items-center justify-center space-y-4"
          >
            <FaWhatsapp className="text-3xl text-green-400" />
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>
        </div>

        {/* Personal Info Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md space-y-4 max-w-md mx-auto mt-10">
          <h3 className="text-2xl font-semibold text-purple-300 mb-2">Let's Connect</h3>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Himatnagar, Gujarat, India</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <FaPhoneAlt className="text-green-400" />
            <span>+91 94096 47292</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <FaFileDownload className="text-blue-400" />
            <a href="/aryan-resume.pdf" download className="underline">Download Resume</a>
          </div>
        </div>

        {/* Optional Google Map */}
        <div className="mt-10">
          <iframe
            title="map"
            className="w-full h-64 rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.720716792181!2d72.9551!3d23.6027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395df294c64e7b55%3A0xaaa0f1b85fcaaa70!2sHimatnagar!5e0!3m2!1sen!2sin!4v1718094977664!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
