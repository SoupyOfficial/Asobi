import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function MovieUI() {
  return (
    <div>
        
        <Container>
            <Row style={{ paddingTop: '25px' }}>
                <Col md={3}>
                    <img src='' alt='Movie Poster'/>
                </Col>
                <Col>
                    <Row>
                        <Col md={5}>
                            Movie Title
                        </Col>
                        <Col md={{ yoffset:10, span: 10, offset: 5}}>
                            Rating
                        </Col>
                    </Row>
                    <Col style={{borderRadius:'10px', paddingLeft: '20px', backgroundColor: "#484848", color: "white"}}>
                        <Row>
                            Year:
                        </Row>
                        <Row>
                            Genre:
                        </Row>
                        <Row>
                            Directed By:
                        </Row>
                    </Col>
                    <Row style={{borderRadius:'10px', margin: '0px' , marginTop: '15px', paddingBottom: '150px', paddingLeft: '20px', backgroundColor: "#484848", color: "white"}}>
                        Synopsis:
                    </Row>
                    
                </Col>
                <Col md={3} style={{borderRadius:'10px', paddingLeft: '0px', backgroundColor: "#484848", color: "white"}}>
                    Streaming on:
                </Col>
            </Row>
            <Row style={{borderRadius:'10px', marginTop: '25px', paddingBottom: '150px', paddingLeft: '20px', backgroundColor: "#484848", color: "white"}}>
                Trailers/Images
            </Row>
            <Row style={{borderRadius:'10px', marginTop: '25px', paddingBottom: '150px', paddingLeft: '20px', backgroundColor: "#484848", color: "white"}}>
                Actors
            </Row>

        </Container>

    </div>
  )
}

export default MovieUI;