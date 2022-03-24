import React from 'react';
import Register from '../components/Register';
import NavBar from '../components/NavBar';
import Signup from '../components/Test';

const RegisterPage = () =>
{
    
    return(
      <div className="primaryBackground">
        <NavBar/>
        <Register/>
        <Signup />
      </div>
    );
};

export default RegisterPage;