import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADING } from "../../../store/constants/constants";
import {
  getAdminToUpdate,
  getStudentToUpdate,
  getTeacherToUpdate,
  getSubjectToUpdate,
  updateAdmin,
  updateStudent,
  updateTeacher,
  updateSubject,
} from "../../../store/action/admin";
import {
  convertToUpdateAdminForm,
  convertToUpdateStudentForm,
  convertToUpdateTeacherForm,
  convertToUpdateSubjectForm,
} from "../../../utils/helper";
import ButtonGrp from "../../Form/ButtonGrp";
import CRUDLayout from "../../Form/CRUDLayout/CRUDLayout";
import Form from "./Form";
import useStyles from "./styles";

const Update = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.profile.type);
  const adminToUpdate = useSelector((state) => state.data.adminToUpdate);
  const studentToUpdate = useSelector((state) => state.data.studentToUpdate);
  const teacherToUpdate = useSelector((state) => state.data.teacherToUpdate);
  const subjectToUpdate = useSelector((state) => state.data.subjectToUpdate);
  const [buttonType, setButtonType] = useState(type);

  const initialStateRegister = {
    registrationID: "",
    type: buttonType,
  };

  let initialStateUpdate = {
    name: "",
    firstName: "",
    lastName: "",
    aadhar: "",
    mobile: "",
    email: "",
    year: "",
    semester: "",
    department: "",
    type: "Admin",
  };
  const [formUpdate, setFormUpdate] = useState(initialStateUpdate);

  useEffect(() => {
    if (adminToUpdate) {
      setFormUpdate({
        firstName: adminToUpdate.firstName,
        lastName: adminToUpdate.lastName,
        aadhar: adminToUpdate.aadhar,
        mobile: adminToUpdate.mobile,
        email: adminToUpdate.email,
        type: "Admin",
      });
    } else if (studentToUpdate) {
      setFormUpdate({
        firstName: studentToUpdate.firstName,
        lastName: studentToUpdate.lastName,
        aadhar: studentToUpdate.aadhar,
        mobile: studentToUpdate.mobile,
        email: studentToUpdate.email,
        year: studentToUpdate.year,
        semester: studentToUpdate.semester,
        department: studentToUpdate.department,
        type: "Student",
      });
    } else if (teacherToUpdate) {
      setFormUpdate({
        firstName: teacherToUpdate.firstName,
        lastName: teacherToUpdate.lastName,
        aadhar: teacherToUpdate.aadhar,
        mobile: teacherToUpdate.mobile,
        email: teacherToUpdate.email,
        department: teacherToUpdate.department,
        type: "Teacher",
      });
    } else if (subjectToUpdate) {
      setFormUpdate({
        name: subjectToUpdate.name,
        year: subjectToUpdate.year,
        semester: subjectToUpdate.semester,
        department: subjectToUpdate.department,
        type: "Subject",
      });
    }
  }, [adminToUpdate, studentToUpdate, teacherToUpdate, subjectToUpdate]);

  const [formRegister, setFormRegister] = useState(initialStateRegister);

  const updateData =
    adminToUpdate || studentToUpdate || teacherToUpdate || subjectToUpdate;

  const inputRegisterChangeHandler = (event) => {
    setFormRegister((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const inputUpdateChangeHandler = (event) => {
    setFormUpdate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitRegisterHandler = (event) => {
    event.preventDefault();

    dispatch({ type: SET_LOADING });

    if (buttonType === "Admin") {
      dispatch(getAdminToUpdate(formRegister.registrationID));
    } else if (buttonType === "Student") {
      dispatch(getStudentToUpdate(formRegister.registrationID));
    } else if (buttonType === "Teacher") {
      dispatch(getTeacherToUpdate(formRegister.registrationID));
    } else if (buttonType === "Subject") {
      dispatch(getSubjectToUpdate(formRegister.registrationID));
    }
  };

  const submitUpdateHandler = (event) => {
    event.preventDefault();

    dispatch({ type: SET_LOADING });

    if (adminToUpdate) {
      dispatch(
        updateAdmin(
          adminToUpdate.registrationID,
          convertToUpdateAdminForm(formUpdate)
        )
      );
    } else if (studentToUpdate) {
      dispatch(
        updateStudent(
          studentToUpdate.registrationID,
          convertToUpdateStudentForm(formUpdate)
        )
      );
    } else if (teacherToUpdate) {
      dispatch(
        updateTeacher(
          teacherToUpdate.registrationID,
          convertToUpdateTeacherForm(formUpdate)
        )
      );
    } else if (subjectToUpdate) {
      dispatch(
        updateSubject(
          subjectToUpdate.registrationID,
          convertToUpdateSubjectForm(formUpdate)
        )
      );
    }
  };

  return (
    <div className={classes.outside}>
      {!updateData && (
        <ButtonGrp
          operation="Update"
          operationInfo="Here you can update anything in the database"
          setButtonType={setButtonType}
          initialState={initialStateRegister}
          setForm={setFormRegister}
        />
      )}

      <CRUDLayout user={buttonType}>
        {updateData ? (
          <Form
            form={formUpdate}
            inputChangeHandler={inputUpdateChangeHandler}
            submitHandler={submitUpdateHandler}
          />
        ) : (
          <Form
            form={formRegister}
            inputChangeHandler={inputRegisterChangeHandler}
            submitHandler={submitRegisterHandler}
          />
        )}
      </CRUDLayout>
    </div>
  );
};

export default Update;
