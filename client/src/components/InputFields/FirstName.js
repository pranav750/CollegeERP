import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const FirstName = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="firstName"
      value={form.firstName}
      onChange={inputChangeHandler}
      label="First Name"
      fullWidth
    />
  );
};

export default FirstName;
