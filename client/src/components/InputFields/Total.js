import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const Total = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="number"
      name="total"
      value={form.total}
      onChange={inputChangeHandler}
      label="Total"
      fullWidth
    />
  );
};

export default Total;
