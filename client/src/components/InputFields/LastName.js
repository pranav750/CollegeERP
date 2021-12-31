import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const LastName = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="lastName"
      value={form.lastName}
      onChange={inputChangeHandler}
      label="Last Name"
      fullWidth
    />
  );
};

export default LastName;
