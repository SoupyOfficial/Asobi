import React from 'react'
import { useState } from 'react';
import { CardImg } from 'react-bootstrap';

export default function Top250MoviesUI() {
    const [movies, setMovies] = useState([]);

    let bp = require('./Path.js'); 

    const load = async event => 
    {
        event.preventDefault();
        
        try
        {
            const response = await fetch(bp.buildPath('api/loadtop250'),
            {method:'POST',headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            var _results = res.results;
            //Number of Search Results
            //setResults(`${_results.length} results found`);
            setMovies(_results)
            
        }
        catch(e)
        {
            console.log(e.toString());
            //setResults(e.toString());
        }
    };
    window.onload = load;
  return (
    <div className='primaryBackground'>
        <div className='container py-4'>
            <div id="movies" className="row">
                {movies.map(
                    (movie, index) =>     
                             <div key={movie.imdbID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                                <div className='card bg-dark border-0'>
                                    <h4 className='d-flex my-2 p-2 justify-content-center'>#{index+1}</h4>
                                    <CardImg
                                        className={`row_poster ${"row_posterLarge"}`}
                                        src={movie.poster}
                                        alt={movie.title}
                                        key={movie.imdbID}
                                        onClick={() => window.location.href = `/movie?imdbID=${movie.imdbID}`}
                                        style={{ height:"255px", width:"170px", objectFit:"cover"}}
                                    />
                                    <h3 className='d-flex my-2 p-2'>{movie.title}</h3>
                                </div>
                            </div>                 
                )}
            </div>
        </div>
    </div>
  )
}
