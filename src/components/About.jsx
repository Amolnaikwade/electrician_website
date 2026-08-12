import { FaAward, FaBolt, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import owner from "../assets/owner.jpg";

const features = [
  "Licensed & Experienced Electrician",
  "Quality Materials & Safe Installation",
  "Affordable Pricing",
  "On-Time Service",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-3 rounded-3xl bg-yellow-400/20 blur-2xl"></div>

              <img
                src={owner}
                alt="Owner"
                className="relative rounded-3xl w-full max-w-md shadow-2xl object-cover"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="text-yellow-500 uppercase font-semibold tracking-widest">
              About Us
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
              Trusted Electrical Services You Can Rely On
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              We provide professional electrical services for homes,
              apartments, offices, shops, and commercial buildings. Our goal
              is to deliver safe, reliable, and high-quality electrical
              solutions with complete customer satisfaction.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                >
                  <FaCheckCircle className="text-green-500 text-lg" />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="text-center bg-yellow-50 rounded-2xl p-5">

                <FaAward className="mx-auto text-3xl text-yellow-500 mb-3" />

                <h3 className="text-2xl font-bold">10+</h3>

                <p className="text-sm text-gray-600">
                  Years
                </p>

              </div>

              <div className="text-center bg-yellow-50 rounded-2xl p-5">

                <FaBolt className="mx-auto text-3xl text-yellow-500 mb-3" />

                <h3 className="text-2xl font-bold">500+</h3>

                <p className="text-sm text-gray-600">
                  Projects
                </p>

              </div>

              <div className="text-center bg-yellow-50 rounded-2xl p-5">

                <FaCheckCircle className="mx-auto text-3xl text-yellow-500 mb-3" />

                <h3 className="text-2xl font-bold">100%</h3>

                <p className="text-sm text-gray-600">
                  Quality
                </p>

              </div>

            </div>

            {/* Button */}

            <a
              href="tel:+919172728561"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full mt-10 transition"
            >
              <FaPhoneAlt />
              Call For Service
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;