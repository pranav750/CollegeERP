import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const StudentNavbar = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.user);

  return (
    <Fragment>
      <Button
        className={classes.button}
        activeClassName={classes.active}
        exact
        component={NavLink}
        to={`/student/home/${data.user.registrationID}`}
      >
        Home
      </Button>
    </Fragment>
  );
};

export default StudentNavbar;
