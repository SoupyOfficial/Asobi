//import React from 'react';
import '../App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


function Settings() {
  
  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  var userId = ud.id;

  var newLogin = '';
  var newPassword = '';
  var newFirst = '';
  var newLast = '';
  var newEmail = '';
  var newPhone = '';
  var LastUpdated = document.lastModified;
    
  let bp = require('./Path.js'); 
  const [message,setMessage] = useState('');

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
            setMessage('Profile Updated');
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

          <div className="card bg-transparent shadow">
            <div className="row g-0">

              <div className="col-md-2">
              </div>
   
              <div className="col-md-8">
                <div className="card-body">


        <div className="container-fluid d-flex align-items-center justify-content-center">

            <div className="picture-container">
                  <div className="picture">

                    <img src="https://raw.githubusercontent.com/rebeccacasii/picturerepo/main/Black%20%26%20White%20Gear%20Cloud%20Brand%20Logo.png" className="picture-src" id="picturePreview" title=""></img>
                  </div>
              </div>
        </div>

        <p className="card-text">&emsp;</p>
        <h2>Profile Settings</h2>
        <p className="card-text">Edit Profile Information</p>
        <a href="/profile" type="button" className="btn btn-info">Back to Profile</a>
        <p className="card-text"><small className="text-muted">Last updated {LastUpdated} </small></p>


                  <form onSubmit={doEdit}>     
                    {message}    
                    <div className='d-flex'>

                    <label>&emsp;</label>
                    </div>
                    <div className='d-flex'>
                      <input id="username" ref={(c) => newLogin = c} type="text" className="form-control" placeholder="Username" aria-label="Change Username"/>
                    </div>

                    <div className='d-flex'>
                      <label>&emsp;</label>
                    </div>
                    <div className='d-flex'>
                      <input id="password" ref={(c) => newPassword = c} type="text" className="form-control" placeholder="Password" aria-label="Change password" aria-describedby="button-addon2"/>
                    </div>
                      
                    <div className='d-flex'>
                      <label>&emsp;</label>
                    </div>
                    <div className='d-flex'>
                      <input id="email" ref={(c) => newEmail = c} type="text" className="form-control" placeholder="Email"  aria-label="Change Email" aria-describedby="button-addon2"/>
                    </div>
                      
                    <div className='d-flex'>
                      <label>&emsp;</label>
                    </div>
                    <div className='d-flex'>
                      <input id="first" ref={(c) => newFirst = c} type="text" className="form-control" placeholder="First Name" aria-label="Change First Name" aria-describedby="button-addon2"/>
                    </div>

                    <div className='d-flex'>
                      <label>&emsp;</label>
                    </div>
                    <div className='d-flex'>
                      <input id="last" ref={(c) => newLast = c} type="text" className="form-control" placeholder="Last Name" aria-label="Change Last Name" aria-describedby="button-addon2"/>
                    </div>
                      
                    <div className='d-flex'>
                      <label>&emsp;</label>
                    </div>
                    <div className='d-flex'>
                      <input id="phone" ref={(c) => newPhone = c} type="text" className="form-control" placeholder="Phone Number" aria-label="Change Phone Number" aria-describedby="button-addon2"/>
                    </div>

                    <div className='d-flex'>
                      <label>&emsp;</label>
                    </div>

                    <Button className="btn btn-info" type="submit" >Save</Button>
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