import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'
import '../custom.scss'

function PasswordRecovery()
{
    var recoveryCode;
    var newPassword;
    
    const [message,setMessage] = useState('');

    let bp = require('./Path.js');    

    const doPasswordRecovery = async event => 
    {
        event.preventDefault();

        var obj = {userid:recoveryCode.value, newpassword:newPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch(bp.buildPath('api/passwordrecovery'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var res = JSON.parse(await response.text());

            var obj = {ID:recoveryCode.value};
            var js = JSON.stringify(obj);

            try
            {    
                const response = await fetch(bp.buildPath('api/checkprofile'),
                    {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
                
                var res = JSON.parse(await response.text());

                if(res.login != "")
                {
                  window.location.href = '/login';
                }
                else
                {
                  setMessage('Recovery code incorrect');
                }
            }
            catch(e)
            {
                console.log(e.toString());
                return;
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
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-light text-white" style={{borderRadius: "1rem"}}>
                  <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4">

                      <h2 className="fw-bold mb-2 text-uppercase">Reset Password</h2>
                      <p className="text-white-50 mb-5">Please enter the recovery code sent to your email</p>

                      <form onSubmit={doPasswordRecovery}>
                        <div className="form-outline form-white mb-4">
                            <input type="text" ref={(c) => recoveryCode = c} id="typeRecoveryX" className="form-control form-control-lg" />
                            <label className="form-label" >Recovery Code</label>
                        </div>
                        <div className="form-outline form-white mb-4">
                            <input type="text" ref={(c) => newPassword = c} id="typePasswordX" className="form-control form-control-lg" />
                            <label className="form-label" >New Password</label>
                        </div>
                        <Button className="btn btn-outline-light btn-lg px-5" type="submit">Reset</Button><br/>
                        <div classNameName='pt-3'>{message}</div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

     </>
    );
};

export default PasswordRecovery;