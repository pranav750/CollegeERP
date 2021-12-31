import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const Password = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="password"
      name="password"
      value={form.password}
      onChange={inputChangeHandler}
      label="Password"
      fullWidth
    />
  );
};

export default Password;
