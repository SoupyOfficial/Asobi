import React, { useRef } from 'react'
import { Button, Col, Container, Form, Nav } from 'react-bootstrap'

function NavBar() {

  const SearchRef = useRef()
  return (
    <>
    <div className="text-center" style={{ backgroundColor: "#484848", color: "white", width:'100vw'}}>
        <Container className='row' style={{textAlign: 'center'}}>
            <div className='col-md-auto'><h1 style={{ color: "blue"}}>Asobi</h1></div>
            <Nav.Link className='col-md-auto' href='/home'>Home</Nav.Link>
            <Nav.Link className='col-md-auto' href='/profile'>Profile</Nav.Link>
            <Nav.Link className='col-md-auto' href='/discover'>Discover</Nav.Link>
            <Nav.Link className='col-md-auto' href='/movie'>Movie Page</Nav.Link>
            <Col className='row' md={{offset:6}}>
                
                    <Form.Control className='m-1' onSubmit="event.preventDefault()" autoFocus style={{backgroundColor: "#484848", color: "white", textAlign: 'center', borderColor: 'black'}} ref={SearchRef} type="text" placeholder="Search"/>
                    <Button className="col-md-auto" href='/' >Login</Button>
                    <Button className="col-md-auto" href='/register'>Sign Up</Button>
                
            </Col>
        </Container>
    </div>
    
    </>
  )
}

export default NavBar;