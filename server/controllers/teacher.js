import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import Subject from "../models/subject.js";
import Mark from "../models/mark.js";
import Attendance from "../models/attendance.js";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";

import { passwordCheck, dateCheck } from "../utils/check.js";

dotenv.config();

export const login = async (req, res, next) => {
  try {
    const passwordChecked = passwordCheck(req.body.password);

    if (passwordChecked)
      return res.status(422).json({ message: passwordChecked });

    const teacher = await Teacher.findOne({
      registrationID: req.body.registrationID,
    });

    if (!teacher)
      return res.status(422).json({
        message: `Teacher ID ${req.body.registrationID} is not valid`,
      });

    const password = await bcrypt.compare(req.body.password, teacher.password);

    if (!password)
      return res.status(404).json({ message: "Passwords did not match" });

    const token = jwt.sign(
      { registrationID: teacher.registrationID },
      process.env.JWT,
      { expiresIn: "1h" }
    );

    if (token) {
      return res.status(200).json({ token, teacher });
    } else {
      return res.status(404).json({ message: "Could not verify" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getStudentsForAttendance = async (req, res, next) => {
  try {
    const subject = await Subject.findOne({
      registrationID: req.body.subjectID,
    });

    if (!subject)
      return res.status(404).json({
        message: `Subject ID ${req.body.subjectID} is not valid`,
      });

    const students = await Student.find({
      department: subject.department,
      year: subject.year,
      semester: subject.semester,
    });

    if (students.length) {
      return res.status(201).json({ students });
    } else {
      return res.status(404).json({ message: "Could not get students" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const markAttendance = async (req, res, next) => {
  try {
    const dateChecked = dateCheck(req.body.date);

    if (dateChecked) return res.status(422).json({ message: dateChecked });

    const attendance = new Attendance({
      date: req.body.date,
      subjectID: req.body.subjectID,
      studentIDs: req.body.studentIDs,
    });

    const addedAttendance = await attendance.save();

    if (addedAttendance) {
      return res.status(201).json({
        message: "Attendance added successfully",
      });
    } else {
      return res.status(404).json({ message: "Adding Attendance Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getStudentsForTestMarks = async (req, res, next) => {
  try {
    const subject = await Subject.findOne({
      registrationID: req.body.subjectID,
    });

    if (!subject)
      return res.status(404).json({
        message: `Subject ID ${req.body.subjectID} is not valid`,
      });

    const students = await Student.find({
      department: subject.department,
      year: subject.year,
      semester: subject.semester,
    });

    if (students.length) {
      return res.status(201).json({ students });
    } else {
      return res.status(404).json({ message: "Could not get students" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const giveMarks = async (req, res, next) => {
  try {
    const studentDatas = req.body.studentData;

    for (let i = 0; i < studentDatas.length; i++) {
      const studentData = studentDatas[i];

      if (studentData.total > req.body.outOf)
        return res.status(404).json({
          message: `Student ID ${studentData.studentID} was given total ${studentData.total} which is more than out of ${req.body.outOf}`,
        });
    }

    for (let i = 0; i < studentDatas.length; i++) {
      const studentData = studentDatas[i];

      if (i === 0) {
        const markAlreadyAdded = await Mark.findOne({
          studentID: studentData.studentID,
          test: req.body.test,
          subjectID: req.body.subjectID,
        });

        if (markAlreadyAdded)
          return res
            .status(422)
            .json({ message: "Marks Already Added for students" });
      }

      const mark = new Mark({
        studentID: studentData.studentID,
        total: studentData.total,
        test: req.body.test,
        subjectID: req.body.subjectID,
        outOf: req.body.outOf,
      });

      const addedMark = await mark.save();

      if (!addedMark)
        return res.status(404).json({ message: "Adding Marks Failed" });
    }

    return res.status(201).json({
      message: "Marks added successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const updateMark = async (req, res, next) => {
  try {
    const mark = await Mark.findOneAndUpdate(
      {
        studentID: req.body.studentID,
        subjectID: req.body.subjectID,
        test: req.body.test,
      },
      {
        total: req.body.total,
      },
      { new: true }
    );

    if (mark) {
      return res.status(201).json({
        mark,
        message: `Mark updated successfully`,
      });
    } else {
      return res.status(404).json({ message: "Updating Mark Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};
