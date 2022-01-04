import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/teacher" });

API.interceptors.request.use((req) => {
  const locallyStored = JSON.parse(localStorage.getItem("profile"));

  if (
    locallyStored &&
    locallyStored.type === "Teacher" &&
    locallyStored.token
  ) {
    req.headers.Authorization = `Bearer ${locallyStored.token}`;
  }
  return req;
});

export const teacherLogin = (form) => API.post("/login", form);
export const teacherRegister = (form) => API.post("/register", form);
export const getStudentsForAttendance = (form) =>
  API.post("/get-students-for-attendance", form);
export const markAttendance = (form) => API.post("/mark-attendance", form);
export const getStudentsForTestMarks = (form) =>
  API.post("/get-students-for-test-marks", form);
export const giveMarks = (form) => API.post("/give-marks", form);
export const updateMark = (form) => API.post("/update-mark", form);
