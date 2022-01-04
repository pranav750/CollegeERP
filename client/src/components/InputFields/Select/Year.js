import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useStyles from "../styles";

const Year = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <FormControl style={{ width: "100%" }} className={classes.extraMargin}>
      <InputLabel id="year">Year</InputLabel>
      <Select
        labelId="year"
        name="year"
        onChange={inputChangeHandler}
        value={form.year}
        label="Year"
        defaultValue=""
      >
        <MenuItem value={1}>First Year</MenuItem>
        <MenuItem value={2}>Second Year</MenuItem>
        <MenuItem value={3}>Third Year</MenuItem>
        <MenuItem value={4}>Fourth Year</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Year;
