import React from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField";
import "../../App.css";
import { connect } from "react-redux";
import { addUser } from "../../store/actions";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import validate from "./validate";

const SignUp = (props) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        id: uuidv4(),
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        props.addUser(values);
        history.push("/users");
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="E-Mail" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3 shadow-none" type="submit">
              Register
            </button>
            <button
              className="btn btn-danger mx-3 mt-3 shadow-none"
              type="reset"
            >
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { addUser })(SignUp);
