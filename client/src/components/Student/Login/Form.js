import { Fragment } from "react";
import FirstName from "../../InputFields/FirstName";
import LastName from "../../InputFields/LastName";
import Aadhar from "../../InputFields/Aadhar";
import Mobile from "../../InputFields/Mobile";
import Email from "../../InputFields/Email";
import Password from "../../InputFields/Password";
import ConfirmPassword from "../../InputFields/ConfirmPassword";
import RegistrationID from "../../InputFields/RegistrationID";
import Department from "../../InputFields/Select/Department";
import Year from "../../InputFields/Select/Year";
import Semester from "../../InputFields/Select/Semester";
import Submit from "../../Form/Submit";
import Close from "../../Form/Close";
import useStyles from "./styles";

const Form = ({ form, inputChangeHandler, submitHandler, register }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submitHandler}>
      {register ? (
        <Fragment>
          <FirstName form={form} inputChangeHandler={inputChangeHandler} />
          <LastName form={form} inputChangeHandler={inputChangeHandler} />
          <Aadhar form={form} inputChangeHandler={inputChangeHandler} />
          <Mobile form={form} inputChangeHandler={inputChangeHandler} />
          <Email form={form} inputChangeHandler={inputChangeHandler} />
          <Department form={form} inputChangeHandler={inputChangeHandler} />
          <Year form={form} inputChangeHandler={inputChangeHandler} />
          <Semester form={form} inputChangeHandler={inputChangeHandler} />
          <Password form={form} inputChangeHandler={inputChangeHandler} />
          <ConfirmPassword
            form={form}
            inputChangeHandler={inputChangeHandler}
          />
        </Fragment>
      ) : (
        <Fragment>
          <RegistrationID form={form} inputChangeHandler={inputChangeHandler} />
          <Password form={form} inputChangeHandler={inputChangeHandler} />
        </Fragment>
      )}

      <div className={classes.centerDiv}>
        <Submit name={register ? "Register" : "Login"} />
        <Close
          name={register ? "Back" : "Register"}
          path={register ? "/" : "/student/register"}
        />
      </div>
    </form>
  );
};

export default Form;
