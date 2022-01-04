import { TextField } from "@material-ui/core";
import useStyles from "./styles";

const SubjectID = ({ form, inputChangeHandler }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.extraMargin}
      type="text"
      name="subjectID"
      value={form.subjectID}
      onChange={inputChangeHandler}
      label="Subject ID"
      fullWidth
    />
  );
};

export default SubjectID;
