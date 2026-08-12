import { FaPhoneAlt, FaWhatsapp, FaBolt } from "react-icons/fa";
import heroImg from "../assets/hero.jpg";
import ownerImg from "../assets/owner.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Electrician Work"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaBolt />
              Trusted Electrician Services
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Professional
              <span className="text-yellow-400"> Electrical </span>
              Services For Your Home & Business
            </h1>

            <p className="text-gray-200 mt-6 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Safe, reliable and affordable electrical solutions including
              house wiring, fan installation, CCTV setup, inverter installation,
              repair and maintenance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

              <a
                href="tel:+919322195160"
                className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold px-7 py-4 rounded-full flex items-center justify-center gap-3"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/919322195160"
                target="_blank"
                rel="noreferrer"
                className="border border-white hover:bg-white hover:text-black transition text-white px-7 py-4 rounded-full flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 text-white">

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">10+</h2>
                <p>Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">500+</h2>
                <p>Projects Completed</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">100%</h2>
                <p>Customer Satisfaction</p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-3 rounded-full bg-yellow-400 blur-2xl opacity-40"></div>

              <img
                src={ownerImg}
                alt="Owner"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;