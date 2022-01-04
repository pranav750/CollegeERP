import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const Date = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="date"
      name="date"
      value={form.date}
      onChange={inputChangeHandler}
      fullWidth
    />
  );
};

export default Date;
