import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api/videos";

const Dashboard = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") !== "true") {
      navigate("/admin");
    } else {
      fetchVideos();
    }
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadVideo = async (e) => {
    e.preventDefault();

    if (!title || !video) {
      alert("Please enter title and select video.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", video);

    setLoading(true);

    try {
      const res = await fetch(`${API}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Video Uploaded Successfully");
        setTitle("");
        setVideo(null);

        document.getElementById("videoInput").value = "";

        fetchVideos();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    }

    setLoading(false);
  };

  const deleteVideo = async (id) => {
    if (!window.confirm("Delete this video?")) return;

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    fetchVideos();
  };

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-yellow-500 text-white px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="max-w-5xl mx-auto p-6">

        {/* Upload Form */}

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-5">
            Upload New Video
          </h2>

          <form
            onSubmit={uploadVideo}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Video Title"
              className="w-full border p-3 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              id="videoInput"
              type="file"
              accept="video/mp4,video/mov,video/webm"
              className="w-full border p-3 rounded-lg"
              onChange={(e) => setVideo(e.target.files[0])}
            />

            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
            >
              {loading ? "Uploading..." : "Upload Video"}
            </button>

          </form>

        </div>

        {/* Uploaded Videos */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Uploaded Videos
          </h2>

          {videos.length === 0 ? (
            <p>No videos uploaded.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">

              {videos.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >

                  <video
                    controls
                    className="w-full h-60 object-cover"
                    src={`http://localhost:5000${item.videoUrl}`}
                  />

                  <div className="p-5">

                    <h3 className="font-bold text-lg">
                      {item.title}
                    </h3>

                    <button
                      onClick={() => deleteVideo(item._id)}
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;