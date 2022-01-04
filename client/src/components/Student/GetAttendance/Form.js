import SubjectID from "../../InputFields/SubjectID";
import Date from "../../InputFields/Date";
import Submit from "../../Form/Submit";
import useStyles from "./styles";

const Form = ({ form, inputChangeHandler, submitHandler }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submitHandler}>
      <Date form={form} inputChangeHandler={inputChangeHandler} />
      <SubjectID form={form} inputChangeHandler={inputChangeHandler} />
      <div className={classes.centerDiv}>
        <Submit name="Get" />
      </div>
    </form>
  );
};

export default Form;
