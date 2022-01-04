import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  studentIDs: {
    type: Array,
  },
  date: {
    type: String,
    required: true,
  },
  subjectID: {
    type: String,
    required: true,
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
