import { Fragment } from "react";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const StudentNavbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector((state) => state.profile.user);

  return (
    <Fragment>
      <Button
        className={
          path === `/student/home/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/student/home/${user.registrationID}`}
      >
        Home
      </Button>
      <Button
        className={
          path === `/student/get-marks/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/student/get-marks/${user.registrationID}`}
      >
        Get Marks
      </Button>
      <Button
        className={
          path === `/student/get-attendance/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/student/get-attendance/${user.registrationID}`}
      >
        Get Attendance
      </Button>
    </Fragment>
  );
};

export default StudentNavbar;
