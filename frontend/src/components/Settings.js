import React from 'react';
import { Button } from 'react-bootstrap';


function Settings() {
  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  var userId = ud.userId;    

  const load = async event => 
  {

    event.preventDefault();

    var obj = {ID:userId};
    var js = JSON.stringify(obj);

   
    
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

    try
    {
        const response = await fetch(buildPath('api/loadprofile'),
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
  

  

  return (
    <>
    <div className='primaryBackground'>
      <div className="d-flex container">                
        <div class="card bg-light">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://raw.githubusercontent.com/rebeccacasii/picturerepo/8eae73a0f0ac6f81f487eb31f0c32cb2e0dd0203/Asobi%20(1).png" class="img-fluid rounded-start" alt="..."/>
            </div>
   
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">Profile Settings &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;  
                <Button href="/profile" type="button" class="btn btn-link">Back to Profile</Button></h2>
                <p class="card-text">Edit Profile Information</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                <form>         
    
                      <div className='d-flex'>
                        <label>Username:</label>
                        </div>
                        <div className='d-flex'>
                        <input id="username" type="text" class="form-control"
                        aria-label="Change Username"/>
                      </div>

                      <div className='d-flex'>
                        <label>Password:</label>
                        </div>
                        <div className='d-flex'>
                        <input id="password" type="text" class="form-control" aria-label="Change password" aria-describedby="button-addon2"/>
                      </div>
                      
                      <div className='d-flex'>
                        <label>Email:</label>
                        </div>
                        <div className='d-flex'>
                        <input id="email" type="text" class="form-control"   aria-label="Change Email" aria-describedby="button-addon2"/>
                      </div>
                      
                      <div className='d-flex'>
                        <label>First Name:</label>
                        </div>
                        <div className='d-flex'>
                        <input id="first" type="text" class="form-control" aria-label="Change First Name" aria-describedby="button-addon2"/>
                      </div>

                      <div className='d-flex'>
                        <label>Last Name:</label>
                        </div>
                        <div className='d-flex'>
                        <input id="last" type="text" class="form-control" aria-label="Change Last Name" aria-describedby="button-addon2"/>
                        </div>
                      
                      <div className='d-flex'>
                        <label>Phone Number:</label>
                        </div>
                        <div className='d-flex'>
                        <input id="phone" type="text" class="form-control" aria-label="Change Phone Number" aria-describedby="button-addon2"/>
                      </div>

                      <Button className="m-3" type="submit">Save</Button>

                </form>

                <div class="card-body">
                  <button type="button" class="btn btn-link">Deactivate</button>
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
