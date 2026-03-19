import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import fulltimeApplicationRoutes from "./routes/fulltimeApplicationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/applications", applicationRoutes);
app.use("/api/fulltime-applications", fulltimeApplicationRoutes);


db();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
