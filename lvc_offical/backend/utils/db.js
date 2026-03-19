import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";

let gfs;

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("Mongo DB successfully connected");

    const dbInstance = conn.connection.db;

    gfs = new GridFSBucket(dbInstance, {
      bucketName: "resumes",
    });
  } catch (error) {
    console.log("Failed to connect MongoDB ", error);
  }
};

export { gfs };
export default db;
