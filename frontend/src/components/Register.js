import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import validator from 'validator';
import emailjs from 'emailjs-com';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

emailjs.init("hEbhp0TDCQpMccQ5c");

function Register()
{

    var login;
    var password;
    var firstName;
    var lastName;
    var email;
    var phoneNumber;
    
    const [message,setMessage] = useState('');
    const [emailError, setEmailError] = useState('')

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
        event.preventDefault();

        var ID = uuid();

        var obj = {userId:ID,login:login.value,password:password.value,firstName:firstName.value,lastName:lastName.value,email:email.value,phoneNumber:phoneNumber.value};
        var js = JSON.stringify(obj);

        console.log(email.value);
        emailjs.send("service_f0xdcct","template_9zrlzdr",{
            firstName: firstName.value,
            email: email.value,
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
            }
            else
            {
                var user = {firstName:firstName.value,lastName:lastName.value}
                localStorage.setItem('user_data', JSON.stringify(user));
                window.location.href = '/profile';
            }
        }
        catch(e)
        {
            setMessage(e.toString());
        }    
    };

    return(
        <>
      {/* <div id="registerDiv">
        <form onSubmit={doRegister}>
        <span id="inner-title">PLEASE REGISTER</span><br />
        <input type="text" id="login" placeholder="Username" 
            ref={(c) => login = c} /><br />
        <input type="password" id="password" placeholder="Password" 
            ref={(c) => password = c} /><br />
        <input type="text" id="firstName" placeholder="First Name" 
            ref={(c) => firstName = c} /><br />
        <input type="text" id="lastName" placeholder="Last Name" 
            ref={(c) => lastName = c} /><br />
        <input type="text" id="email" placeholder="Email"
            ref={(c) => email = c} />{emailError}<br />
        <input type="text" id="phoneNumber" placeholder="Phone Number" 
            ref={(c) => phoneNumber = c} /><br />
        <input type="submit" id="registerButton" class="buttons" value = "Do It"
          onClick={doRegister} />
          <Button className="m-3" onClick={doRegister}>Register</Button>
        </form>
        <span id="registerResult">{message}</span> 

        <Formik
        initialValues={{
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
        }}
        validationSchema={validate}
        onSubmit={values => {
            console.log(values)
        }}
        >
        {formik => (
            <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form onSubmit={doRegister}>
                <TextField className="formStyle" id="login" ref={(c) => login = c} label="Username" placeholder="Johnny123" name="userName" type="text" />
                <TextField className="formStyle" id="firstName" ref={(c) => firstName = c}label="First Name" placeholder="John" name="firstName" type="text" />
                <TextField className="formStyle" id="lastName" ref={(c) => lastName = c} label="Last Name" placeholder="Smith" name="lastName" type="text" />
                <TextField className="formStyle" id="email" ref={(c) => email = c} label="Email" placeholder="JohnSmith@email.com" name="email" type="email" />
                <TextField className="formStyle" id="password" ref={(c) => password = c} label="Password" placeholder="********" name="password" type="password" />
                <TextField className="formStyle" label="Confirm Password" placeholder="********" name="confirmPassword" type="password" />
                <TextField className="formStyle" id="phoneNumber" ref={(c) => phoneNumber = c} label="Phone Number" placeholder="321-555-5555" name="phoneNumber" type="text" />
                <input type="submit" id="registerButton" class="buttons" value = "Register"
          onClick={doRegister} />
                <button id="registerButton" className="btn btn-dark mt-3" onClick={doRegister} type="submit">Register</button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </Form>
            <span id="registerResult">{message}</span>
            </div>
        )}
        </Formik>
        
     </div> */}

    <div class="row d-flex justify-content-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card-body bg-light mt-5 py-5 px-md-5" style={{borderRadius: "1rem"}}>
                <h2 class="fw-bold mb-5">Sign up now</h2>
                    <form onSubmit={doRegister}>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div class="row">
                        <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <input
                                type="text"
                                id="form3Example1"
                                class="form-control"
                                ref={(c) => firstName = c}
                                placeholder="John"
                                />
                            <label class="form-label" for="form3Example1"
                                >First name</label>
                        </div>
                        </div>
                        <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <input
                                type="text"
                                id="form3Example2"
                                class="form-control"
                                ref={(c) => lastName = c}
                                placeholder="Smith"
                                />
                            <label class="form-label" for="form3Example2"
                                >Last name</label>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <input
                            type="email"
                            id="form3Example3"
                            class="form-control"
                            ref={(c) => email = c}
                            placeholder="JohnSmith@email.com"
                            />
                        <label class="form-label" for="form3Example3"
                            >Email address</label>
                    </div>

                    {/* <!-- Username input --> */}
                    <div class="form-outline mb-4">
                        <input
                            type="username"
                            id="form3Example4"
                            class="form-control"
                            ref={(c) => login = c}
                            placeholder="Johnny123"
                            />
                        <label class="form-label" for="form3Example4"
                            >Username</label>
                    </div>

                    {/* <!-- Phone Number input --> */}
                    <div class="form-outline mb-4">
                        <input
                            type="username"
                            id="form3Example4"
                            class="form-control"
                            ref={(c) => phoneNumber = c}
                            placeholder="321-555-5555"
                            />
                        <label class="form-label" for="form3Example4"
                            >Phone Number</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                        <input
                            type="password"
                            id="form3Example4"
                            class="form-control"
                            ref={(c) => password = c}
                            placeholder="********"
                            />
                        <label class="form-label" for="form3Example4"
                            >Password</label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div class="form-check d-flex justify-content-center mb-4">
                        <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example33"
                            checked
                            />
                        <label class="form-check-label" for="form2Example33">
                        Subscribe to our newsletter
                        </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                            type="submit"
                            id="registerButton"
                            class="btn btn-primary btn-block mb-4"
                            onClick={doRegister}>
                        Sign up
                    </button>
                    <br/>
                    <span id="registerResult">{message}</span>
                    </form>
            </div>
        </div>
    </div>

     </>
    );
};

export default Register;