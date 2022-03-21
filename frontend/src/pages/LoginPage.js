import React from 'react';
import Login from '../components/Login';
import NavBar from '../components/NavBar';
const LoginPage = () =>
{
    return(
      <div className="text-center" style={{ backgroundColor: "#212121", color: "white", height: '100vh'}}>
        <NavBar/>
        <div style={{ margin: 25}}>
        <Login />
        </div>
      </div>
    );
};
export default LoginPage;