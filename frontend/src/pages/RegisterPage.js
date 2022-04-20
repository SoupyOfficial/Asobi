import React from 'react';
import Register from '../components/Register';

const RegisterPage = () =>
{
    
    return(
      <>
        <div className="primaryBackground" style={{minHeight: "100vh", maxHeight:"100vh", minWidth:"100vw", maxWidth:"100vw"}}>        
          <Register/>
        </div>
      </>
    );
};

export default RegisterPage;