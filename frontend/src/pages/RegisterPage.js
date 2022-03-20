import React from 'react';
import Register from '../components/Register';
import NavBar from '../components/NavBar';

const RegisterPage = () =>
{
    
    return(
      <div  className="text-center" style={{ backgroundColor: "#212121", color: "white", height: '100vh'}}>
        <NavBar/>
        <Register />
      </div>
    );
};

export default RegisterPage;