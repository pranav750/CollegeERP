import RegistrationID from "../../InputFields/RegistrationID";
import Submit from "../../Form/Submit";
import useStyles from "./styles";

const Form = ({ form, inputChangeHandler, submitHandler }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submitHandler}>
      <RegistrationID form={form} inputChangeHandler={inputChangeHandler} />
      <div className={classes.centerDiv}>
        <Submit name="Get" />
      </div>
    </form>
  );
};

export default Form;
