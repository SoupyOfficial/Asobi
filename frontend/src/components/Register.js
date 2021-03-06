import React, { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import validator from 'validator';
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

emailjs.init("hEbhp0TDCQpMccQ5c");

function Register()
{

    
    const [message,setMessage] = useState('');
    const formRef = useRef();

    const app_name = 'asobi-1'
    function buildPath(route)
    {   
        if (process.env.NODE_ENV === 'production') 
        {
            return 'https://' + app_name +  '.herokuapp.com/' + route;
        }
        else
        {        
            return 'http://localhost:5000/' + route;
        }
    }

    const doRegister = async event => 
    {
        console.log(formRef.current.values)

        var ID = uuid();

        var obj = {
            userId:ID,
            login:formRef.current.values.username,
            password:formRef.current.values.password,
            firstName:formRef.current.values.firstName,
            lastName:formRef.current.values.lastName,
            email:formRef.current.values.email,
            phoneNumber:formRef.current.values.phone};
        var js = JSON.stringify(obj);

        await emailjs.send("service_f0xdcct","template_9zrlzdr",{
            firstName: formRef.current.values.firstName,
            email: formRef.current.values.email,
            code: ID,
            });

        try
        {    
            const response = await fetch(buildPath('api/register'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var res = JSON.parse(await response.text());

           
            
            if( res.error.length > 0 )
            {
                setMessage("API Error:" + res.error );
                console.log(message);
            }
            else
            {
                var user = {id:ID,firstName:formRef.current.values.firstName,lastName:formRef.current.values.lastName}
                console.log(ID)
                localStorage.setItem('user_data', JSON.stringify(user));
                window.location.href = '/verify';
            }
        }
        catch(e)
        {
            setMessage(e.toString());
            console.log(message);
        }    
    };

    const phoneRegExp = (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
      
    const validate = Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(5, 'Must be 5 characters or more')
            .required('Required'),
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
          phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Required'),
        })

    return(
        <>
       <div className="row d-flex justify-content-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card-body bg-light mt-5 py-5 px-md-5" style={{borderRadius: "1rem"}}>
            <Formik
              initialValues={{firstName: "", lastName: "", email: "", password: "", username: "", confirmPassword: "", phone: "" }}
              validationSchema={validate}
              innerRef={formRef}
              onSubmit={(values) => {
                console.log(values);
                doRegister(); 
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                  <div>
                    <div className="row mb-5">
                      <div className="col-lg-12 text-center">
                        <h1 className="mt-5">Sign Up</h1>
                      </div>
                    </div>
                    <Form>

                      {/* First and Last Name */}
                      <div className="row">
                        <div className="col-md-6 mb-2">
                          <div className="form-outline">
                          <label className="form-label" htmlFor="first name"
                                    >First Name</label>
                            <Field
                              type="firstName"
                              name="firstName"
                              placeholder="First Name"
                              autoComplete="off"
                              className={`mt-2 form-control
                              ${
                                touched.firstName && errors.firstName
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="firstName"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="form3Example1"
                                    >Last Name</label>
                            <Field
                              type="lastName"
                              name="lastName"
                              placeholder="Last Name"
                              autoComplete="off"
                              className={`mt-2 form-control
                              ${
                                touched.lastName && errors.lastName
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="lastName"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Username */}
                    <div className="form-outline mb-2">
                      <label htmlFor="username">Username</label>
                        <Field
                          type="username"
                          name="username"
                          placeholder="Username"
                          autoComplete="off"
                          className={`mt-2 form-control
                          ${touched.username && errors.username ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          component="div"
                          name="username"
                          className="invalid-feedback"
                        />
                    </div>

                      {/* Email */}
                      <div className="form-outline mb-2">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="JohnSmith@email.com"
                          autoComplete="off"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          data-testid="emailError"
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>

                      {/* Phone Number */}
                    <div className="form-outline mb-2">
                      <label htmlFor="phone">Phone Number</label>
                        <Field
                          type="phone"
                          name="phone"
                          placeholder="321-555-1234"
                          autoComplete="off"
                          className={`mt-2 form-control
                          ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          component="div"
                          name="phone"
                          className="invalid-feedback"
                        />
                    </div>
  
                      {/* Password */}
                      <div className="form-outline mb-2">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>

                      {/* Confirm Password */}
                      <div className="form-outline mb-2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field
                          type="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm password"
                          className={`mt-2 form-control
                          ${
                            touched.confirmPassword && errors.confirmPassword
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="confirmPassword"
                          className="invalid-feedback"
                        />
                      </div>
  
                      {/* <!-- Submit button --> */}
                      <button
                              type="submit"
                              id="registerButton"
                              className="btn btn-primary btn-block mb-4">
                          Submit
                    </button>
                    </Form>
                  </div>
                ) : (
                  <div>Rerouting...</div>
                )
              }
            </Formik>
            </div>
        </div>
    </div>
    </>
    );
};

export default Register;