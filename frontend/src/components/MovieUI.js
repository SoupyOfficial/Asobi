import React, {useState} from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Carousel from './Carousel';

const MovieUI = ({imdbID}) => {
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;    
    const [message,setMessage] = useState('');

    let bp = require('./Path.js');
    

    const app_name = 'asobi-1'
    function buildPath(route)
    {
        if (process.env.NODE_ENV === 'production') 
        {
            return 'https://' + app_name +  '.herokuapp.com/' + route;
        }
        else
        {        
            return 'http://localhost:5000/' + route;
        }
    }

    const [searchResults,setResults] = useState('');
    const [title,setTitle] = useState('');
    const [poster,setPoster] = useState('');

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
            const response = await fetch(buildPath('api/loadmovie'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            //console.log(res)
            document.querySelector("#title").innerHTML = res.title
            setTitle(res.title);
            document.querySelector("#poster").src = res.poster
            setPoster(res.poster);
            document.querySelector("#plot").innerHTML = res.plot
            document.querySelector("#released").innerHTML = res.released
            document.querySelector("#director").innerHTML = res.director
            document.querySelector("#genre").innerHTML = res.genre
            //console.log(res.ratings)
            res.ratings.map((rating) => {
                document.querySelector('#ratings').innerHTML += rating.Source + ': ' + rating.Value + "<br/>";
                return true;
            })
            
        }
        catch(e)
        {
            console.log(e.toString());
            setResults(e.toString());
        }
    };
    window.onload = searchMovie;

    const addToWatchlist = async event =>
    {
        event.preventDefault();
        
        const queryParams = new URLSearchParams(window.location.search);
        const imdbID = queryParams.get('imdbID');
        
        var obj = {ID:userId};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/loadprofile'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            console.log(res)
            for(var i = 0; i < res.watchList.length; i++) {
                if(res.watchList[i] === imdbID) {
                    setMessage("Already in watchlist")
                    return;
                }
            }
            
        }
        catch(e)
        {
            console.log(e.toString());
        }

        obj = {userId:userId,ID:{ID:imdbID, Title:title, Poster:poster}};
        js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(bp.buildPath('api/addtowatchlist'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            txt = await response.text();
            res = JSON.parse(txt);
            //console.log(res)
            setMessage("Added to watchlist")
            
        }
        catch(e)
        {
            console.log(e.toString());
        }
    }

  return (
    <div className='primaryBackground' style={{textAlign:"left"}}>
        
        <Container>
            <Row className='' style={{ paddingTop: '25px' }}>
                <Col className=' rounded'>
                    <img src='' id="poster" alt='Movie Poster' width="100%" height="100%" style={{borderRadius:"25px"}}/>
                </Col>
                <Col>
                    <Row>
                        <Col >
                            <h3 id="title">Title</h3>
                            <Row>
                                <Col><Button onClick={addToWatchlist}>Add to Watchlist</Button></Col>
                                <Col><div>{message}</div></Col>
                            </Row>
                        </Col>
                        <Col md={{ yoffset:10, span: 10}}>
                            Rating
                            <div id="ratings"></div>
                        </Col>
                    </Row>
                    <Col className=' px-4 m-1 rounded' style={{backgroundColor:"#484848"}}>
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
                <Col className='px-4 rounded' style={{backgroundColor:"#484848"}}>
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