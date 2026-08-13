import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const videos = [
  {
    src: video1,
    title: "House Wiring Project",
  },
  {
    src: video2,
    title: "Electrical Panel Installation",
  },
  {
    src: video3,
    title: "LED Lighting Installation",
  },
];

const Videos = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-yellow-400 uppercase tracking-widest font-semibold">
            Work Videos
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Watch Our Recent Projects
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Real videos from our completed electrical projects, showcasing quality workmanship and attention to detail.
          </p>

        </div>

        {/* Videos */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {videos.map((video, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <video
                src={video.src}
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full h-64 object-cover"
              />

              <div className="p-5">

                <h3 className="text-white font-semibold text-lg">
                  {video.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Professional electrical installation completed safely and efficiently.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Videos;