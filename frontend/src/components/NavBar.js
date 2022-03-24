import React from 'react';
import { Navbar, Dropdown, Container, Col} from 'react-bootstrap'
import Login from './Login'
import Register from './Register';
import '../App.css'
import LoggedInName from './LoggedInName';

function NavBar() {

  return (
    <>
    <div >
        <Navbar className='secondaryBackground' fluid>
                <Navbar.Brand href='/home'>
                    <h1 style={{ color: "blue"}}>Asobi</h1>
                </Navbar.Brand>            
                <Navbar.Brand style={{ color: "white"}} href='/profile'>Profile</Navbar.Brand>
            
                <Navbar.Brand style={{ color: "white"}} href='/discover'>Discover</Navbar.Brand>

                <Navbar.Brand style={{ color: "white"}} href='/movie'>Movie Page</Navbar.Brand>
            
                <Col md={{span: 'auto', offset: 3}}>
                  /*LoggedInName*/

                </Col>
            <Container>
                <Dropdown align='end'>
                  <Dropdown.Toggle style={{ borderRadius:10, margin: 5 }}>Login</Dropdown.Toggle>
                  <Dropdown.Menu style={{ borderRadius: 10, borderColor: '484848' }}>
                    <Login/>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown align='end' style={{ position: 'sticky'}}>
                <Dropdown.Toggle style={{ borderRadius:10, margin: 5 }}>Sign Up</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Register/>
                  </Dropdown.Menu>
                </Dropdown>
                </Container>
        </Navbar>
    </div>
    
    </>
  )
}

export default NavBar;