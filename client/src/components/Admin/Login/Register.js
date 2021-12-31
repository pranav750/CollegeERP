import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminRegister } from "../../../store/action/admin";
import { SET_LOADING } from "../../../store/constants/constants";
import FormLayout from "../../Form/FormLayout";
import Form from "./Form";

const AdminRegister = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    aadhar: "",
    confirmPassword: "",
    password: "",
    type: "Admin",
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
    dispatch(adminRegister(form));
  };

  return (
    <FormLayout user="Admin">
      <Form
        form={form}
        inputChangeHandler={inputChangeHandler}
        submitHandler={submitHandler}
        register={true}
      />
    </FormLayout>
  );
};

export default AdminRegister;
