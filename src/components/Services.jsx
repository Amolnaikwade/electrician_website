import {
  FaBolt,
  FaHome,
  FaFan,
  FaLightbulb,
  FaTools,
  FaPlug,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome size={36} />,
    title: "House Wiring",
    desc: "Complete wiring solutions for new and existing homes.",
  },
  {
    icon: <FaFan size={36} />,
    title: "Fan Installation",
    desc: "Ceiling fan installation, repair and replacement.",
  },
  {
    icon: <FaLightbulb size={36} />,
    title: "Lighting",
    desc: "LED lights, decorative lights and outdoor lighting.",
  },
  {
    icon: <FaPlug size={36} />,
    title: "Switch & Socket",
    desc: "Switch board installation and power socket repair.",
  },
  {
    icon: <FaTools size={36} />,
    title: "Electrical Repair",
    desc: "Quick troubleshooting and electrical maintenance.",
  },
  {
    icon: <FaBolt size={36} />,
    title: "Emergency Service",
    desc: "Fast electrical support whenever you need it.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-gray-800">
            Electrical Services We Offer
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide safe, reliable and affordable electrical services for
            homes, offices and commercial spaces.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-500 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;