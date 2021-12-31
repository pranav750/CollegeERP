import { Fragment } from "react";
import FirstName from "../../InputFields/FirstName";
import LastName from "../../InputFields/LastName";
import Aadhar from "../../InputFields/Aadhar";
import Mobile from "../../InputFields/Mobile";
import Email from "../../InputFields/Email";
import Name from "../../InputFields/Name";
import Password from "../../InputFields/Password";
import ConfirmPassword from "../../InputFields/ConfirmPassword";
import Department from "../../InputFields/Select/Department";
import Semester from "../../InputFields/Select/Semester";
import Year from "../../InputFields/Select/Year";
import Submit from "../../Form/Submit";
import useStyles from "./styles";

const Form = ({ form, inputChangeHandler, submitHandler, type }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submitHandler}>
      {type === "Admin" && (
        <Fragment>
          <FirstName form={form} inputChangeHandler={inputChangeHandler} />
          <LastName form={form} inputChangeHandler={inputChangeHandler} />
          <Aadhar form={form} inputChangeHandler={inputChangeHandler} />
          <Mobile form={form} inputChangeHandler={inputChangeHandler} />
          <Email form={form} inputChangeHandler={inputChangeHandler} />
          <Password form={form} inputChangeHandler={inputChangeHandler} />
          <ConfirmPassword
            form={form}
            inputChangeHandler={inputChangeHandler}
          />
        </Fragment>
      )}
      {type === "Student" && (
        <Fragment>
          <FirstName form={form} inputChangeHandler={inputChangeHandler} />
          <LastName form={form} inputChangeHandler={inputChangeHandler} />
          <Aadhar form={form} inputChangeHandler={inputChangeHandler} />
          <Mobile form={form} inputChangeHandler={inputChangeHandler} />
          <Email form={form} inputChangeHandler={inputChangeHandler} />
          <Department form={form} inputChangeHandler={inputChangeHandler} />
          <Semester form={form} inputChangeHandler={inputChangeHandler} />
          <Year form={form} inputChangeHandler={inputChangeHandler} />
          <Password form={form} inputChangeHandler={inputChangeHandler} />
          <ConfirmPassword
            form={form}
            inputChangeHandler={inputChangeHandler}
          />
        </Fragment>
      )}
      {type === "Teacher" && (
        <Fragment>
          <FirstName form={form} inputChangeHandler={inputChangeHandler} />
          <LastName form={form} inputChangeHandler={inputChangeHandler} />
          <Aadhar form={form} inputChangeHandler={inputChangeHandler} />
          <Mobile form={form} inputChangeHandler={inputChangeHandler} />
          <Email form={form} inputChangeHandler={inputChangeHandler} />
          <Department form={form} inputChangeHandler={inputChangeHandler} />
          <Password form={form} inputChangeHandler={inputChangeHandler} />
          <ConfirmPassword
            form={form}
            inputChangeHandler={inputChangeHandler}
          />
        </Fragment>
      )}

      {type === "Subject" && (
        <Fragment>
          <Name form={form} inputChangeHandler={inputChangeHandler} />
          <Department form={form} inputChangeHandler={inputChangeHandler} />
          <Semester form={form} inputChangeHandler={inputChangeHandler} />
          <Year form={form} inputChangeHandler={inputChangeHandler} />
        </Fragment>
      )}
      <div className={classes.centerDiv}>
        <Submit name="Add" />
      </div>
    </form>
  );
};

export default Form;
