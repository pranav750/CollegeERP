import { Backdrop, Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_ADMIN,
  CLEAR_STUDENT,
  CLEAR_TEACHER,
  CLEAR_SUBJECT,
} from "../../store/constants/constants";
import Results from "../Form/Results";
import useStyles from "./styles";

const Information = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.data.admin);
  const studentData = useSelector((state) => state.data.student);
  const teacherData = useSelector((state) => state.data.teacher);
  const subjectData = useSelector((state) => state.data.subject);
  const whiteBackground = { backgroundColor: "white" };

  const clickHandler = () => {
    if (adminData) {
      dispatch({ type: CLEAR_ADMIN });
    } else if (studentData) {
      dispatch({ type: CLEAR_STUDENT });
    } else if (teacherData) {
      dispatch({ type: CLEAR_TEACHER });
    } else if (subjectData) {
      dispatch({ type: CLEAR_SUBJECT });
    }
  };

  return (
    <Backdrop
      className={classes.backdrop}
      open={
        adminData || studentData || teacherData || subjectData ? true : false
      }
    >
      <div className={classes.messageDiv}>
        <Results />
        <Button
          className={classes.button}
          style={whiteBackground}
          onClick={clickHandler}
          size="small"
        >
          Close
        </Button>
      </div>
    </Backdrop>
  );
};

export default Information;
