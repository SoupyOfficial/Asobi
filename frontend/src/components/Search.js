import React, { useState } from 'react'
import { CardImg } from 'react-bootstrap';

export default function Search() {

    //Number of Search Results
    //const [searchResults,setResults] = useState('');
    const [movies, setMovies] = useState([]);
    var search = new URLSearchParams(window.location.search);
    const imdbID = search.get('search-key');

    console.log(imdbID);

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

    let bp = require('./Path.js'); 
    

    const searchMovie = async event => 
    {
        event.preventDefault();
        document.querySelector('#movies').innerHTML = null

        var obj = {Title:imdbID};
        var js = JSON.stringify(obj);
        
        try
        {
            //console.log(search.value)

            document.querySelector('#movies').innerHTML = ''
            const response = await fetch(bp.buildPath('api/search'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
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
    window.onload = searchMovie;

  return (
    <div className='primaryBackground' id="cardUIDiv">
            <br />

            <h1 className='resultsText'>{'Showing results for \'' + imdbID + '\'.'}</h1>

            {/* <Button type="button" id="searchCardButton" class="buttons" 
                onClick={searchMovie}> Search Media</Button> */}<br />
                <div className='container py-4'>
                    <div id="movies" className="row">
                        {movies.slice(0,35).map(
                            (movie) =>    
                                    <div key={movie.imdbID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                                        <div id='movie' className='card bg-dark border-0'>
                                            <CardImg
                                                className={`row_poster ${"row_posterLarge"}`}
                                                src={movie.poster}
                                                alt={movie.title}
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
