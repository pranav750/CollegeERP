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
  testCheck,
  outOfCheck,
  testAndOutOfCheck,
  totalCheck,
  dateCheck,
} from "../utils/check.js";

export const isRegistrationValid = async (req, res, next) => {
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

  if (req.body.type === "Admin") {
    const admin = await Admin.findOne({ aadhar: req.body.aadhar });
    if (admin)
      return res.status(422).json({
        message: `Admin with aadhar ${req.body.aadhar} already exists`,
      });
  } else if (req.body.type === "Student") {
    const student = await Student.findOne({ aadhar: req.body.aadhar });
    if (student)
      return res.status(422).json({
        message: `Student with aadhar ${req.body.aadhar} already exists`,
      });
  } else if (req.body.type === "Teacher") {
    const teacher = await Teacher.findOne({ aadhar: req.body.aadhar });
    if (teacher)
      return res.status(422).json({
        message: `Teacher with aadhar ${req.body.aadhar} already exists`,
      });
  } else if (req.body.type === "Subject") {
    const subject = await Subject.findOne({
      name: req.body.name,
      department: req.body.department,
    });
    if (subject)
      return res
        .status(422)
        .json({
          message: `Subject with name ${req.body.name} in department ${req.body.department} already exists`,
        });
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

export const isMarkUpdationValid = async (req, res, next) => {
  const testChecked = testCheck(req.body.test);
  if (testChecked) return res.status(422).json({ message: testChecked });

  const student = await Student.findOne({ registraionID: req.body.studentID });
  if (!student)
    return res
      .status(422)
      .json({ message: `Student ID ${req.body.studentID} is not valid` });

  const subject = await Subject.findOne({ registraionID: req.body.subjectID });
  if (!subject)
    return res
      .status(422)
      .json({ message: `Subject ID ${req.body.subjectID} is not valid` });

  const outOfChecked = outOfCheck(req.body.outOf);
  if (outOfChecked) return res.status(422).json({ message: outOfChecked });

  const testAndOutOfChecked = testAndOutOfCheck(req.body.test, req.body.outOf);
  if (testAndOutOfChecked)
    return res.status(422).json({ message: testAndOutOfChecked });

  const totalChecked = totalCheck(req.body.total, req.body.outOf);
  if (totalChecked) return res.status(422).json({ message: totalChecked });

  next();
};

export const isMarkAddtionValid = async (req, res, next) => {
  console.log(req.body);
  const testChecked = testCheck(req.body.test);
  if (testChecked) return res.status(422).json({ message: testChecked });

  const outOfChecked = outOfCheck(req.body.outOf);
  if (outOfChecked) return res.status(422).json({ message: outOfChecked });

  const testAndOutOfChecked = testAndOutOfCheck(req.body.test, req.body.outOf);
  if (testAndOutOfChecked)
    return res.status(422).json({ message: testAndOutOfChecked });

  next();
};
