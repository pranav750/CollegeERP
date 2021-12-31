import * as constants from "../constants/constants";

const initialState = {
  user: null,
  token: null,
  type: null,
  errorMessage: null,
  successMessage: null,
  loading: false,
};

const storedData = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : initialState;

const profileReducer = (state = storedData, action) => {
  switch (action.type) {
    case constants.LOGIN:
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return action.payload;

    case constants.LOGOUT:
      localStorage.removeItem("profile");
      return initialState;

    case constants.SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
      };

    case constants.RESET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: null,
      };

    case constants.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case constants.RESET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
      };

    case constants.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case constants.RESET_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default profileReducer;
