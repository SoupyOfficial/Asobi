import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import validator from 'validator';
import emailjs from 'emailjs-com';

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
    const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

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

        var obj = {userId:uuid(),login:login.value,password:password.value,firstName:firstName.value,lastName:lastName.value,email:email.value,phoneNumber:phoneNumber.value};
        var js = JSON.stringify(obj);

        emailjs.send("service_f0xdcct","template_9zrlzdr",{
            firstName: firstName.value,
            email: email.value,
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

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_f0xdcct', 'template_9zrlzdr', e.target, 'hEbhp0TDCQpMccQ5c')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

    function submitForm(email) {
        var submit = true;
        submit &= sendEmail(email);
        submit &= doRegister();
        return submit;
    }

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
        <input type="text" id="email" placeholder="Email" onChange={(e) => validateEmail(e)}
            ref={(c) => email = c} />{emailError}<br />
        <input type="text" id="phoneNumber" placeholder="Phone Number" 
            ref={(c) => phoneNumber = c} /><br />
        <input type="submit" id="registerButton" class="buttons" value = "Do It"
          onClick={doRegister} />
        </form>
        <span id="registerResult">{message}</span>
     </div>
    );
};

export default Register;