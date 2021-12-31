import * as constants from "../constants/constants";

const initialState = {
  admin: null,
  student: null,
  teacher: null,
  subject: null,
  admins: [],
  students: [],
  teachers: [],
  subjects: [],
  adminToDelete: null,
  studentToDelete: null,
  teacherToDelete: null,
  subjectToDelete: null,
  adminToUpdate: null,
  studentToUpdate: null,
  teacherToUpdate: null,
  subjectToUpdate: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };

    case constants.GET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };

    case constants.GET_TEACHER:
      return {
        ...state,
        teacher: action.payload,
      };

    case constants.GET_SUBJECT:
      return {
        ...state,
        subject: action.payload,
      };

    case constants.CLEAR_ADMIN:
      return {
        ...state,
        admin: null,
      };

    case constants.CLEAR_STUDENT:
      return {
        ...state,
        student: null,
      };

    case constants.CLEAR_TEACHER:
      return {
        ...state,
        teacher: null,
      };

    case constants.CLEAR_SUBJECT:
      return {
        ...state,
        subject: null,
      };

    case constants.GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
      };

    case constants.GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    case constants.GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };

    case constants.GET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
      };

    case constants.CLEAR_ADMINS:
      return {
        ...state,
        admins: [],
      };

    case constants.CLEAR_STUDENTS:
      return {
        ...state,
        students: [],
      };

    case constants.CLEAR_TEACHERS:
      return {
        ...state,
        teachers: [],
      };

    case constants.CLEAR_SUBJECTS:
      return {
        ...state,
        subjects: [],
      };

    case constants.GET_ADMIN_TO_DELETE:
      return {
        ...state,
        adminToDelete: action.payload,
      };

    case constants.GET_STUDENT_TO_DELETE:
      return {
        ...state,
        studentToDelete: action.payload,
      };

    case constants.GET_TEACHER_TO_DELETE:
      return {
        ...state,
        teacherToDelete: action.payload,
      };

    case constants.GET_SUBJECT_TO_DELETE:
      return {
        ...state,
        subjectToDelete: action.payload,
      };

    case constants.CLEAR_ADMIN_TO_DELETE:
      return {
        ...state,
        adminToDelete: null,
      };

    case constants.CLEAR_STUDENT_TO_DELETE:
      return {
        ...state,
        studentToDelete: null,
      };

    case constants.CLEAR_TEACHER_TO_DELETE:
      return {
        ...state,
        teacherToDelete: null,
      };

    case constants.CLEAR_SUBJECT_TO_DELETE:
      return {
        ...state,
        subjectToDelete: null,
      };

    case constants.GET_ADMIN_TO_UPDATE:
      return {
        ...state,
        adminToUpdate: action.payload,
      };

    case constants.GET_STUDENT_TO_UPDATE:
      return {
        ...state,
        studentToUpdate: action.payload,
      };

    case constants.GET_TEACHER_TO_UPDATE:
      return {
        ...state,
        teacherToUpdate: action.payload,
      };

    case constants.GET_SUBJECT_TO_UPDATE:
      return {
        ...state,
        subjectToUpdate: action.payload,
      };

    case constants.CLEAR_ADMIN_TO_UPDATE:
      return {
        ...state,
        adminToUpdate: null,
      };

    case constants.CLEAR_STUDENT_TO_UPDATE:
      return {
        ...state,
        studentToUpdate: null,
      };

    case constants.CLEAR_TEACHER_TO_UPDATE:
      return {
        ...state,
        teacherToUpdate: null,
      };

    case constants.CLEAR_SUBJECT_TO_UPDATE:
      return {
        ...state,
        subjectToUpdate: null,
      };

    case constants.CLEAR_ALL_DATA:
      return initialState;

    default:
      return state;
  }
};

export default dataReducer;
