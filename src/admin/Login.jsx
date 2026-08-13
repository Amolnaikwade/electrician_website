import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("https://electrician-backend-wcx9.onrender.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/admin/dashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server Error");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border rounded-xl p-3 outline-none"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-xl p-3 outline-none"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl py-3 font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;