import * as API from "../api/admin";
import * as constants from "../constants/constants";

export const adminLogin = (form, navigate) => async (dispatch) => {
  try {
    const response = await API.adminLogin(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.LOGIN,
      payload: {
        user: response.data.admin,
        type: "Admin",
        token: response.data.token,
        errorMessage: null,
        successMessage: null,
        loading: false,
      },
    });

    navigate(`/admin/home/${response.data.admin.registrationID}`);
  } catch (error) {
    console.log(error.response);
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const adminRegister = (form) => async (dispatch) => {
  try {
    const response = await API.adminRegister(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const addAdmin = (form) => async (dispatch) => {
  try {
    const response = await API.addAdmin(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const addStudent = (form) => async (dispatch) => {
  try {
    const response = await API.addStudent(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const addTeacher = (form) => async (dispatch) => {
  try {
    const response = await API.addTeacher(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const addSubject = (form) => async (dispatch) => {
  try {
    const response = await API.addSubject(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getAdmin = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getAdmin(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_ADMIN,
      payload: response.data.admin,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getStudent = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getStudent(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_STUDENT,
      payload: response.data.student,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getTeacher = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getTeacher(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_TEACHER,
      payload: response.data.teacher,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getSubject = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getSubject(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_SUBJECT,
      payload: response.data.subject,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getAdmins = () => async (dispatch) => {
  try {
    const response = await API.getAdmins();

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_ADMINS,
      payload: response.data.admins,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getStudents = () => async (dispatch) => {
  try {
    const response = await API.getStudents();

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_STUDENTS,
      payload: response.data.students,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getTeachers = () => async (dispatch) => {
  try {
    const response = await API.getTeachers();

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_TEACHERS,
      payload: response.data.teachers,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getSubjects = () => async (dispatch) => {
  try {
    const response = await API.getSubjects();

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_SUBJECTS,
      payload: response.data.subjects,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getAdminToDelete = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getAdmin(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_ADMIN_TO_DELETE,
      payload: response.data.admin,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getStudentToDelete = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getStudent(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_STUDENT_TO_DELETE,
      payload: response.data.student,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getTeacherToDelete = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getTeacher(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_TEACHER_TO_DELETE,
      payload: response.data.teacher,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getSubjectToDelete = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getSubject(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_SUBJECT_TO_DELETE,
      payload: response.data.subject,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const deleteAdmin = (registrationID) => async (dispatch) => {
  try {
    const response = await API.deleteAdmin(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_ADMIN_TO_DELETE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_ADMIN_TO_DELETE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const deleteStudent = (registrationID) => async (dispatch) => {
  try {
    const response = await API.deleteStudent(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENT_TO_DELETE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENT_TO_DELETE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const deleteTeacher = (registrationID) => async (dispatch) => {
  try {
    const response = await API.deleteTeacher(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_TEACHER_TO_DELETE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_TEACHER_TO_DELETE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const deleteSubject = (registrationID) => async (dispatch) => {
  try {
    const response = await API.deleteSubject(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_SUBJECT_TO_DELETE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_SUBJECT_TO_DELETE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getAdminToUpdate = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getAdmin(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_ADMIN_TO_UPDATE,
      payload: response.data.admin,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getStudentToUpdate = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getStudent(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_STUDENT_TO_UPDATE,
      payload: response.data.student,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getTeacherToUpdate = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getTeacher(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_TEACHER_TO_UPDATE,
      payload: response.data.teacher,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getSubjectToUpdate = (registrationID) => async (dispatch) => {
  try {
    const response = await API.getSubject(registrationID);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.GET_SUBJECT_TO_UPDATE,
      payload: response.data.subject,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const updateAdmin = (registrationID, form) => async (dispatch) => {
  try {
    const response = await API.updateAdmin(registrationID, form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_ADMIN_TO_UPDATE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_ADMIN_TO_UPDATE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const updateStudent = (registrationID, form) => async (dispatch) => {
  try {
    const response = await API.updateStudent(registrationID, form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENT_TO_UPDATE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENT_TO_UPDATE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const updateTeacher = (registrationID, form) => async (dispatch) => {
  try {
    const response = await API.updateTeacher(registrationID, form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_TEACHER_TO_UPDATE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_TEACHER_TO_UPDATE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const updateSubject = (registrationID, form) => async (dispatch) => {
  try {
    const response = await API.updateSubject(registrationID, form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_SUBJECT_TO_UPDATE });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_SUBJECT_TO_UPDATE });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};
