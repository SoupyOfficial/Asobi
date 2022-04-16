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

    const popular100carouselItemData = popular100movies.slice(0,10).map((popular100movie) => {
        return (
            <div className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={popular100movie.poster}
                        alt={popular100movie.title}
                        key={popular100movie.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${popular100movie.imdbID}`}
                        style={{width:"auto", height:"auto"}}
                    />
                </div>
            </div>
        );
    });

    const top250carouselItemData = top250movies.slice(0,10).map((top250movie) => {
        return (
            <div className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={top250movie.poster}
                        alt={top250movie.title}
                        key={top250movie.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${top250movie.imdbID}`}
                        style={{width:"auto", height:"auto"}}
                    />
                </div>
            </div>
        );
    });

    const popular100TVcarouselItemData = popular100tv.slice(0,10).map((popular100series) => {
        return (
            <div className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={popular100series.poster}
                        alt={popular100series.title}
                        key={popular100series.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${popular100series.imdbID}`}
                        style={{width:"auto", height:"auto"}}
                    />
                </div>
            </div>
        );
    });

    const top250TVcarouselItemData = top250tv.slice(0,10).map((top250series) => {
        return (
            <div className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                <div className='card bg-dark border-0'>
                    <CardImg
                        className={`row_poster ${"row_posterLarge"}`}
                        src={top250series.poster}
                        alt={top250series.title}
                        key={top250series.imdbID}
                        onClick={() => window.location.href = `/movie?imdbID=${top250series.imdbID}`}
                        style={{width:"auto", height:"auto"}}
                    />
                </div>
            </div>
        );
    });

    window.onload = load;
    
    return(
        <div className='p-5'>
            
            <Container>
                
                <Row className='p-2 my-2 rounded bg-light'>
                    <div onClick={() => window.location.href = `/top100movies`}>Popular Movies</div>
                    <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                {popular100carouselItemData}
                        </Carousel>
                    </div>
                </Row>

                <div>
                <Row className='p-2 my-2 rounded bg-light'>
                    <div onClick={() => window.location.href = `/top250movies`}>Top Movies</div>
                    <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                {top250carouselItemData}
                        </Carousel>
                    </div>
                </Row>
                </div>

                <div>
                <Row className='p-2 my-2 rounded bg-light'>
                    <div onClick={() => window.location.href = `/top100series`}>Popular Series</div>
                    <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                {popular100TVcarouselItemData}
                        </Carousel>
                    </div>
                </Row>
                </div>

                <div>
                <Row className='p-2 my-2 rounded bg-light'>
                    <div onClick={() => window.location.href = `/top250series`}>Top Series</div>
                    <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Carousel
                                show={4}
                                infiniteLoop={true}
                            >
                                {top250TVcarouselItemData}
                        </Carousel>
                    </div>
                </Row>
                </div>
                
            </Container>
            
        </div>
        
        
    )
}

export default Home;