import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_ALL_DATA,
  SET_LOADING,
} from "../../../store/constants/constants";
import {
  getAdmins,
  getStudents,
  getSubjects,
  getTeachers,
} from "../../../store/action/admin";
import ButtonGrp from "../../Form/ButtonGrp";
import CRUDLayout from "../../Form/CRUDLayout/CRUDLayout";
import Results from "../../Form/Results";
import useStyles from "./styles";

const GetAll = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.profile.type);
  const [buttonType, setButtonType] = useState(type);

  useEffect(() => {
    dispatch({ type: CLEAR_ALL_DATA });
    dispatch({ type: SET_LOADING });

    if (buttonType === "Admin") {
      dispatch(getAdmins());
    } else if (buttonType === "Student") {
      dispatch(getStudents());
    } else if (buttonType === "Teacher") {
      dispatch(getTeachers());
    } else if (buttonType === "Subject") {
      dispatch(getSubjects());
    }
  }, [dispatch, buttonType]);

  return (
    <div className={classes.outside}>
      <ButtonGrp
        operation="Get All"
        operationInfo="Here you can get all users from a category from the database"
        setButtonType={setButtonType}
      />

      <CRUDLayout user={buttonType}>
        <Results />
      </CRUDLayout>
    </div>
  );
};

export default GetAll;
