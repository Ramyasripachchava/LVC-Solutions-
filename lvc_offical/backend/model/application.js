import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    graduationYear: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    percentage: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    portfolio: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
      city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
