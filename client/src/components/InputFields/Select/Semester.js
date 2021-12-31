import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useStyles from "../styles";

const Semester = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <FormControl style={{ width: "100%" }} className={classes.extraMargin}>
      <InputLabel id="semester">Semester</InputLabel>
      <Select
        labelId="semester"
        name="semester"
        onChange={inputChangeHandler}
        value={form.semester}
        label="Semester"
        defaultValue=""
      >
        <MenuItem value={1}>First Semester</MenuItem>
        <MenuItem value={2}>Second Semester</MenuItem>
        <MenuItem value={3}>Third Semester</MenuItem>
        <MenuItem value={4}>Fourth Semester</MenuItem>
        <MenuItem value={5}>Fifth Semester</MenuItem>
        <MenuItem value={6}>Sixth Semester</MenuItem>
        <MenuItem value={7}>Seventh Semester</MenuItem>
        <MenuItem value={8}>Eighth Semester</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Semester;
