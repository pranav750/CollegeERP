import bcrypt from "bcrypt";

import Admin from "../models/admin.js";
import Subject from "../models/subject.js";
import Teacher from "../models/teacher.js";
import Student from "../models/student.js";
import Attendance from "../models/attendance.js";
import Mark from "../models/mark.js";

import {
  aadharCheck,
  passwordCheck,
  nameCheck,
  emailCheck,
  mobileCheck,
  semesterCheck,
  yearCheck,
  departmentCheck,
} from "../utils/check.js";

export const isRegistrationValid = (req, res, next) => {
  if (
    req.body.type === "Student" ||
    req.body.type === "Admin" ||
    req.body.type === "Teacher"
  ) {
    const firstNameChecked = nameCheck(req.body.firstName, "First");
    if (firstNameChecked)
      return res.status(422).json({ message: firstNameChecked });

    const lastNameChecked = nameCheck(req.body.lastName, "Last");
    if (lastNameChecked)
      return res.status(422).json({ message: lastNameChecked });

    const aadharChecked = aadharCheck(req.body.aadhar);
    if (aadharChecked) return res.status(422).json({ message: aadharChecked });

    const emailChecked = emailCheck(req.body.email);
    if (emailChecked) return res.status(422).json({ message: emailChecked });

    const mobileChecked = mobileCheck(req.body.mobile);
    if (mobileChecked) return res.status(422).json({ message: mobileChecked });

    const passwordChecked = passwordCheck(req.body.password);
    if (passwordChecked)
      return res.status(422).json({ message: passwordChecked });

    if (req.body.confirmPassword !== req.body.password)
      return res.status(422).json({ message: "Passwords did not match" });
  }

  if (
    req.body.type === "Student" ||
    req.body.type === "Teacher" ||
    req.body.type === "Subject"
  ) {
    const departmentChecked = departmentCheck(req.body.department);
    if (departmentChecked)
      return res.status(422).json({ message: departmentChecked });
  }

  if (req.body.type === "Student" || req.body.type === "Subject") {
    const yearChecked = yearCheck(req.body.year);
    if (yearChecked) return res.status(422).json({ message: yearChecked });

    const semesterChecked = semesterCheck(req.body.year, req.body.semester);
    if (semesterChecked)
      return res.status(422).json({ message: semesterChecked });
  }

  if (req.body.type === "Subject") {
    const nameChecked = nameCheck(req.body.name, req.body.type);
    if (nameChecked) return res.status(422).json({ message: nameChecked });
  }

  next();
};

export const isUpdationValid = (req, res, next) => {
  if (
    req.body.type === "Student" ||
    req.body.type === "Admin" ||
    req.body.type === "Teacher"
  ) {
    const firstNameChecked = nameCheck(req.body.firstName, "First");
    if (firstNameChecked)
      return res.status(422).json({ message: firstNameChecked });

    const lastNameChecked = nameCheck(req.body.lastName, "Last");
    if (lastNameChecked)
      return res.status(422).json({ message: lastNameChecked });

    const aadharChecked = aadharCheck(req.body.aadhar);
    if (aadharChecked) return res.status(422).json({ message: aadharChecked });

    const emailChecked = emailCheck(req.body.email);
    if (emailChecked) return res.status(422).json({ message: emailChecked });

    const mobileChecked = mobileCheck(req.body.mobile);
    if (mobileChecked) return res.status(422).json({ message: mobileChecked });
  }

  if (
    req.body.type === "Student" ||
    req.body.type === "Teacher" ||
    req.body.type === "Subject"
  ) {
    const departmentChecked = departmentCheck(req.body.department);
    if (departmentChecked)
      return res.status(422).json({ message: departmentChecked });
  }

  if (req.body.type === "Student" || req.body.type === "Subject") {
    const yearChecked = yearCheck(req.body.year);
    if (yearChecked) return res.status(422).json({ message: yearChecked });

    const semesterChecked = semesterCheck(req.body.year, req.body.semester);
    if (semesterChecked)
      return res.status(422).json({ message: semesterChecked });
  }

  if (req.body.type === "Subject") {
    const nameChecked = nameCheck(req.body.name, req.body.type);
    if (nameChecked) return res.status(422).json({ message: nameChecked });
  }

  next();
};
