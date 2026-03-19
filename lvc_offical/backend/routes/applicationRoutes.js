import express from "express";
import multer from "multer";
import {
  createApplication,
  getAllApplications,
  getResume,
} from "../controllers/applicationControllers.js";

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF allowed"));
    }
  },
});

router.post("/add", upload.single("resume"), createApplication);
router.get("/get", getAllApplications);
router.get("/resume/:id", getResume);

export default router;
