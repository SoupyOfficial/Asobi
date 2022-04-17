import React from 'react';
import { Navbar, Dropdown, Row } from 'react-bootstrap'
import Login from './Login'
import Register from './Register';
import '../App.css'
import LoggedInName from './LoggedInName';
import Asobi from '../Asobi.png';
function NavBar() {    

  return (
    <>
    <div className='NavBackground'>
        <Navbar fluid="true">
                <Navbar.Brand href='/home'>
                    <img src={Asobi} alt={<h1 style={{ color: "blue"}}>Asobi</h1>} style={{ height:"3rem", width: "10rem"}}/>
                </Navbar.Brand>            
            
                <Dropdown>
                  <Dropdown.Toggle style={{ fontSize:"1.5rem", borderRadius:10, margin: 5 }}>Popular</Dropdown.Toggle>
                  <Dropdown.Menu className='bg-light'>
                    <Row style={{textAlign:"center"}}><Navbar.Brand style={{ color: "white"}} href='/top100movies'>Movies</Navbar.Brand></Row>
                    <Row style={{textAlign:"center"}}><Navbar.Brand style={{ color: "white"}} href='/top100series'>Series</Navbar.Brand>  </Row>
                  </Dropdown.Menu>  
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle style={{ fontSize:"1.5rem", borderRadius:10, margin: 5 }}>Top Rated</Dropdown.Toggle>
                  <Dropdown.Menu className='bg-light'>
                    <Row style={{textAlign:"center"}}><Navbar.Brand style={{ color: "white"}} href='/top250movies'>Movies</Navbar.Brand></Row>
                    <Row style={{textAlign:"center"}}><Navbar.Brand style={{ color: "white"}} href='/top250series'>Series</Navbar.Brand>  </Row>
                  </Dropdown.Menu>  
                </Dropdown>

                <Navbar.Brand style={{ color: "white"}} href='/search'>Search Page</Navbar.Brand>
            
            <div className="navbar-nav ms-auto">
              {/* Check Login Status */}
            <div className='d-flex col'>
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