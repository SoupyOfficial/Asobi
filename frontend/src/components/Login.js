import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'
import '../custom.scss'

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
                var user = {userId:res.id,firstName:res.firstName,lastName:res.lastName}
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
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{width:'100%'}}>
                <div className="card bg-light text-white" style={{borderRadius: "1rem"}}>
                  <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4">

                      <h2 className="fw-bold mb-2">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <form onSubmit={doLogin}>
                        <div className="form-outline form-white mb-4">
                            <input type="username" ref={(c) => loginName = c} id="typeEmailX" className="form-control form-control-lg" />
                            <label className="form-label" >Username</label>
                        </div>

                        <div className="form-outline form-white mb-4">
                            <input type="password" ref={(c) => loginPassword = c} id="typePasswordX" className="form-control form-control-lg" />
                            <label className="form-label">Password</label>
                        </div>

                        

                        <Button className="btn btn-outline-light btn-lg px-5" type="submit">Login</Button><br/>
                        <div className='pt-3'>{message}</div>
                      </form>
                    </div>
                    <div>
                      <p className="mb-0">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a></p>
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