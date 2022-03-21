import React, { useRef } from 'react';
import { Button, Col, Navbar, Dropdown} from 'react-bootstrap'
import Login from './Login'

function NavBar() {

  const SearchRef = useRef()
  return (
    <>
    <div style={{ backgroundColor: "#484848", color: "white"}}>
        <Navbar fluid>
                <Navbar.Brand href='/home'>
                    <h1 style={{ color: "blue"}}>Asobi</h1>
                </Navbar.Brand>
            
            
                <Navbar.Brand style={{ color: "white"}} href='/profile'>Profile</Navbar.Brand>
            
                <Navbar.Brand style={{ color: "white"}} href='/discover'>Discover</Navbar.Brand>

            <Navbar.Brand style={{ color: "white"}} href='/movie'>Movie Page</Navbar.Brand>
            <Col md={{offset: 3}}>
                <Dropdown>
                  <Dropdown.Toggle>Login</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Login/>
                  </Dropdown.Menu>
                  <Button className='position-sticky top-0 end-0' style={{ margin: 5, padding: 5 }} href='/register'>Sign Up</Button>
                </Dropdown>
            </Col>
        </Navbar>
    </div>
    
    </>
  )
}

export default NavBar;