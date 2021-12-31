import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  registrationID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;
