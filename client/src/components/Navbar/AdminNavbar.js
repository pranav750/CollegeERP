import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const AdminNavbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector((state) => state.profile.user);

  return (
    <Fragment>
      <Button
        className={
          path === `/admin/home/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/admin/home/${user.registrationID}`}
      >
        Home
      </Button>
      <Button
        className={
          path === `/admin/add/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/admin/add/${user.registrationID}`}
      >
        Add
      </Button>
      <Button
        className={
          path === `/admin/update/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/admin/update/${user.registrationID}`}
      >
        Update
      </Button>
      <Button
        className={
          path === `/admin/delete/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/admin/delete/${user.registrationID}`}
      >
        Delete
      </Button>
      <Button
        className={
          path === `/admin/get/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/admin/get/${user.registrationID}`}
      >
        Get
      </Button>
      <Button
        className={
          path === `/admin/get-all/${user.registrationID}`
            ? classes.active
            : classes.button
        }
        component={Link}
        to={`/admin/get-all/${user.registrationID}`}
      >
        Get All
      </Button>
    </Fragment>
  );
};

export default AdminNavbar;
