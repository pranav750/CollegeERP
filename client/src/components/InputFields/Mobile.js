import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const Mobile = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="mobile"
      value={form.mobile}
      onChange={inputChangeHandler}
      label="Mobile Number"
      fullWidth
    />
  );
};

export default Mobile;
