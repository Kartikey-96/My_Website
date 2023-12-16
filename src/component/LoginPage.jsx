import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "../Style/loginform.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [initialState, updateState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    console.log(e);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name + " " + value);
    updateState({
      ...initialState,
      [name]: value,
    });
  };

  return (
    <div className="myform">
      <Formik initialValues={initialState} onsubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="email" className="email">
              E-mail
            </label>
            <Field
              type="text"
              name="email"
              value={initialState.email}
              onChange={handleChange}
            />
          </div>
          <div className="block">
            <label className="password">Password</label>
            <Field
              type="password"
              name="password"
              value={initialState.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="button">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;
