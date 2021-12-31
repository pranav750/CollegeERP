import {
  Backdrop,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_ADMIN_TO_DELETE,
  CLEAR_STUDENT_TO_DELETE,
  CLEAR_TEACHER_TO_DELETE,
  CLEAR_SUBJECT_TO_DELETE,
  SET_LOADING,
} from "../../store/constants/constants";
import {
  deleteAdmin,
  deleteStudent,
  deleteTeacher,
  deleteSubject,
} from "../../store/action/admin";
import { getImage } from "../../utils/helper";
import useStyles from "./styles";

const Delete = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const adminToDelete = useSelector((state) => state.data.adminToDelete);
  const studentToDelete = useSelector((state) => state.data.studentToDelete);
  const teacherToDelete = useSelector((state) => state.data.teacherToDelete);
  const subjectToDelete = useSelector((state) => state.data.subjectToDelete);
  const whiteBackground = { backgroundColor: "white" };

  const clickHandler = () => {
    dispatch({ type: SET_LOADING });

    if (adminToDelete) {
      dispatch(deleteAdmin(adminToDelete.registrationID));
    } else if (studentToDelete) {
      dispatch(deleteStudent(studentToDelete.registrationID));
    } else if (teacherToDelete) {
      dispatch(deleteTeacher(teacherToDelete.registrationID));
    } else if (subjectToDelete) {
      dispatch(deleteSubject(subjectToDelete.registrationID));
    }
  };

  const closeClickHandler = () => {
    if (adminToDelete) {
      dispatch({ type: CLEAR_ADMIN_TO_DELETE });
    } else if (studentToDelete) {
      dispatch({ type: CLEAR_STUDENT_TO_DELETE });
    } else if (teacherToDelete) {
      dispatch({ type: CLEAR_TEACHER_TO_DELETE });
    } else if (subjectToDelete) {
      dispatch({ type: CLEAR_SUBJECT_TO_DELETE });
    }
  };

  let name, registrationID, image, alt;
  if (adminToDelete) {
    name = `${adminToDelete.firstName} ${adminToDelete.lastName}`;
    registrationID = adminToDelete.registrationID;
    image = getImage("Admin");
    alt = "Admin";
  } else if (studentToDelete) {
    name = `${studentToDelete.firstName} ${studentToDelete.lastName}`;
    registrationID = studentToDelete.registrationID;
    image = getImage("Student");
    alt = "Student";
  } else if (teacherToDelete) {
    name = `${teacherToDelete.firstName} ${teacherToDelete.lastName}`;
    registrationID = teacherToDelete.registrationID;
    image = getImage("Teacher");
    alt = "Teacher";
  } else if (subjectToDelete) {
    name = subjectToDelete.name;
    registrationID = subjectToDelete.registrationID;
    image = getImage("Subject");
    alt = "Subject";
  }

  return (
    <Backdrop
      className={classes.backdrop}
      open={
        adminToDelete || studentToDelete || teacherToDelete || subjectToDelete
          ? true
          : false
      }
    >
      <div className={classes.messageDiv}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={alt} />
        </div>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell scope="row" align="center">
                  Name
                </TableCell>
                <TableCell scope="row" align="center">
                  {name}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell scope="row" align="center">
                  Registration ID
                </TableCell>
                <TableCell scope="row" align="center">
                  {registrationID}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          className={classes.button}
          style={{ color: "white", backgroundColor: "#f50057" }}
          onClick={clickHandler}
          size="small"
        >
          Delete
        </Button>
        <Button
          className={classes.button}
          style={whiteBackground}
          onClick={closeClickHandler}
          size="small"
        >
          Close
        </Button>
      </div>
    </Backdrop>
  );
};

export default Delete;
