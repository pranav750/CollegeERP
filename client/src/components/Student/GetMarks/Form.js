import SubjectID from "../../InputFields/SubjectID";
import Test from "../../InputFields/Select/Test";
import Submit from "../../Form/Submit";
import useStyles from "./styles";

const Form = ({ form, inputChangeHandler, submitHandler }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submitHandler}>
      <Test form={form} inputChangeHandler={inputChangeHandler} />
      <SubjectID form={form} inputChangeHandler={inputChangeHandler} />
      <div className={classes.centerDiv}>
        <Submit name="Get" />
      </div>
    </form>
  );
};

export default Form;
