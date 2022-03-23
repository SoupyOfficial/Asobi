import React from 'react';
import Login from '../components/Login';
import NavBar from '../components/NavBar';

const LoginPage = () =>
{
    return(
      <div  className="primaryBackground">
        <NavBar/>
        <div style={{ margin: 25}}>
        <Login />
        </div>
      </div>
    );
};
export default LoginPage;