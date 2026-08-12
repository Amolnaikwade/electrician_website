import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Bachkar enterprises
                </h2>

                <p className="text-sm text-gray-400">
                  Professional Electrician
                </p>

              </div>

            </div>

            <p className="mt-5 leading-7 text-gray-400">
              We provide safe, reliable and affordable electrical
              services for homes, offices and commercial buildings.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-yellow-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-400">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3">

              <li>House Wiring</li>
              <li>Fan Installation</li>
              <li>LED Lighting</li>
              <li>Switch Board Repair</li>
              <li>Electrical Maintenance</li>
              <li>Emergency Service</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <span>+91 91727 28561</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <span>youremail@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>Pune, Maharashtra</span>
              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919322195160"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 transition flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p>
            © {year} ABC Electric. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by Your Company
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;