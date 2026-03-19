import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },
    experienceType: {
      type: String,
      required: true,
      trim: true,
    },
    period: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const fulltimeApplicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
      default: "",
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
      trim: true,
    },
    citizenship: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    degreeMajor: {
      type: String,
      required: true,
      trim: true,
    },
    universityInstitution: {
      type: String,
      required: true,
      trim: true,
    },
    graduationYear: {
      type: String,
      required: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: experienceSchema,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
      default: [],
    },
    desiredJobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    expectedSalaryAnnual: {
      type: String,
      // required: true,
      trim: true,
    },
    jobType: {
      type: String,
      required: true,
      trim: true,
    },
    preferredWorkLocation: {
      type: String,
      required: true,
      trim: true,
    },
    preferredLocations: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true },
);

const FulltimeApplication = mongoose.model(
  "FulltimeApplication",
  fulltimeApplicationSchema,
);

export default FulltimeApplication;
