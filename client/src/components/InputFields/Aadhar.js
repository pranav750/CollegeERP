import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const Aadhar = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="aadhar"
      value={form.aadhar}
      onChange={inputChangeHandler}
      label="Aadhar"
      fullWidth
    />
  );
};

export default Aadhar;
