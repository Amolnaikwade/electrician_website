import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Contact Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
            Need an Electrician?
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Call us today for fast, safe and affordable electrical services.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-4 rounded-xl">
                  <FaPhoneAlt className="text-yellow-600 text-xl" />
                </div>

                <div>
                  <p className="text-gray-500">Phone</p>
                  <a
                    href="tel:+919172728561"
                    className="font-semibold text-lg hover:text-yellow-500"
                  >
                    +91 91727 28561
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-xl">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>

                <div>
                  <p className="text-gray-500">WhatsApp</p>

                  <a
                    href="https://wa.me/9322195160"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-lg hover:text-green-600"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>

                <div>
                  <p className="text-gray-500">Email</p>

                  <p className="font-semibold">
                    youremail@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-red-600 text-xl" />
                </div>

                <div>
                  <p className="text-gray-500">Address</p>

                  <p className="font-semibold">
                    Kopargaon, Maharashtra
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Pune&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

      {/* Floating WhatsApp */}

      <a
        href="https://wa.me/919322195160"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <FaWhatsapp size={28} />
      </a>

    </section>
  );
};

export default Contact;