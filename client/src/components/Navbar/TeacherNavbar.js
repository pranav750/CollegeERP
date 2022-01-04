import { Fragment } from "react";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const TeacherNavbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector((state) => state.profile.user);

  return (
    <Fragment>
      <Button
        className={
          path === `/teacher/home/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/teacher/home/${user.registrationID}`}
      >
        Home
      </Button>
      <Button
        className={
          path === `/teacher/mark-attendance/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/teacher/mark-attendance/${user.registrationID}`}
      >
        Mark Attendance
      </Button>
      <Button
        className={
          path === `/teacher/give-marks/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/teacher/give-marks/${user.registrationID}`}
      >
        Give Marks
      </Button>
      <Button
        className={
          path === `/teacher/update-mark/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/teacher/update-mark/${user.registrationID}`}
      >
        Update Mark
      </Button>
    </Fragment>
  );
};

export default TeacherNavbar;
