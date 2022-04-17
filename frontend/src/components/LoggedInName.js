import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

function LoggedInName()
{

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var firstName = ud.firstName;

    const doLogout = event => 
    {
        event.preventDefault();

        localStorage.removeItem("user_data")
        window.location.href = '/login';

    };  
      
  return(
   <>
    <div className="d-flex">
      <Navbar.Brand className='align-items-center justify-content-center' id="userName" style={{ color: "white", textAlign: "center"}} href='/profile'>{firstName}</Navbar.Brand><br />
    </div>

    <div className="col">
      <Button type="button" id="logoutButton" className="buttons" 
     onClick={doLogout}> Log Out </Button>
    </div>
   
   </>
  );

};

export default LoggedInName;