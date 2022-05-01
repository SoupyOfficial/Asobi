//import React from 'react';
import '../App.css';
import React, { useState } from 'react';
import './LoggedInName'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import LoggedInName from './LoggedInName';


function Settings() {
  
  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  const userId = ud.id;

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
  
  const handleDeactivate = async event => 
  {
    event.preventDefault();
    const options = {
      title: 'Deactivate Account',
      message: 'Are you sure you want to deactivate your account? This cannot be undone.',
      buttons: [
        {
          label: 'Yes',
          onClick: deactivate
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      childrenElement: () => <div />,
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypressEscape: () => {},
      overlayClassName: "overlay-custom-class-name"
    };
    
    confirmAlert(options);

    
  }
  
  const deactivate = async event => {

    console.log(userId);
    var obj = {ID:userId};
    var js = JSON.stringify(obj);

    try
    {
        const response = await fetch(bp.buildPath('api/deactivate'),
        {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
        
        localStorage.removeItem("user_data")
        window.location.href = '/';
    }
    catch(e)
    {
        console.log(e.toString());
    }
  }
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

                    <button className="btn btn-info" type="submit" >Save</button>
                  </form>

                  <div className="card-body">
                    <button onClick={handleDeactivate} type="button" className="btn btn-link">Deactivate</button>
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