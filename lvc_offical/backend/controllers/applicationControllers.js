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


export { createApplication, getAllApplications, getResume };