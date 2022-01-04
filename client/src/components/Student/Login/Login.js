import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { studentLogin } from "../../../store/action/student";
import { SET_LOADING } from "../../../store/constants/constants";
import FormLayout from "../../Form/FormLayout";
import Form from "./Form";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    registrationID: "",
    password: "",
    type: "Student",
  });

  const inputChangeHandler = (event) => {
    event.preventDefault();

    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    dispatch({ type: SET_LOADING });
    dispatch(studentLogin(form, navigate));
  };

  return (
    <FormLayout user="Student">
      <Form
        form={form}
        inputChangeHandler={inputChangeHandler}
        submitHandler={submitHandler}
        register={false}
      />
    </FormLayout>
  );
};

export default Login;
