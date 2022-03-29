import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from './Carousel';

function MovieUI() {
    

    if(true) {
        //Instanced Movie Page
  return (
    <div className='primaryBackground' style={{textAlign:"left"}}>
        
        <Container>
            <Row style={{ paddingTop: '25px' }}>
                <Col className='px-4 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                    <img src='' alt='Movie Poster' width={400} height={600}/>
                </Col>
                <Col>
                    <Row>
                        <Col >
                            <div>Movie Title</div>
                        </Col>
                        <Col md={{ yoffset:10, span: 10, offset: 5}}>
                            Rating
                        </Col>
                    </Row>
                    <Col className=' px-4 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
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
                    <Col className='px-3 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                        Synopsis:
                        <div>This is where the decription goes.</div>
                    </Col>
                    
                </Col>
                <Col className='px-4 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                    Streaming on:
                </Col>
            </Row>
            <Row className='p-2 my-2 rounded' style={{backgroundColor:"#484848"}}>
                <div>Trailers/Images</div>
                <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}}>
                    <Carousel
                            show={4}
                            infiniteLoop={true}
                        >
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                    </Carousel>
                </div>
            </Row>
            <Row className='p-2 my-2 rounded' style={{backgroundColor:"#484848"}}>
                <div>Actors</div>
                <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}}>
                    <Carousel
                            show={4}
                            infiniteLoop={true}
                        >
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                            <div>
                                <div style={{padding: 8}}>
                                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                </div>
                            </div>
                    </Carousel>
                </div>
            </Row>

        </Container>

    </div>
  )
    }
    else {
        //Default Movie Page
        return (
            <div className='primaryBackground' style={{textAlign:"left"}}>
        
            <Container>
                <Row style={{ paddingTop: '25px' }}>
                    <Col className='px-4 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                        <img src='' alt='Movie Poster' width={400} height={600}/>
                    </Col>
                    <Col>
                        <Row>
                            <Col >
                                <div>Movie Title</div>
                            </Col>
                            <Col md={{ yoffset:10, span: 10, offset: 5}}>
                                Rating
                            </Col>
                        </Row>
                        <Col className=' px-4 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
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
                        <Col className='px-3 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                            Synopsis:
                            <div>This is where the decription goes.</div>
                        </Col>
                        
                    </Col>
                    <Col className='px-4 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                        Streaming on:
                    </Col>
                </Row>
                <Row className='p-2 my-2 rounded' style={{backgroundColor:"#484848"}}>
                    <div>Trailers/Images</div>
                    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                        </Carousel>
                    </div>
                </Row>
                <Row className='p-2 my-2 rounded' style={{backgroundColor:"#484848"}}>
                    <div>Actors</div>
                    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                                    </div>
                                </div>
                        </Carousel>
                    </div>
                </Row>
    
            </Container>
    
        </div>
        )
    }
}

export default MovieUI;