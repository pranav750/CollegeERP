import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const StudentID = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="studentID"
      value={form.studentID}
      onChange={inputChangeHandler}
      label="Student ID"
      fullWidth
    />
  );
};

export default StudentID;
