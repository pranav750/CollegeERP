import express from "express";
import * as teacherController from "../controllers/teacher.js";
import * as adminController from "../controllers/admin.js";
import auth from "../middleware/auth.js";
import * as validator from "../middleware/validation.js";

const router = express.Router();

router.post("/login", teacherController.login);
router.post(
  "/register",
  validator.isRegistrationValid,
  adminController.addTeacher
);
router.post(
  "/get-students-for-attendance",
  auth,
  teacherController.getStudentsForAttendance
);
router.post("/mark-attendance", auth, teacherController.markAttendance);
router.post(
  "/get-students-for-test-marks",
  auth,
  validator.isMarkAddtionValid,
  teacherController.getStudentsForTestMarks
);
router.post(
  "/give-marks",
  auth,
  validator.isMarkAddtionValid,
  teacherController.giveMarks
);
router.post(
  "/update-mark",
  auth,
  validator.isMarkUpdationValid,
  teacherController.updateMark
);

export default router;
