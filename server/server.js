import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";

import adminRoutes from "./routes/admin.js";
import videoRoutes from "./routes/videos.js";

dotenv.config();

const app = express();

// Create uploads folder if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads", { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded videos
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/videos", videoRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Electrician Backend Running...");
});

// Use Render's PORT or 5000 locally
const PORT = process.env.PORT || 5000;

// Connect MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
  });