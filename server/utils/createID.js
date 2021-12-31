import Student from "../models/student.js";
import Admin from "../models/admin.js";
import Subject from "../models/subject.js";
import Teacher from "../models/teacher.js";

export const createStudentID = async () => {
  let id = "STU";

  const date = new Date();
  const year = date.getFullYear().toString().substring(2);
  id += year;

  while (true) {
    const random = Math.random().toString().substring(2, 8);
    const possibleID = id + random;
    const IDPresent = await Student.findOne({ registrationID: possibleID });

    if (!IDPresent) {
      id = possibleID;
      break;
    }
  }

  return id;
};

export const createTeacherID = async () => {
  let id = "TEA";

  const date = new Date();
  const year = date.getFullYear().toString().substring(2);
  id += year;

  while (true) {
    const random = Math.random().toString().substring(2, 8);
    const possibleID = id + random;
    const IDPresent = await Teacher.findOne({ registrationID: possibleID });

    if (!IDPresent) {
      id = possibleID;
      break;
    }
  }

  return id;
};

export const createAdminID = async () => {
  let id = "ADM";

  const date = new Date();
  const year = date.getFullYear().toString().substring(2);
  id += year;
  console.log(id);

  while (true) {
    const random = Math.random().toString().substring(2, 8);
    const possibleID = id + random;
    const IDPresent = await Admin.findOne({ registrationID: possibleID });

    if (!IDPresent) {
      id = possibleID;
      break;
    }
  }

  return id;
};

export const createSubjectID = async () => {
  let id = "SUB";

  const date = new Date();
  const year = date.getFullYear().toString().substring(2);
  id += year;

  while (true) {
    const random = Math.random().toString().substring(2, 8);
    const possibleID = id + random;
    const IDPresent = await Subject.findOne({ registrationID: possibleID });

    if (!IDPresent) {
      id = possibleID;
      break;
    }
  }

  return id;
};
