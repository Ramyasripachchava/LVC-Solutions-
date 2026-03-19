import mongoose from "mongoose";
import FulltimeApplication from "../model/fulltimeApplicationModel.js";
import { gfs } from "../utils/db.js";

const normalizeArrayField = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const createFulltimeApplication = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume is required" });
    }

    const writeStream = gfs.openUploadStream(req.file.originalname, {
      contentType: "application/pdf",
    });

    writeStream.end(req.file.buffer);

    writeStream.on("finish", async () => {
      try {
        const {
          company,
          experienceType,
          period,
          description,
          skills,
          preferredLocations,
          ...restBody
        } = req.body;

        const newApplication = new FulltimeApplication({
          ...restBody,
          experience: {
            company,
            experienceType,
            period,
            description,
          },
          skills: normalizeArrayField(skills),
          preferredLocations: normalizeArrayField(preferredLocations),
          resume: writeStream.id.toString(),
        });

        await newApplication.save();

        res.status(201).json({
          message: "Full-time application submitted successfully",
          data: newApplication,
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFulltimeApplications = async (req, res) => {
  try {
    const applications = await FulltimeApplication.find().sort({
      createdAt: -1,
    });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFulltimeResume = async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const readStream = gfs.openDownloadStream(fileId);

    res.set("Content-Type", "application/pdf");
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createFulltimeApplication,
  getAllFulltimeApplications,
  getFulltimeResume,
};
