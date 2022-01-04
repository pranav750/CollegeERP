import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING } from "../../../store/constants/constants";
import { getStudentsForAttendance } from "../../../store/action/teacher";
import CRUDLayout from "../../Form/CRUDLayout/CRUDLayout";
import Form from "./Form";
import Results from "./Results";
import useStyles from "./styles";

const MarkAttendance = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.data.students);
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
    dispatch(getStudentsForAttendance(form));
  };

  return (
    <div className={classes.outside}>
      <CRUDLayout user="Student">
        {students.length > 0 ? (
          <Results form={form} />
        ) : (
          <Form
            form={form}
            inputChangeHandler={inputChangeHandler}
            submitHandler={submitHandler}
          />
        )}
      </CRUDLayout>
    </div>
  );
};

export default MarkAttendance;
