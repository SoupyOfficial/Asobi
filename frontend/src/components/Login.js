import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'
import '../custom.scss'

function Login()
{

    var loginName;
    var loginPassword;
    
    const [message,setMessage] = useState('');

    let bp = require('./Path.js');    

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {login:loginName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch(bp.buildPath('api/login'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var res = JSON.parse(await response.text());
            
            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {id:res.id,firstName:res.firstName,lastName:res.lastName}
                localStorage.setItem('user_data', JSON.stringify(user));
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
        <>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-light text-white" style={{borderRadius: "1rem"}}>
                  <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4">

                      <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">Please enter your login and password!</p>

                      <form onSubmit={doLogin}>
                        <div class="form-outline form-white mb-4">
                            <input type="username" ref={(c) => loginName = c} id="typeEmailX" class="form-control form-control-lg" />
                            <label class="form-label" >Username</label>
                        </div>

                        <div class="form-outline form-white mb-4">
                            <input type="password" ref={(c) => loginPassword = c} id="typePasswordX" class="form-control form-control-lg" />
                            <label class="form-label">Password</label>
                        </div>

                        

                        <Button class="btn btn-outline-light btn-lg px-5" type="submit">Login</Button><br/>
                        <div className='pt-3'>{message}</div>
                      </form>
                    </div>
                    <div>
                      <p class="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Sign Up</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

     </>
    );
};

export default Login;