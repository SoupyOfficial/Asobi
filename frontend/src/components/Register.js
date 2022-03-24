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
    const phoneRegExp = (/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/);

    const validate = Yup.object({
        userName: Yup.string()
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
        phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    })

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
                setMessage("Successfully registered");
            }
        }
        catch(e)
        {
            setMessage(e.toString());
        }    
    };

    return(
      <div id="registerDiv">
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
        
     </div>
    );
};

export default Register;