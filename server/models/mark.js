import mongoose from "mongoose";

const markSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
  },
  test: {
    type: String,
    required: true,
  },
  subjectID: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  outOf: {
    type: Number,
    required: true,
  },
});

const Mark = mongoose.model("Mark", markSchema);

export default Mark;
