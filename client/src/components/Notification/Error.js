import { Backdrop, Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RESET_ERROR_MESSAGE } from "../../store/constants/constants";
import error from "../../images/error.svg";
import useStyles from "./styles";

const Error = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.profile.errorMessage);
  const whiteBackground = { backgroundColor: "white" };

  const clickHandler = () => {
    dispatch({ type: RESET_ERROR_MESSAGE });
  };

  return (
    <Backdrop className={classes.backdrop} open={errorMessage ? true : false}>
      <div className={classes.messageDiv}>
        <img className={classes.image} src={error} alt="Error" />
        <Typography variant="subtitle1">{errorMessage}</Typography>
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

export default Error;
