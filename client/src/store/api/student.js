import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/student" });

API.interceptors.request.use((req) => {
  const locallyStored = JSON.parse(localStorage.getItem("profile"));

  if (
    locallyStored &&
    locallyStored.type === "Student" &&
    locallyStored.token
  ) {
    req.headers.Authorization = `Bearer ${locallyStored.token}`;
  }
  return req;
});

export const studentLogin = (form) => API.post("/login", form);
export const studentRegister = (form) => API.post("/register", form);
export const getMarks = (form, registrationID) =>
  API.post(`/get-marks/${registrationID}`, form);
export const getAttendance = (form, registrationID) =>
  API.post(`/get-attendance/${registrationID}`, form);
