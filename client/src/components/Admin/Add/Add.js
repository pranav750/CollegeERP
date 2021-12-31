import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING } from "../../../store/constants/constants";
import {
  addAdmin,
  addStudent,
  addSubject,
  addTeacher,
} from "../../../store/action/admin";
import {
  convertToAdminForm,
  convertToStudentForm,
  convertToSubjectForm,
  convertToTeacherForm,
} from "../../../utils/helper";
import ButtonGrp from "../../Form/ButtonGrp";
import CRUDLayout from "../../Form/CRUDLayout/CRUDLayout";
import Form from "./Form";
import useStyles from "./styles";

const Add = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.profile.type);
  const [buttonType, setButtonType] = useState(type);
  const initialState = {
    password: "",
    name: "",
    firstName: "",
    lastName: "",
    aadhar: "",
    mobile: "",
    confirmPassword: "",
    email: "",
    year: "",
    semester: "",
    type: buttonType,
    department: "",
  };
  const [form, setForm] = useState(initialState);

  const inputChangeHandler = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: SET_LOADING });

    if (buttonType === "Admin") {
      const adminForm = convertToAdminForm(form);
      dispatch(addAdmin(adminForm));
    } else if (buttonType === "Student") {
      const studentForm = convertToStudentForm(form);
      dispatch(addStudent(studentForm));
    } else if (buttonType === "Teacher") {
      const teacherForm = convertToTeacherForm(form);
      dispatch(addTeacher(teacherForm));
    } else if (buttonType === "Subject") {
      const subjectForm = convertToSubjectForm(form);
      dispatch(addSubject(subjectForm));
    }
  };

  return (
    <div className={classes.outside}>
      <ButtonGrp
        operation="Add"
        operationInfo="Here you can add anything into the database"
        setButtonType={setButtonType}
        initialState={initialState}
        setForm={setForm}
      />

      <CRUDLayout user={buttonType}>
        <Form
          form={form}
          inputChangeHandler={inputChangeHandler}
          submitHandler={submitHandler}
          type={buttonType}
        />
      </CRUDLayout>
    </div>
  );
};

export default Add;
