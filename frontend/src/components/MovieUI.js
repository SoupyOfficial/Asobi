import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Carousel from './Carousel';

const MovieUI = ({imdbID}) => {
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.userId;    
    

    let bp = require('./Path.js'); 

    const searchMovie = async event => 
    {
        
        event.preventDefault();
        const queryParams = new URLSearchParams(window.location.search);

        const imdbID = queryParams.get('imdbID');

        if(imdbID == null) {
            window.location = '/search'
        }

        console.log(imdbID)
        
        var obj = {ID:imdbID};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/loadmovie'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            console.log(res)
            document.querySelector("#title").innerHTML = res.title
            document.querySelector("#poster").src = res.poster
            document.querySelector("#plot").innerHTML = res.plot
            document.querySelector("#released").innerHTML = res.released
            document.querySelector("#director").innerHTML = res.director
            document.querySelector("#genre").innerHTML = res.genre
            console.log(res.ratings)
            res.ratings.map((rating) => {
                document.querySelector('#ratings').innerHTML += rating.Source + ': ' + rating.Value + "<br/>";
                return true;
            })
            
        }
        catch(e)
        {
            console.log(e.toString());
        }
    };
    window.onload = searchMovie;

    const addToWatchlist = async event =>
    {
        event.preventDefault();
        const queryParams = new URLSearchParams(window.location.search);

        const imdbID = queryParams.get('imdbID');
        
        var obj = {userid:userId,ID:imdbID};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/addtowatchlist'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            console.log(res)
            
        }
        catch(e)
        {
            console.log(e.toString());
        }
    }

  return (
    <div className='primaryBackground' style={{textAlign:"left"}}>
        
        <Container>
            <Row style={{ paddingTop: '25px' }}>
                <Col className='px-4 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                    <img src='' id="poster" alt='Movie Poster' width={400} height={600}/>
                </Col>
                <Col>
                    <Row>
                        <Col >
                            <h3 id="title">Title</h3>
                            <Button onClick={addToWatchlist}>Add to Watchlist</Button>
                        </Col>
                        <Col md={{ yoffset:10, span: 10, offset: 5}}>
                            Rating
                            <div id="ratings"></div>
                        </Col>
                    </Row>
                    <Col className=' px-4 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                        <Row>
                            Released:
                            <div id="released"></div>
                        </Row>
                        <Row>
                            Genre:
                            <div id="genre"></div>
                        </Row>
                        <Row>
                            Directed By:
                            <div id="director"></div>
                        </Row>
                    </Col>
                    <Col className='px-3 m-1 ms-md-auto rounded' style={{backgroundColor:"#484848"}}>
                        Synopsis:
                        <div id="plot"></div>
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

export default MovieUI;