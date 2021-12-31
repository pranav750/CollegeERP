import express from "express";
import * as adminController from "../controllers/admin.js";
import auth from "../middleware/auth.js";
import * as validator from "../middleware/validation.js";

const router = express.Router();

router.post("/login", adminController.login);
router.post(
  "/register",
  validator.isRegistrationValid,
  adminController.addAdmin
);
router.post(
  "/add-admin",
  auth,
  validator.isRegistrationValid,
  adminController.addAdmin
);
router.post(
  "/add-student",
  auth,
  validator.isRegistrationValid,
  adminController.addStudent
);
router.post(
  "/add-teacher",
  auth,
  validator.isRegistrationValid,
  adminController.addTeacher
);
router.post(
  "/add-subject",
  auth,
  validator.isRegistrationValid,
  adminController.addSubject
);
router.get("/get-admin/:registrationID", auth, adminController.getAdmin);
router.get("/get-student/:registrationID", auth, adminController.getStudent);
router.get("/get-teacher/:registrationID", auth, adminController.getTeacher);
router.get("/get-subject/:registrationID", auth, adminController.getSubject);
router.get("/get-admins", auth, adminController.getAdmins);
router.get("/get-students", auth, adminController.getStudents);
router.get("/get-teachers", auth, adminController.getTeachers);
router.get("/get-subjects", auth, adminController.getSubjects);
router.delete(
  "/delete-admin/:registrationID",
  auth,
  adminController.deleteAdmin
);
router.delete(
  "/delete-student/:registrationID",
  auth,
  adminController.deleteStudent
);
router.delete(
  "/delete-teacher/:registrationID",
  auth,
  adminController.deleteTeacher
);
router.delete(
  "/delete-subject/:registrationID",
  auth,
  adminController.deleteSubject
);
router.put(
  "/update-admin/:registrationID",
  auth,
  validator.isUpdationValid,
  adminController.updateAdmin
);
router.put(
  "/update-student/:registrationID",
  auth,
  validator.isUpdationValid,
  adminController.updateStudent
);
router.put(
  "/update-teacher/:registrationID",
  auth,
  validator.isUpdationValid,
  adminController.updateTeacher
);
router.put(
  "/update-subject/:registrationID",
  auth,
  validator.isUpdationValid,
  adminController.updateSubject
);

export default router;
