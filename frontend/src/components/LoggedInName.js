import React from 'react';
import { Button } from 'react-bootstrap';

function LoggedInName()
{

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    const doLogout = event => 
    {
        event.preventDefault();

        localStorage.removeItem("user_data")
        window.location.href = '/';

    };  
      
  return(
   <div className="loggedInDiv" id="loggedInDiv"style=
   {{
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
     padding: "10px",
   }}>
   <a className="navUserName" id="userName" href='/profile'>{firstName + " " + lastName}</a><br />
   <Button type="button" id="logoutButton" className="buttons" 
     onClick={doLogout}> Log Out </Button>
   </div>
  );

};

export default LoggedInName;