import React from 'react';
import { Button } from 'react-bootstrap';

function LoggedInName()
{

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;
    console.log(firstName);

    const doLogout = event => 
    {
        event.preventDefault();

        localStorage.removeItem("user_data")
        window.location.href = '/';

    };  
      
  return(
   <div id="loggedInDiv"style=
   {{
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
     padding: "10px",
   }}>
   <a id="userName" style={{color:'white', margin:'0px 10px', textDecoration:"none", fontSize:'20px'}} href='/profile'>{firstName + " " + lastName}</a><br />
   <Button type="button" id="logoutButton" class="buttons" 
     onClick={doLogout}> Log Out </Button>
   </div>
  );

};

export default LoggedInName;