import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const Email = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="email"
      name="email"
      value={form.email}
      onChange={inputChangeHandler}
      label="Email"
      fullWidth
    />
  );
};

export default Email;
