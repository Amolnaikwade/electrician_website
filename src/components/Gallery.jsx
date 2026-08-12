import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";
import work6 from "../assets/work6.jpg";

const images = [
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-yellow-500 uppercase tracking-widest font-semibold">
            Our Projects
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-gray-800">
            Recent Electrical Work
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of our completed electrical projects for homes,
            offices, shops, and commercial buildings.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

          {images.map((image, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >

              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="h-64 md:h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <div className="text-center px-4">

                  <h3 className="text-white font-bold text-xl">
                    Electrical Project
                  </h3>

                  <p className="text-gray-200 mt-2 text-sm">
                    Safe • Professional • Reliable
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;