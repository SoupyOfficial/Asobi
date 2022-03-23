import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'

function Login()
{

    var loginName;
    var loginPassword;
    
    const [message,setMessage] = useState('');

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

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {login:loginName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch(buildPath('api/login'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var res = JSON.parse(await response.text());
            
            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));
                
                setMessage('');
                window.location.href = '/profile';
            }
        }
        catch(e)
        {
            console.log(e.toString());
            return;
        }    
    };

    return(
      <div id="loginDiv" >
        <Container>
        <Form className='secondaryBackground' onSubmit={doLogin}>
        <span id="inner-title">PLEASE LOG IN</span><br />
        <Form.Control onSubmit="event.preventDefault()" autoFocus style={{backgroundColor: "#484848", color: "white", width: 'auto', textAlign: 'center', borderColor: 'black'}} ref={(c) => loginName = c} type="text" placeholder="Username"/>
        <Form.Control type="password" style={{backgroundColor: "#484848", color: "white", width: 'auto', textAlign: 'center', borderColor: 'black'}} ref={(c) => loginPassword = c} placeholder="Password"/>
        <Button className="m-3" onClick={doLogin}>Login</Button>
        <Link to="/register">Register</Link>
        </Form>
        <span id="loginResult">{message}</span>
        </Container>
     </div>
    );
};

export default Login;