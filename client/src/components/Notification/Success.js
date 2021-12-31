import { Backdrop, Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RESET_SUCCESS_MESSAGE } from "../../store/constants/constants";
import success from "../../images/success.svg";
import useStyles from "./styles";

const Success = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.profile.successMessage);
  const whiteBackground = { backgroundColor: "white" };

  const clickHandler = () => {
    dispatch({ type: RESET_SUCCESS_MESSAGE });
  };

  return (
    <Backdrop className={classes.backdrop} open={successMessage ? true : false}>
      <div className={classes.messageDiv}>
        <img className={classes.image} src={success} alt="Success" />
        <Typography variant="subtitle1">{successMessage}</Typography>
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

export default Success;
