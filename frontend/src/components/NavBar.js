import React, { useRef } from 'react'
import { Button, Col, Container, Form, Nav } from 'react-bootstrap'

function NavBar() {

  const SearchRef = useRef()
  return (
    <>
    <div className="text-center" style={{ backgroundColor: "#484848", color: "white", width:'100vw'}}>
        <Container fluid className='row' style={{textAlign: 'center'}}>
            <div className='col'><h1 style={{ color: "blue"}}>Asobi</h1></div>
            <Nav.Link className='col' href='/home'>Home</Nav.Link>
            <Nav.Link className='col' href='/profile'>Profile</Nav.Link>
            <Nav.Link className='col' href='/discover'>Discover</Nav.Link>
            <Nav.Link className='col' href='/movie'>Movie Page</Nav.Link>
            <Button className="col" style={{ margin: 5, padding: 5 }} href='/' >Login</Button>
            <Button className="col" style={{ margin: 5, padding: 5 }} href='/register'>Sign Up</Button>
                
        </Container>
    </div>
    
    </>
  )
}

export default NavBar;