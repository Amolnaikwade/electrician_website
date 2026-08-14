import express from "express";
import upload from "../middleware/upload.js";
import Video from "../models/Video.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

/*
=====================================
GET ALL VIDEOS
=====================================
*/
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/*
=====================================
UPLOAD VIDEO
=====================================
*/
router.post("/upload", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select a video.",
      });
    }

    const count = await Video.countDocuments();

    if (count >= 10) {
      return res.status(400).json({
        success: false,
        message: "Maximum 10 videos allowed.",
      });
    }

   const video = await Video.create({
  title: req.body.title,
  videoUrl: req.file.path,
  publicId: req.file.filename,
});

    res.json({
      success: true,
      message: "Video uploaded successfully.",
      video,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/*
=====================================
DELETE VIDEO
=====================================
*/
router.delete("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(video.publicId, {
      resource_type: "video",
    });

    // Delete from MongoDB
    await Video.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Video deleted successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
export default router;