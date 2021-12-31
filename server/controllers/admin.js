import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import Admin from "../models/admin.js";
import Subject from "../models/subject.js";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";

import {
  createAdminID,
  createSubjectID,
  createStudentID,
  createTeacherID,
} from "../utils/createID.js";

import { passwordCheck } from "../utils/check.js";

dotenv.config();

export const login = async (req, res, next) => {
  try {
    const passwordChecked = passwordCheck(req.body.password);

    if (passwordChecked)
      return res.status(422).json({ message: passwordChecked });

    const admin = await Admin.findOne({
      registrationID: req.body.registrationID,
    });

    if (!admin)
      return res.status(422).json({
        message: `Admin ID ${req.body.registrationID} is not valid`,
      });

    const password = await bcrypt.compare(req.body.password, admin.password);

    if (!password)
      return res.status(404).json({ message: "Passwords did not match" });

    const token = jwt.sign(
      { registrationID: admin.registrationID },
      process.env.JWT,
      { expiresIn: "1h" }
    );

    if (token) {
      return res.status(200).json({ token, admin });
    } else {
      return res.status(404).json({ message: "Could not create token" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const addAdmin = async (req, res, next) => {
  try {
    const admin = new Admin({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      aadhar: req.body.aadhar,
      registrationID: await createAdminID(),
      password: await bcrypt.hash(req.body.password, 12),
      email: req.body.email,
      mobile: req.body.mobile,
    });

    const addedAdmin = await admin.save();

    if (addedAdmin) {
      return res.status(201).json({
        admin: addedAdmin,
        message: `Admin successfully registered with ID ${addedAdmin.registrationID}`,
      });
    } else {
      return res.status(404).json({ message: "Adding Admin Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const addStudent = async (req, res, next) => {
  try {
    const student = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      aadhar: req.body.aadhar,
      registrationID: await createStudentID(),
      password: await bcrypt.hash(req.body.password, 12),
      department: req.body.department,
      email: req.body.email,
      mobile: req.body.mobile,
      year: req.body.year,
      semester: req.body.semester,
    });

    const addedStudent = await student.save();

    if (addedStudent) {
      return res.status(201).json({
        student: addedStudent,
        message: `Student successfully registered with ID ${addedStudent.registrationID}`,
      });
    } else {
      return res.status(404).json({ message: "Adding Student Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const addTeacher = async (req, res, next) => {
  try {
    const teacher = new Teacher({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      aadhar: req.body.aadhar,
      registrationID: await createTeacherID(),
      password: await bcrypt.hash(req.body.password, 12),
      department: req.body.department,
      email: req.body.email,
      mobile: req.body.mobile,
    });

    const addedTeacher = await teacher.save();

    if (addedTeacher) {
      return res.status(201).json({
        teacher: addedTeacher,
        message: `Teacher successfully registered with ID ${addedTeacher.registrationID}`,
      });
    } else {
      return res.status(404).json({ message: "Adding Teacher Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const addSubject = async (req, res, next) => {
  try {
    const subject = new Subject({
      name: req.body.name,
      department: req.body.department,
      year: req.body.year,
      semester: req.body.semester,
      registrationID: await createSubjectID(),
    });

    const addedSubject = await subject.save();

    if (addedSubject) {
      return res.status(201).json({
        subject: addedSubject,
        message: `Subject successfully registered with ID ${addedSubject.registrationID}`,
      });
    } else {
      return res.status(404).json({ message: "Adding Subject Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({
      registrationID: req.params.registrationID,
    });

    if (admin) {
      return res.status(201).json({ admin });
    } else {
      return res.status(404).json({
        message: `Admin ID ${req.params.registrationID} is not valid`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getStudent = async (req, res, next) => {
  try {
    const student = await Student.findOne({
      registrationID: req.params.registrationID,
    });

    if (student) {
      return res.status(201).json({ student });
    } else {
      return res.status(404).json({
        message: `Student ID ${req.params.registrationID} is not valid`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findOne({
      registrationID: req.params.registrationID,
    });

    if (teacher) {
      return res.status(201).json({ teacher });
    } else {
      return res.status(404).json({
        message: `Teacher ID ${req.params.registrationID} is not valid`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getSubject = async (req, res, next) => {
  try {
    const subject = await Subject.findOne({
      registrationID: req.params.registrationID,
    });

    if (subject) {
      return res.status(201).json({ subject });
    } else {
      return res.status(404).json({
        message: `Subject ID ${req.params.registrationID} is not valid`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();

    if (admins.length) {
      return res.status(201).json({ admins });
    } else {
      return res.status(404).json({ message: "Could not get admins" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();

    if (students.length) {
      return res.status(201).json({ students });
    } else {
      return res.status(404).json({ message: "Could not get students" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();

    if (teachers.length) {
      return res.status(201).json({ teachers });
    } else {
      return res.status(404).json({ message: "Could not get teachers" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const getSubjects = async (req, res, next) => {
  try {
    const subjects = await Subject.find();

    if (subjects.length) {
      return res.status(201).json({ subjects });
    } else {
      return res.status(404).json({ message: "Could not get subjects" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const deleteAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOneAndDelete({
      registrationID: req.params.registrationID,
    });

    if (admin) {
      return res.status(201).json({
        message: `Admin ID ${admin.registrationID} deleted successfully`,
      });
    } else {
      return res.status(404).json({
        message: `Could not delete Admin ID ${req.params.registrationID}`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error occured" });
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findOneAndDelete({
      registrationID: req.params.registrationID,
    });

    if (student) {
      return res.status(201).json({
        message: `Student ID ${student.registrationID} deleted successfully`,
      });
    } else {
      return res.status(404).json({
        message: `Could not delete Student ID ${req.params.registrationID}`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error occured" });
  }
};

export const deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findOneAndDelete({
      registrationID: req.params.registrationID,
    });

    if (teacher) {
      return res.status(201).json({
        message: `Teacher ID ${teacher.registrationID} deleted successfully`,
      });
    } else {
      return res.status(404).json({
        message: `Could not delete Teacher ID ${req.params.registrationID}`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error occured" });
  }
};

export const deleteSubject = async (req, res, next) => {
  try {
    const subject = await Subject.findOneAndDelete({
      registrationID: req.params.registrationID,
    });

    if (subject) {
      return res.status(201).json({
        message: `Subject ID ${subject.registrationID} deleted successfully`,
      });
    } else {
      return res.status(404).json({
        message: `Could not delete Subject ID ${req.params.registrationID}`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error occured" });
  }
};

export const updateAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOneAndUpdate(
      { registrationID: req.params.registrationID },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        aadhar: req.body.aadhar,
        email: req.body.email,
        mobile: req.body.mobile,
      },
      { new: true }
    );

    if (admin) {
      return res.status(201).json({
        admin,
        message: `Admin ID ${admin.registrationID} updated successfully`,
      });
    } else {
      return res.status(404).json({ message: "Updating Admin Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findOneAndUpdate(
      { registrationID: req.params.registrationID },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        aadhar: req.body.aadhar,
        email: req.body.email,
        department: req.body.department,
        mobile: req.body.mobile,
        year: req.body.year,
        semester: req.body.semester,
      },
      { new: true }
    );

    if (student) {
      return res.status(201).json({
        student,
        message: `Student ID ${student.registrationID} updated successfully`,
      });
    } else {
      return res.status(404).json({ message: "Updating Student Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const updateTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findOneAndUpdate(
      { registrationID: req.params.registrationID },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        aadhar: req.body.aadhar,
        email: req.body.email,
        department: req.body.department,
        mobile: req.body.mobile,
      },
      { new: true }
    );

    if (teacher) {
      return res.status(201).json({
        teacher,
        message: `Teacher ID ${teacher.registrationID} updated successfully`,
      });
    } else {
      return res.status(404).json({ message: "Updating Teacher Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};

export const updateSubject = async (req, res, next) => {
  try {
    const subject = await Subject.findOneAndUpdate(
      { registrationID: req.params.registrationID },
      {
        name: req.body.name,
        department: req.body.department,
        year: req.body.year,
        semester: req.body.semester,
      },
      { new: true }
    );

    if (subject) {
      return res.status(201).json({
        subject,
        message: `Subject ID ${subject.registrationID} updated successfully`,
      });
    } else {
      return res.status(404).json({ message: "Updating Subject Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Occured" });
  }
};
