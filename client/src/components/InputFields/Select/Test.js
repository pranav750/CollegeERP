import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useStyles from "../styles";

const Test = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <FormControl style={{ width: "100%" }} className={classes.extraMargin}>
      <InputLabel id="test">Test</InputLabel>
      <Select
        labelId="test"
        name="test"
        onChange={inputChangeHandler}
        value={form.test}
        label="Test"
        defaultValue=""
      >
        <MenuItem value="ESE">ESE</MenuItem>
        <MenuItem value="MST">MST</MenuItem>
        <MenuItem value="TA">TA</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Test;
