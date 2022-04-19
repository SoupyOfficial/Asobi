//import React from 'react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Settings() {
  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  var userId = ud.userId;

  var newLogin = '';
  var newPassword = '';
  var newFirst = '';
  var newLast = '';
  var newEmail = '';
  var newPhone = '';    
  let bp = require('./Path.js'); 
  const [searchResults,setMessage] = useState('');

  const load = async event => 
  {

    event.preventDefault();

    var obj = {ID:userId};
    var js = JSON.stringify(obj);

   
    
    //let bp = require('./Path.js'); 

    try
    {
        const response = await fetch(bp.buildPath('api/loadprofile'),
        {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
        
        var txt = await response.text();
        var res = JSON.parse(txt);
        document.getElementById("username").defaultValue = res.login;
        document.getElementById("password").value = res.password;
        document.getElementById("email").value = res.email;
        document.getElementById("phone").value = res.phoneNumber;
        document.getElementById("first").value = ud.firstName;
        document.getElementById("last").value = ud.lastName;

        
    }
    catch(e)
    {
        console.log(e.toString());
    }
  }
  window.onload = load;
  
  const doEdit = async event => 
  {
      event.preventDefault();
      

      var obj = {userId:userId,email:newEmail.value,phoneNumber:newPhone.value,login:newLogin.value,password:newPassword.value,firstName:newFirst.value,lastName:newLast.value};

      var js = JSON.stringify(obj);
      //let bp = require('./Path.js'); 


      try
      {    
          const response = await fetch(bp.buildPath('api/editprofile'),
          {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
          
          var res = JSON.parse(await response.text());  
          
          if( res.error.length > 0 )
          {
              setMessage("API Error:" + res.error );
          }
          else
          {
              //add loca
              //var user = {userId:userId,firstName:firstName.value,lastName:lastName.value}
              //localStorage.setItem('user_data', JSON.stringify(user));
              //window.location.href = '/profile';
          }
      }
      catch(e)
      {
          setMessage(e.toString());
      }    
  };
  

  return (
    <>
    <div className='primaryBackground'>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">              
          <div className="card bg-light">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://raw.githubusercontent.com/rebeccacasii/picturerepo/8eae73a0f0ac6f81f487eb31f0c32cb2e0dd0203/Asobi%20(1).png" className="img-fluid rounded-start" alt="..."/>
              </div>
   
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">Profile Settings &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;  
                  <Button href="/profile" type="button" className="btn btn-link">Back to Profile</Button></h2>
                  <p className="card-text">Edit Profile Information</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  <form onSubmit={doEdit}>         
                    <div className='d-flex'>
                      <label>Username:</label>
                    </div>
                    <div className='d-flex'>
                      <input id="username" ref={(c) => newLogin = c} type="text" className="form-control" aria-label="Change Username"/>
                    </div>

                    <div className='d-flex'>
                      <label>Password:</label>
                    </div>
                    <div className='d-flex'>
                      <input id="password" ref={(c) => newPassword = c} type="text" className="form-control" aria-label="Change password" aria-describedby="button-addon2"/>
                    </div>
                      
                    <div className='d-flex'>
                      <label>Email:</label>
                    </div>
                    <div className='d-flex'>
                      <input id="email" ref={(c) => newEmail = c} type="text" className="form-control"   aria-label="Change Email" aria-describedby="button-addon2"/>
                    </div>
                      
                    <div className='d-flex'>
                      <label>First Name:</label>
                    </div>
                    <div className='d-flex'>
                      <input id="first" ref={(c) => newFirst = c} type="text" className="form-control" aria-label="Change First Name" aria-describedby="button-addon2"/>
                    </div>

                    <div className='d-flex'>
                      <label>Last Name:</label>
                    </div>
                    <div className='d-flex'>
                      <input id="last" ref={(c) => newLast = c} type="text" className="form-control" aria-label="Change Last Name" aria-describedby="button-addon2"/>
                    </div>
                      
                    <div className='d-flex'>
                      <label>Phone Number:</label>
                    </div>
                    <div className='d-flex'>
                      <input id="phone" ref={(c) => newPhone = c} type="text" className="form-control" aria-label="Change Phone Number" aria-describedby="button-addon2"/>
                    </div>

                    <Button className="m-3" type="submit" >Save</Button>
                  </form>

                  <div className="card-body">
                    <button type="button" className="btn btn-link">Deactivate</button>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Settings;