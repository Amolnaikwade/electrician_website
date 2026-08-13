import express from "express";
import fs from "fs";
import path from "path";
import Video from "../models/Video.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/*
====================================
GET ALL VIDEOS
====================================
*/

router.get("/", async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });

    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*
====================================
UPLOAD VIDEO
====================================
*/

router.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const count = await Video.countDocuments();

    if (count >= 10) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }

      return res.status(400).json({
        message: "Maximum 10 videos allowed.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Please select a video.",
      });
    }

    const video = new Video({
      title: req.body.title,
      videoUrl: `/uploads/${req.file.filename}`,
      fileName: req.file.filename,
    });

    await video.save();

    res.json({
      success: true,
      message: "Video uploaded successfully.",
      video,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

/*
====================================
DELETE VIDEO
====================================
*/

router.delete("/:id", async (req, res) => {
  try {

    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found.",
      });
    }

    const filePath = path.join("uploads", video.fileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Video.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Video deleted successfully.",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
});

export default router;