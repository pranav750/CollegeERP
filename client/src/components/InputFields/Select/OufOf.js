import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useStyles from "../styles";

const OutOf = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <FormControl style={{ width: "100%" }} className={classes.extraMargin}>
      <InputLabel id="outOf">Out Of</InputLabel>
      <Select
        labelId="outOf"
        name="outOf"
        onChange={inputChangeHandler}
        value={form.outOf}
        label="Out Of"
        defaultValue=""
      >
        <MenuItem value={60}>60</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OutOf;
