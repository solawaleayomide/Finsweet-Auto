import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Service from "../src/pages/services/service";
import Blog from "../src/pages/blog/Blog";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
