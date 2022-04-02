import React from 'react';
import { Navbar, Dropdown, Container, Col} from 'react-bootstrap'
import Login from './Login'
import Register from './Register';
import '../App.css'
import LoggedInName from './LoggedInName';
import { Link } from 'react-router-dom';
import Asobi from '../Asobi.png';

function NavBar() {

  var search = '';

  const doSearch = async event =>
   {
    console.log(search.value);
   
}

    
    

  return (
    <>
    <div className='NavBackground'>
        <Navbar fluid="true">
                <Navbar.Brand href='/home'>
                    <img src={Asobi} style={{ height:"3rem", width: "10rem"}}/>
                </Navbar.Brand>            
                <Navbar.Brand style={{ color: "white"}} href='/profile'>Profile</Navbar.Brand>
            
                <Navbar.Brand style={{ color: "white"}} href='/discover'>Discover</Navbar.Brand>

                <Navbar.Brand style={{ color: "white"}} href='/movie'>Movie Page</Navbar.Brand>

                <Navbar.Brand style={{ color: "white"}} href='/search'>Search Page</Navbar.Brand>
            
            <div className="navbar-nav ms-auto">
              {/* Check Login Status */}
            <div className='LoggedIn'>
                    {localStorage.getItem('user_data') ? <LoggedInName/> : 
                  
                <div className="navbar-nav ms-auto">
                    {/* Login Button */} 
                  <Dropdown align='end'>
                    <Dropdown.Toggle style={{ borderRadius:10, margin: 5 }}>Login</Dropdown.Toggle>
                    <Dropdown.Menu style={{ borderRadius: 10, borderColor: '484848' }}>
                      <Login/>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Register Button */} 
                  <Dropdown align='end' style={{ position: 'sticky'}}>
                    <Dropdown.Toggle style={{ borderRadius:10, margin: 5 }}>Sign Up</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Register/>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                    }
            </div>
          </div>     
        </Navbar>
    </div>  
    </>
  )
}

export default NavBar;