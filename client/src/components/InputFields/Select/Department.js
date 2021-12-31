import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useStyles from "../styles";

const Department = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <FormControl style={{ width: "100%" }} className={classes.extraMargin}>
      <InputLabel id="department">Department</InputLabel>
      <Select
        labelId="department"
        name="department"
        onChange={inputChangeHandler}
        value={form.department}
        label="Department"
        defaultValue=""
      >
        <MenuItem value="Computer Science">Computer Science</MenuItem>
        <MenuItem value="Information Technology">
          Information Technology
        </MenuItem>
        <MenuItem value="Electronics And Telecommunication">
          Electronics And Telecommunication
        </MenuItem>
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Electrical">Electrical</MenuItem>
        <MenuItem value="Production">Production</MenuItem>
        <MenuItem value="Civil">Civil</MenuItem>
        <MenuItem value="Chemical">Chemical</MenuItem>
        <MenuItem value="Textile">Textile</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Department;
