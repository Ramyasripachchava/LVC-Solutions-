import express from "express";
import multer from "multer";
import {
  createFulltimeApplication,
  getAllFulltimeApplications,
  getFulltimeResume,
} from "../controllers/fulltimeApplicationControllers.js";

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

router.post("/add", upload.single("resume"), createFulltimeApplication);
router.get("/get", getAllFulltimeApplications);
router.get("/resume/:id", getFulltimeResume);

export default router;
