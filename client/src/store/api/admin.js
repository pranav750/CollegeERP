import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/admin" });

API.interceptors.request.use((req) => {
  const locallyStored = JSON.parse(localStorage.getItem("profile"));

  if (locallyStored && locallyStored.type === "Admin" && locallyStored.token) {
    req.headers.Authorization = `Bearer ${locallyStored.token}`;
  }
  return req;
});

export const adminLogin = (form) => API.post("/login", form);
export const adminRegister = (form) => API.post("/register", form);
export const addAdmin = (form) => API.post("/add-admin", form);
export const addStudent = (form) => API.post("/add-student", form);
export const addTeacher = (form) => API.post("/add-teacher", form);
export const addSubject = (form) => API.post("/add-subject", form);
export const getAdmin = (registrationID) =>
  API.get(`/get-admin/${registrationID}`);
export const getStudent = (registrationID) =>
  API.get(`/get-student/${registrationID}`);
export const getTeacher = (registrationID) =>
  API.get(`/get-teacher/${registrationID}`);
export const getSubject = (registrationID) =>
  API.get(`/get-subject/${registrationID}`);
export const getAdmins = () => API.get("/get-admins");
export const getStudents = () => API.get("/get-students");
export const getTeachers = () => API.get("/get-teachers");
export const getSubjects = () => API.get("/get-subjects");
export const deleteAdmin = (registrationID) =>
  API.delete(`/delete-admin/${registrationID}`);
export const deleteStudent = (registrationID) =>
  API.delete(`/delete-student/${registrationID}`);
export const deleteTeacher = (registrationID) =>
  API.delete(`/delete-teacher/${registrationID}`);
export const deleteSubject = (registrationID) =>
  API.delete(`/delete-subject/${registrationID}`);
export const updateAdmin = (registrationID, form) =>
  API.put(`/update-admin/${registrationID}`, form);
export const updateStudent = (registrationID, form) =>
  API.put(`/update-student/${registrationID}`, form);
export const updateTeacher = (registrationID, form) =>
  API.put(`/update-teacher/${registrationID}`, form);
export const updateSubject = (registrationID, form) =>
  API.put(`/update-subject/${registrationID}`, form);
