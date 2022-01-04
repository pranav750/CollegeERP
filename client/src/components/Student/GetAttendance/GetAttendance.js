import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING } from "../../../store/constants/constants";
import { getAttendance } from "../../../store/action/student";
import CRUDLayout from "../../Form/CRUDLayout/CRUDLayout";
import Form from "./Form";
import useStyles from "./styles";

const GetAttendance = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const initialState = {
    date: "",
    subjectID: "",
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
    dispatch(getAttendance(form, user.registrationID));
  };

  return (
    <div className={classes.outside}>
      <CRUDLayout user="Student">
        <Form
          form={form}
          inputChangeHandler={inputChangeHandler}
          submitHandler={submitHandler}
        />
      </CRUDLayout>
    </div>
  );
};

export default GetAttendance;
