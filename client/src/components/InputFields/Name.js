import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const Name = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="name"
      value={form.name}
      onChange={inputChangeHandler}
      label="Name"
      fullWidth
    />
  );
};

export default Name;
