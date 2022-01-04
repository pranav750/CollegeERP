import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING } from "../../../store/constants/constants";
import { updateMark } from "../../../store/action/teacher";
import CRUDLayout from "../../Form/CRUDLayout/CRUDLayout";
import Form from "./Form";
import useStyles from "./styles";

const UpdateMark = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialState = {
    test: "",
    subjectID: "",
    studentID: "",
    total: 0,
    outOf: "",
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
    dispatch(updateMark(form));
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

export default UpdateMark;
