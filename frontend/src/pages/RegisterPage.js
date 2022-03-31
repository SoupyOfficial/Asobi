import React from 'react';
import Register from '../components/Register';
import NavBar from '../components/NavBar';

const RegisterPage = () =>
{
    
    return(
      <>
        <div className="primaryBackground" style={{minHeight: "100vh"}}>        
          <Register/>
        </div>
      </>
    );
};

export default RegisterPage;