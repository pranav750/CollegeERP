import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const TeacherNavbar = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.user);

  return (
    <Fragment>
      <Button
        className={classes.button}
        activeClassName={classes.active}
        exact
        component={NavLink}
        to={`/teacher/home/${data.user.registrationID}`}
      >
        Home
      </Button>
      <Button
        className={classes.button}
        activeClassName={classes.active}
        exact
        component={NavLink}
        to="/teacher/mark-attendance"
      >
        Mark Attendance
      </Button>
    </Fragment>
  );
};

export default TeacherNavbar;
