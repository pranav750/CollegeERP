import { Fragment } from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar";
import StudentNavbar from "./StudentNavbar";
import TeacherNavbar from "./TeacherNavbar";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const type = useSelector((state) => state.profile.type);

  return (
    <Fragment>
      <AppBar
        style={{ backgroundColor: "#6C63FF", color: "white" }}
        position="static"
        elevation={0}
      >
        <Toolbar className={classes.extraMargin}>
          <Typography className={classes.title} variant="h6">
            College ERP
          </Typography>
          <Grid className={classes.mobile}>
            {type === "Admin" && <AdminNavbar />}
            {type === "Student" && <StudentNavbar />}
            {type === "Teacher" && <TeacherNavbar />}
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
