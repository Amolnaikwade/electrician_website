import { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-11 w-11 object-contain"
            />

            <div>
              <h1 className="font-bold text-lg text-gray-800">
                 Bachkar enterprises
              </h1>

              <p className="text-xs text-gray-500">
                Professional Electrician
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a
              href="#home"
              className="hover:text-yellow-500 transition"
            >
              Home
            </a>

            <a
              href="#services"
              className="hover:text-yellow-500 transition"
            >
              Services
            </a>

            <a
              href="#gallery"
              className="hover:text-yellow-500 transition"
            >
              Gallery
            </a>

            <a
              href="#about"
              className="hover:text-yellow-500 transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:text-yellow-500 transition"
            >
              Contact
            </a>
          </nav>

          {/* Call Button */}
          <a
            href="tel:+919322195160"
            className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full transition"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-800"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col text-center">
            <a
              href="#home"
              onClick={closeMenu}
              className="py-4 border-b hover:bg-gray-100"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="py-4 border-b hover:bg-gray-100"
            >
              Services
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className="py-4 border-b hover:bg-gray-100"
            >
              Gallery
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="py-4 border-b hover:bg-gray-100"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-4 border-b hover:bg-gray-100"
            >
              Contact
            </a>

            <a
              href="tel:+919322195160"
              className="bg-yellow-500 text-white py-4 font-semibold"
            >
              📞 Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;