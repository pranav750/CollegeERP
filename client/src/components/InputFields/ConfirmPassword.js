import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const ConfirmPassword = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="password"
      name="confirmPassword"
      value={form.confirmPassword}
      onChange={inputChangeHandler}
      label="Confirm Password"
      fullWidth
    />
  );
};

export default ConfirmPassword;
