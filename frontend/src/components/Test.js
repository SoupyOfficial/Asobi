import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

function Signup() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <>
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={values => {
            console.log(values)
        }}
        >
        {formik => (
            <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form>
                <TextField className="formStyle" label="Username" placeholder="Johnny123" name="userName" type="text" />
                <TextField className="formStyle" label="First Name" placeholder="John" name="firstName" type="text" />
                <TextField className="formStyle" label="Last Name" placeholder="Smith" name="lastName" type="text" />
                <TextField className="formStyle" label="Email" placeholder="JohnSmith@email.com" name="email" type="email" />
                <TextField className="formStyle" label="Password" placeholder="********" name="password" type="password" />
                <TextField className="formStyle" label="Confirm Password" placeholder="********" name="confirmPassword" type="password" />
                <TextField className="formStyle" label="Phone Number" placeholder="321-555-5555" name="phoneNumber" type="text" />
                <button className="btn btn-dark mt-3" type="submit">Register</button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </Form>
            </div>
        )}
        </Formik>
    </>
  )
}

export default Signup;