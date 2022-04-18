import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'
import '../custom.scss'

function Verify()
{
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.userId; 

    var verificationCode;
    
    const [message,setMessage] = useState('');

    let bp = require('./Path.js');    

    const doVerify = async event => 
    {
        event.preventDefault();

        var obj = {userid:verificationCode.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch(bp.buildPath('api/verify'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var res = JSON.parse(await response.text());

            if(verificationCode.value == userId)
            {
              window.location.href = '/profile';
            }
            else
            {
              setMessage('Verification code incorrect');
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

                      <h2 class="fw-bold mb-2 text-uppercase">Verify</h2>
                      <p class="text-white-50 mb-5">Please enter the verification code sent to your email</p>

                      <form onSubmit={doVerify}>
                        <div class="form-outline form-white mb-4">
                            <input type="text" ref={(c) => verificationCode = c} id="typeVerifyX" class="form-control form-control-lg" />
                            <label class="form-label" >Verification Code</label>
                        </div>

                        

                        <Button class="btn btn-outline-light btn-lg px-5" type="submit">Verify</Button><br/>
                        <div className='pt-3'>{message}</div>
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

export default Verify;