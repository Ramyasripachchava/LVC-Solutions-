import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import applicationRoutes from "./routes/applicationRoutes.js";
import fulltimeApplicationRoutes from "./routes/fulltimeApplicationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/applications", applicationRoutes);
app.use("/api/fulltime-applications", fulltimeApplicationRoutes);

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
