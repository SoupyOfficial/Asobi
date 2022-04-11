import React from 'react';
import { Button } from 'react-bootstrap';

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
   <div id="loggedInDiv">
   <span id="userName">Logged In As {firstName}</span><br />
   <Button type="button" id="logoutButton" class="buttons" 
     onClick={doLogout}> Log Out </Button>
   </div>
  );

};

export default LoggedInName;