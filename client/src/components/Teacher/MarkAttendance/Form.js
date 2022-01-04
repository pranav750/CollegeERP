import SubjectID from "../../InputFields/SubjectID";
import Submit from "../../Form/Submit";
import useStyles from "./styles";
import Date from "../../InputFields/Date";

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
