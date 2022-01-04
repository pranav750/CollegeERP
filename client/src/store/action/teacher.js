import * as API from "../api/teacher";
import * as constants from "../constants/constants";

export const teacherLogin = (form, navigate) => async (dispatch) => {
  try {
    const response = await API.teacherLogin(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.LOGIN,
      payload: {
        user: response.data.teacher,
        type: "Teacher",
        token: response.data.token,
        errorMessage: null,
        successMessage: null,
        loading: false,
      },
    });

    navigate(`/teacher/home/${response.data.teacher.registrationID}`);
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

export const teacherRegister = (form) => async (dispatch) => {
  try {
    const response = await API.teacherRegister(form);

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

export const getStudentsForAttendance = (form) => async (dispatch) => {
  try {
    const response = await API.getStudentsForAttendance(form);

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

export const markAttendance = (form) => async (dispatch) => {
  try {
    const response = await API.markAttendance(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENTS });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENTS });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const getStudentsForTestMarks = (form) => async (dispatch) => {
  try {
    const response = await API.getStudentsForTestMarks(form);

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

export const giveMarks = (form) => async (dispatch) => {
  try {
    const response = await API.giveMarks(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENTS });

    dispatch({
      type: constants.SET_SUCCESS_MESSAGE,
      payload: response.data.message,
    });
  } catch (error) {
    let message = error.message;
    if (error?.response?.data?.message) message = error.response.data.message;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.CLEAR_STUDENTS });

    dispatch({
      type: constants.SET_ERROR_MESSAGE,
      payload: message,
    });
  }
};

export const updateMark = (form) => async (dispatch) => {
  try {
    const response = await API.updateMark(form);

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
