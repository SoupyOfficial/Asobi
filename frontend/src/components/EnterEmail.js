import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'
import '../custom.scss'
import validator from 'validator';
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from "formik";

emailjs.init("hEbhp0TDCQpMccQ5c");

function EnterEmail()
{
    var email;

    let bp = require('./Path.js');    

    const doEnterEmail = async event => 
    {
        event.preventDefault();

        var obj = {email:email.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch(bp.buildPath('api/loadprofileemail'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var res = JSON.parse(await response.text()); 
    
            emailjs.send("service_f0xdcct","template_x56wsrj",{
                firstName: res.firstName,
                email:email.value,
                code: res.id,
                });

            window.location.href = '/passwordrecovery';
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

                      <h2 className="fw-bold mb-2 text-uppercase">Enter Email</h2>
                      <p className="text-white-50 mb-5">Please enter the email connected to your account</p>

                      <form onSubmit={doEnterEmail}>
                        <div className="form-outline form-white mb-4">
                            <input type="text" ref={(c) => email = c} id="typeEmailX" className="form-control form-control-lg" />
                            <label className="form-label" >Email</label>
                        </div>

                        

                        <Button className="btn btn-outline-light btn-lg px-5" type="submit">Continue</Button><br/>
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

export default EnterEmail;