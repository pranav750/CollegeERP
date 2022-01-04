import SubjectID from "../../InputFields/SubjectID";
import StudentID from "../../InputFields/StudentID";
import Test from "../../InputFields/Select/Test";
import Total from "../../InputFields/Total";
import Submit from "../../Form/Submit";
import useStyles from "./styles";
import OutOf from "../../InputFields/Select/OufOf";

const Form = ({ form, inputChangeHandler, submitHandler }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submitHandler}>
      <Test form={form} inputChangeHandler={inputChangeHandler} />
      <SubjectID form={form} inputChangeHandler={inputChangeHandler} />
      <StudentID form={form} inputChangeHandler={inputChangeHandler} />
      <Total form={form} inputChangeHandler={inputChangeHandler} />
      <OutOf form={form} inputChangeHandler={inputChangeHandler} />
      <div className={classes.centerDiv}>
        <Submit name="Update" />
      </div>
    </form>
  );
};

export default Form;
