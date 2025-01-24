import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/pages/home/Home";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
