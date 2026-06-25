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

const submitFulltimeApplication = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      dob,
      citizenship,
      country,
      address,
      city,
      state,
      resume,
      skills,
      desiredJobTitle,
      education,
      workExperience,
    } = req.body;

    // 1. Prepare payload for Google Apps Script Web App
    const scriptPayload = {
      secret: process.env.SCRIPT_SECRET,
      firstName,
      lastName,
      phone,
      email,
      dob,
      citizenship,
      country,
      address,
      city,
      state,
      resume,
      skills,
      desiredJobTitle,
      education,
      workExperience,
    };

    // 2. Post to Google Apps Script
    if (!process.env.FULLTIME_SCRIPT_URL) {
      console.error("FULLTIME_SCRIPT_URL is not set in backend environment variables.");
      return res.status(500).json({ message: "Server configuration error: script URL missing." });
    }

    const scriptResponse = await fetch(process.env.FULLTIME_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(scriptPayload),
    });

    if (!scriptResponse.ok) {
      const errorText = await scriptResponse.text();
      throw new Error(`Google Apps Script responded with status ${scriptResponse.status}: ${errorText}`);
    }

    return res.status(201).json({
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting fulltime application:", error);
    return res.status(500).json({ message: error.message });
  }
};

export {
  createFulltimeApplication,
  getAllFulltimeApplications,
  getFulltimeResume,
  submitFulltimeApplication,
};
