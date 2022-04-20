<<<<<<< HEAD
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

=======
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Carousel from './Carousel';
import { useState } from 'react';
import { CardImg } from 'react-bootstrap';

function Home(){

    const [popular100movies, setPopular100Movies] = useState([]);
    const [top250movies, setTop250Movies] = useState([]);
    const [popular100tv, setPopular100TV] = useState([]);
    const [top250tv, setTop250TV] = useState([]);

    let bp = require('./Path.js'); 

    const load = async event => 
    {
        event.preventDefault();
        
        try
        {
            const response = await fetch(bp.buildPath('api/loadpopular100'),
            {method:'POST',headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            var _results = res.results;
            //Number of Search Results
            //setResults(`${_results.length} results found`);
            setPopular100Movies(_results)
            
        }
        catch(e)
        {
            console.log(e.toString());
            //setResults(e.toString());
        }

        try
        {
            const response = await fetch(bp.buildPath('api/loadtop250'),
            {method:'POST',headers:{'Content-Type': 'application/json'}});
            
            txt = await response.text();
            res = JSON.parse(txt);
            _results = res.results;
            //Number of Search Results
            //setResults(`${_results.length} results found`);
            setTop250Movies(_results)
            
        }
        catch(e)
        {
            console.log(e.toString());
            //setResults(e.toString());
        }

        try
        {
            const response = await fetch(bp.buildPath('api/loadpopular100tv'),
            {method:'POST',headers:{'Content-Type': 'application/json'}});
            
            txt = await response.text();
            res = JSON.parse(txt);
            _results = res.results;
            //Number of Search Results
            //setResults(`${_results.length} results found`);
            setPopular100TV(_results)
            
        }
        catch(e)
        {
            console.log(e.toString());
            //setResults(e.toString());
        }

        try
        {
            const response = await fetch(bp.buildPath('api/loadtop250tv'),
            {method:'POST',headers:{'Content-Type': 'application/json'}});
            
            txt = await response.text();
            res = JSON.parse(txt);
            _results = res.results;
            //Number of Search Results
            //setResults(`${_results.length} results found`);
            setTop250TV(_results)
            
        }
        catch(e)
        {
            console.log(e.toString());
            //setResults(e.toString());
        }
    };

    const popular100carouselItemData = popular100movies.slice(0,25).map((popular100movie) => {
        return (
            <div key={popular100movie.imdbID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={popular100movie.poster}
                        alt={popular100movie.title}
                        key={popular100movie.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${popular100movie.imdbID}`}
                        style={{ height:"255px", width:"170px", objectFit:"cover", borderRadius:"25px"}}
                        />
                </div>
            </div>
        );
    });

    const top250carouselItemData = top250movies.slice(0,25).map((top250movie) => {
        return (
            <div key={top250movie.imdbID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={top250movie.poster}
                        alt={top250movie.title}
                        key={top250movie.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${top250movie.imdbID}`}
                        style={{ height:"255px", width:"170px", objectFit:"cover", borderRadius:"25px"}}
                    />
                </div>
            </div>
        );
    });

    const popular100TVcarouselItemData = popular100tv.slice(0,25).map((popular100series) => {
        return (
            <div key={popular100series.imdbID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={popular100series.poster}
                        alt={popular100series.title}
                        key={popular100series.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${popular100series.imdbID}`}
                        style={{ height:"255px", width:"170px", objectFit:"cover", borderRadius:"25px"}}
                    />
                </div>
            </div>
        );
    });

    const top250TVcarouselItemData = top250tv.slice(0,25).map((top250series) => {
        return (
            <div key={top250series.imdbID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={top250series.poster}
                        alt={top250series.title}
                        key={top250series.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${top250series.imdbID}`}
                        style={{ height:"255px", width:"170px", objectFit:"cover", borderRadius:"25px"}}
                    />
                </div>
            </div>
        );
    });

    window.onload = load;
    
    return(
        <div className='p-2'>
            
            
                
                <Row className='my-5 rounded bg-dark'>
                    <div onClick={() => window.location.href = `/top100movies`}><h2>Popular Movies</h2></div>
                    <div style={{ maxWidth: 2000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={10}
                                infiniteLoop={true}
                            >
                                {popular100carouselItemData}
                        </Carousel>
                    </div>
                </Row>

                <div>
                <Row className='my-5 rounded bg-dark'>
                    <div onClick={() => window.location.href = `/top250movies`}><h2>Top Movies</h2></div>
                    <div style={{ maxWidth: 2000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={10}
                                infiniteLoop={true}
                            >
                                {top250carouselItemData}
                        </Carousel>
                    </div>
                </Row>
                </div>

                <div>
                <Row className='my-5 rounded bg-dark'>
                    <div onClick={() => window.location.href = `/top100series`}><h2>Popular Series</h2></div>
                    <div style={{ maxWidth: 2000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={10}
                                infiniteLoop={true}
                            >
                                {popular100TVcarouselItemData}
                        </Carousel>
                    </div>
                </Row>
                </div>

                <div>
                <Row className='my-5 rounded bg-dark'>
                    <div onClick={() => window.location.href = `/top250series`}><h2>Top Series</h2></div>
                    <div style={{ maxWidth: 2000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={10}
                                infiniteLoop={true}
                            >
                                {top250TVcarouselItemData}
                        </Carousel>
                    </div>
                </Row>
                </div>
                
            
            
        </div>
        
        
    )
}

>>>>>>> 5b71e0d061a1dc471efa3f197f29b590b4b8f6c0
export default Home;