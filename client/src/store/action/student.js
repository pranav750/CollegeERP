import * as API from "../api/student";
import * as constants from "../constants/constants";

export const studentLogin = (form, navigate) => async (dispatch) => {
  try {
    const response = await API.studentLogin(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({
      type: constants.LOGIN,
      payload: {
        user: response.data.student,
        type: "Student",
        token: response.data.token,
        errorMessage: null,
        successMessage: null,
        loading: false,
      },
    });

    navigate(`/student/home/${response.data.student.registrationID}`);
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

export const studentRegister = (form) => async (dispatch) => {
  try {
    const response = await API.studentRegister(form);

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

export const getMarks = (form, registrationID) => async (dispatch) => {
  try {
    const response = await API.getMarks(form, registrationID);

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

export const getAttendance = (form, registrationID) => async (dispatch) => {
  try {
    const response = await API.getAttendance(form, registrationID);

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
