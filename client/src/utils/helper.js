import admin from "../images/admin.svg";
import student from "../images/student.svg";
import teacher from "../images/teacher.svg";
import subject from "../images/subject.svg";

export const getImage = (imageOf) => {
  let image;
  if (imageOf === "Student") image = student;
  else if (imageOf === "Admin") image = admin;
  else if (imageOf === "Teacher") image = teacher;
  else if (imageOf === "Subject") image = subject;
  return image;
};

export const convertToStudentForm = (form) => {
  const result = {
    password: form.password,
    firstName: form.firstName,
    lastName: form.lastName,
    aadhar: form.aadhar,
    mobile: form.mobile,
    confirmPassword: form.confirmPassword,
    email: form.email,
    year: form.year,
    semester: form.semester,
    type: form.type,
    department: form.department,
  };
  return result;
};

export const convertToAdminForm = (form) => {
  const result = {
    password: form.password,
    firstName: form.firstName,
    lastName: form.lastName,
    aadhar: form.aadhar,
    mobile: form.mobile,
    confirmPassword: form.confirmPassword,
    email: form.email,
    type: form.type,
  };
  return result;
};

export const convertToTeacherForm = (form) => {
  const result = {
    password: form.password,
    firstName: form.firstName,
    lastName: form.lastName,
    aadhar: form.aadhar,
    mobile: form.mobile,
    confirmPassword: form.confirmPassword,
    email: form.email,
    type: form.type,
    department: form.department,
  };
  return result;
};

export const convertToSubjectForm = (form) => {
  const result = {
    name: form.name,
    year: form.year,
    semester: form.semester,
    type: form.type,
    department: form.department,
  };
  return result;
};

export const convertToUpdateStudentForm = (form) => {
  const result = {
    firstName: form.firstName,
    lastName: form.lastName,
    aadhar: form.aadhar,
    mobile: form.mobile,
    email: form.email,
    year: form.year,
    semester: form.semester,
    type: form.type,
    department: form.department,
  };
  return result;
};

export const convertToUpdateAdminForm = (form) => {
  const result = {
    firstName: form.firstName,
    lastName: form.lastName,
    aadhar: form.aadhar,
    mobile: form.mobile,
    email: form.email,
    type: form.type,
  };
  return result;
};

export const convertToUpdateTeacherForm = (form) => {
  const result = {
    firstName: form.firstName,
    lastName: form.lastName,
    aadhar: form.aadhar,
    mobile: form.mobile,
    email: form.email,
    type: form.type,
    department: form.department,
  };
  return result;
};

export const convertToUpdateSubjectForm = (form) => {
  const result = {
    name: form.name,
    year: form.year,
    semester: form.semester,
    type: form.type,
    department: form.department,
  };
  return result;
};
