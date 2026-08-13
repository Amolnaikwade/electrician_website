import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

// Home Page
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Videos />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

// Main App
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}