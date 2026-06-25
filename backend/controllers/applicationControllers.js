import Application from "../model/application.js";
import mongoose from "mongoose";
import { gfs } from "../utils/db.js";

const createApplication = async (req, res) => {
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
        const newApplication = new Application({
          ...req.body,
          resume: writeStream.id.toString(), 
        });

        await newApplication.save();

        res.status(201).json({
          message: "Application + Resume submitted successfully",
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


const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getResume = async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);

    const readStream = gfs.openDownloadStream(fileId);

    res.set("Content-Type", "application/pdf");
    readStream.pipe(res);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const submitInternApplication = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      degree,
      universityName,
      yearOfClass,
      semester,
      branch,
      percentage,
      internshipRole,
      resume,
      portfolio,
      country,
      state,
      city,
    } = req.body;

    // 1. Prepare payload for Google Apps Script Web App
    const scriptPayload = {
      secret: process.env.SCRIPT_SECRET,
      name,
      email,
      phone,
      degree,
      universityName,
      yearOfClass,
      semester,
      branch,
      percentage,
      internshipRole,
      resume,
      portfolio,
      country,
      state,
      city,
    };

    // 2. Post to Google Apps Script
    if (!process.env.INTERN_SCRIPT_URL) {
      console.error("INTERN_SCRIPT_URL is not set in backend environment variables.");
      return res.status(500).json({ message: "Server configuration error: script URL missing." });
    }

    const scriptResponse = await fetch(process.env.INTERN_SCRIPT_URL, {
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
    console.error("Error submitting application:", error);
    return res.status(500).json({ message: error.message });
  }
};

export { createApplication, getAllApplications, getResume, submitInternApplication };