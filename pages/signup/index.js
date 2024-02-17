import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./signup.module.css";
import { UserToken } from "../../context/userToken";
import Router from "next/router";

const SignupSchema = Yup.object().shape({
  userName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});

const Signup = () => {
  const { setToken } = useContext(UserToken);

  const api = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setToken(json);
        Router.push("/cart");
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          api();
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.Form}>
            <h1 className="font-bold text-3xl py-4">Sign Up</h1>
            <div className={styles.div}>
              <label>Username</label>
              <Field name="userName" className={styles.input} />
              {errors.userName && touched.userName ? (
                <div className="text-red-500">{errors.userName}*</div>
              ) : null}
            </div>
            <div className={styles.div}>
              <label>Password</label>
              <Field name="password" type="password" className={styles.input} />
              {errors.password && touched.password ? (
                <div className="text-red-500">{errors.password}*</div>
              ) : null}
            </div>
            {/* <div className={styles.div}>
              <label htmlFor="">Email</label>
              <Field name="email" type="email" className={styles.input} />
              {errors.email && touched.email ? (
                <div className="text-red-500">{errors.email}*</div>
              ) : null}
            </div> */}
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
