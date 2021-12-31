import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const RegistrationID = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="registrationID"
      value={form.registrationID}
      onChange={inputChangeHandler}
      label="Registration ID"
      fullWidth
    />
  );
};

export default RegistrationID;
