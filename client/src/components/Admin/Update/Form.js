import { Fragment } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_ADMIN_TO_UPDATE,
  CLEAR_STUDENT_TO_UPDATE,
  CLEAR_TEACHER_TO_UPDATE,
  CLEAR_SUBJECT_TO_UPDATE,
} from "../../../store/constants/constants";
import FirstName from "../../InputFields/FirstName";
import LastName from "../../InputFields/LastName";
import Aadhar from "../../InputFields/Aadhar";
import Mobile from "../../InputFields/Mobile";
import Email from "../../InputFields/Email";
import Name from "../../InputFields/Name";
import Department from "../../InputFields/Select/Department";
import Semester from "../../InputFields/Select/Semester";
import Year from "../../InputFields/Select/Year";
import RegistrationID from "../../InputFields/RegistrationID";
import Submit from "../../Form/Submit";
import useStyles from "./styles";

const Form = ({ form, inputChangeHandler, submitHandler }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const adminToUpdate = useSelector((state) => state.data.adminToUpdate);
  const studentToUpdate = useSelector((state) => state.data.studentToUpdate);
  const teacherToUpdate = useSelector((state) => state.data.teacherToUpdate);
  const subjectToUpdate = useSelector((state) => state.data.subjectToUpdate);
  const updateData =
    adminToUpdate || studentToUpdate || teacherToUpdate || subjectToUpdate;

  console.log(adminToUpdate);
  const closeHandler = () => {
    if (adminToUpdate) {
      dispatch({ type: CLEAR_ADMIN_TO_UPDATE });
    } else if (studentToUpdate) {
      dispatch({ type: CLEAR_STUDENT_TO_UPDATE });
    } else if (teacherToUpdate) {
      dispatch({ type: CLEAR_TEACHER_TO_UPDATE });
    } else if (subjectToUpdate) {
      dispatch({ type: CLEAR_SUBJECT_TO_UPDATE });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {updateData ? (
        <Fragment>
          {adminToUpdate && (
            <Fragment>
              <FirstName form={form} inputChangeHandler={inputChangeHandler} />
              <LastName form={form} inputChangeHandler={inputChangeHandler} />
              <Aadhar form={form} inputChangeHandler={inputChangeHandler} />
              <Mobile form={form} inputChangeHandler={inputChangeHandler} />
              <Email form={form} inputChangeHandler={inputChangeHandler} />
            </Fragment>
          )}
          {studentToUpdate && (
            <Fragment>
              <FirstName form={form} inputChangeHandler={inputChangeHandler} />
              <LastName form={form} inputChangeHandler={inputChangeHandler} />
              <Aadhar form={form} inputChangeHandler={inputChangeHandler} />
              <Mobile form={form} inputChangeHandler={inputChangeHandler} />
              <Email form={form} inputChangeHandler={inputChangeHandler} />
              <Department form={form} inputChangeHandler={inputChangeHandler} />
              <Semester form={form} inputChangeHandler={inputChangeHandler} />
              <Year form={form} inputChangeHandler={inputChangeHandler} />
            </Fragment>
          )}
          {teacherToUpdate && (
            <Fragment>
              <FirstName form={form} inputChangeHandler={inputChangeHandler} />
              <LastName form={form} inputChangeHandler={inputChangeHandler} />
              <Aadhar form={form} inputChangeHandler={inputChangeHandler} />
              <Mobile form={form} inputChangeHandler={inputChangeHandler} />
              <Email form={form} inputChangeHandler={inputChangeHandler} />
              <Department form={form} inputChangeHandler={inputChangeHandler} />
            </Fragment>
          )}
          {subjectToUpdate && (
            <Fragment>
              <Name form={form} inputChangeHandler={inputChangeHandler} />
              <Department form={form} inputChangeHandler={inputChangeHandler} />
              <Semester form={form} inputChangeHandler={inputChangeHandler} />
              <Year form={form} inputChangeHandler={inputChangeHandler} />
            </Fragment>
          )}
          <div className={classes.centerDiv}>
            <Submit name="Update" />
            <Button
              style={{ backgroundColor: "white" }}
              variant="contained"
              onClick={closeHandler}
            >
              Back
            </Button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <RegistrationID form={form} inputChangeHandler={inputChangeHandler} />
          <div className={classes.centerDiv}>
            <Submit name="Get" />
          </div>
        </Fragment>
      )}
    </form>
  );
};

export default Form;
