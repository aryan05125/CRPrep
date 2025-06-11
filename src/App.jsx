import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Topics from "./pages/Topics";
import Questions from "./pages/Questions";
import Roadmaps from "./pages/Roadmaps";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Router>
        <Header />
        <main className="pt-20 px-4 sm:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/topics/:category" element={<Topics />} />
            <Route path="/questions/:topic" element={<Questions />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
