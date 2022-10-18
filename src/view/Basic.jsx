import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from 'yup';

const initialState = {
  firstName: "",
  lastName: "",
  age: null,
  email: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  age: Yup.number().min(12).required('Age should be greater than 12')
});

function Basic() {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={({ values,errors,touched }) => (
        <Form>
          <div className={"formContainer"}>
            <h3>Your personal Formik Form</h3>
            {/* Reusable input component */}
            <Field
              name={"firstName"}
              type={"text"}
              placeholder={"First name"}
            />
            {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
            ) : null}
            <Field name={"lastName"} type={"text"} placeholder={"Last name"} />
            {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
            ) : null}
            <Field name={"age"} type={"number"} placeholder={"Age"} />
            {errors.age && touched.age ? (
             <div>{errors.age}</div>
            ) : null}
            <Field name={"email"} type={"text"} placeholder={"Email"} />
            {errors.email && touched.email ? (
             <div>{errors.email}</div>
            ) : null}

            <button type={"submit"}>Submit</button>
          </div>
        </Form>
      )}
    />
  );
}

export default Basic;
