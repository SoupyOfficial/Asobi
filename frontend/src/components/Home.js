import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from './Carousel';
import NavBar from './NavBar';

function Home(){
    return(
        <div>
            
            <Container>
                
                <Row className='p-2 my-2 rounded' style={{backgroundColor:"#484848"}}>
                    <div>Popular Movies</div>
                    <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" alt="placeholder" style={{width: '100%'}} />
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

                <div>
                <Row className='p-2 my-2 rounded' style={{backgroundColor:"#484848"}}>
                    <div>Trending Movies</div>
                    <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" alt="placeholder" style={{width: '100%'}} />
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
                </div>

                <div>
                <Row className='p-2 my-2 rounded' style={{backgroundColor:"#484848"}}>
                    <div>Best Sellers</div>
                    <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                <div>
                                    <div style={{padding: 8}}>
                                        <img src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" alt="placeholder" style={{width: '100%'}} />
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
                </div>
                
            </Container>
            
        </div>
        
        
    )
}

export default Home;