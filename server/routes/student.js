import express from "express";
import * as studentController from "../controllers/student.js";
import * as adminController from "../controllers/admin.js";
import auth from "../middleware/auth.js";
import * as validator from "../middleware/validation.js";

const router = express.Router();

router.post("/login", studentController.login);
router.post(
  "/register",
  validator.isRegistrationValid,
  adminController.addStudent
);
router.post("/get-marks/:registrationID", auth, studentController.getMarks);
router.post(
  "/get-attendance/:registrationID",
  auth,
  studentController.getAttendance
);

export default router;
