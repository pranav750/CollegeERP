import {
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getImage } from "../../../utils/helper";
import { LOGOUT } from "../../../store/constants/constants";
import useStyles from "./styles";

const Info = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.profile.user);
  const image = getImage("Teacher");

  const clickHandler = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };

  return (
    <div className={classes.outside}>
      <Paper className={classes.mainContainer} elevation={2}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt="Teacher" />
          <Typography style={{ fontWeight: "500" }} variant="h5" gutterBottom>
            {user.firstName} {user.lastName}
          </Typography>
        </div>
        <div className={classes.infoContainer}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell scope="row" align="center">
                    Registration ID
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {user.registrationID}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope="row" align="center">
                    Email
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {user.email}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope="row" align="center">
                    Aadhar
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {user.aadhar}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope="row" align="center">
                    Mobile
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {user.mobile}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell scope="row" align="center">
                    Department
                  </TableCell>
                  <TableCell scope="row" align="center">
                    {user.department}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            className={classes.button}
            onClick={clickHandler}
            size="medium"
          >
            Log Out
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Info;
