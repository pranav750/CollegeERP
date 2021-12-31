import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING } from "../../../store/constants/constants";
import {
  getAdmin,
  getStudent,
  getSubject,
  getTeacher,
} from "../../../store/action/admin";
import ButtonGrp from "../../Form/ButtonGrp";
import CRUDLayout from "../../Form/CRUDLayout/CRUDLayout";
import Form from "./Form";
import useStyles from "./styles";

const Get = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.profile.type);
  const [buttonType, setButtonType] = useState(type);
  const initialState = {
    registrationID: "",
    type: buttonType,
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
      dispatch(getAdmin(form.registrationID));
    } else if (buttonType === "Student") {
      dispatch(getStudent(form.registrationID));
    } else if (buttonType === "Teacher") {
      dispatch(getTeacher(form.registrationID));
    } else if (buttonType === "Subject") {
      dispatch(getSubject(form.registrationID));
    }
  };

  return (
    <div className={classes.outside}>
      <ButtonGrp
        operation="Get"
        operationInfo="Here you can get anything from the database"
        setButtonType={setButtonType}
        initialState={initialState}
        setForm={setForm}
      />

      <CRUDLayout user={buttonType}>
        <Form
          form={form}
          inputChangeHandler={inputChangeHandler}
          submitHandler={submitHandler}
        />
      </CRUDLayout>
    </div>
  );
};

export default Get;
