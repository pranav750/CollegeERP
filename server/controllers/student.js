import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import Subject from "../models/subject.js";
import Mark from "../models/mark.js";
import Attendance from "../models/attendance.js";
import Student from "../models/student.js";

import { passwordCheck } from "../utils/check.js";

dotenv.config();

export const login = async (req, res, next) => {
  try {
    const passwordChecked = passwordCheck(req.body.password);

    if (passwordChecked)
      return res.status(422).json({ message: passwordChecked });

    const student = await Student.findOne({
      registrationID: req.body.registrationID,
    });

    if (!student)
      return res.status(422).json({
        message: `Student ID ${req.body.registrationID} is not valid`,
      });

    const password = await bcrypt.compare(req.body.password, student.password);

    if (!password)
      return res.status(404).json({ message: "Passwords did not match" });

    const token = jwt.sign(
      { registrationID: student.registrationID },
      process.env.JWT,
      { expiresIn: "1h" }
    );

    if (token) {
      return res.status(200).json({ token, student });
    } else {
      return res.status(404).json({ message: "Could not verify" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getMarks = async (req, res, next) => {
  try {
    const mark = await Mark.findOne({
      studentID: req.params.registrationID,
      test: req.body.test,
      subjectID: req.body.subjectID,
    });

    if (mark) {
      return res.status(201).json({
        message: `You have ${mark.total} out of ${mark.outOf} in test ${mark.test} in subject with ID ${mark.subjectID}`,
      });
    } else {
      return res.status(404).json({
        message: "Could not find marks",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getAttendance = async (req, res, next) => {
  try {
    const attendance = await Attendance.findOne({
      date: req.body.date,
      subjectID: req.body.subjectID,
    });

    if (!attendance)
      return res.status(422).json({
        message: `No attendance marked on day ${req.body.date} for subject with ID ${req.body.subjectID}`,
      });

    const present = attendance.studentIDs.includes(req.params.registrationID);

    if (present)
      return res
        .status(201)
        .json({
          message: `Student ID ${req.params.registrationID} was present`,
        });
    else
      return res
        .status(201)
        .json({
          message: `Student ID ${req.params.registrationID} was absent`,
        });
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};
