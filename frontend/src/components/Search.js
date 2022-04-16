import React, { useState } from 'react'
import { Button, CardImg } from 'react-bootstrap';

export default function Search() {
    

    var search = '';

    //Number of Search Results
    //const [searchResults,setResults] = useState('');
    const [movies, setMovies] = useState([]);

    let bp = require('./Path.js'); 
    

    const searchMovie = async event => 
    {
        event.preventDefault();
        document.querySelector('#movies').innerHTML = ''

        var obj = {Title:search.value};
        var js = JSON.stringify(obj);
        if(search.value === "") {
            return;
        }
        
        try
        {
            //console.log(search.value)

            document.querySelector('#movies').innerHTML = ''
            const response = await fetch(bp.buildPath('api/searchmovie'),
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

  return (
    <div className='primaryBackground' id="cardUIDiv">
            <br />
            <input autoComplete='false' onChange={searchMovie} type="text" id="searchText" className='form-control-lg' placeholder="Movie To Search For" 
                ref={(c) => search = c} /><br/>
            {/* <Button type="button" id="searchCardButton" class="buttons" 
                onClick={searchMovie}> Search Media</Button> */}<br />
                <div className='container py-4'>
                    <div id="movies" className="row">
                        {movies.map(
                            (movie) =>    
                                    <div className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                                        <div id='movie' className='card bg-dark border-0'>
                                            <CardImg
                                                className={`row_poster ${"row_posterLarge"}`}
                                                src={movie.poster}
                                                alt={movie.title}
                                                key={movie.imdbID}
                                                onClick={() => window.location.href = `/movie?imdbID=${movie.imdbID}`}
                                                style={{width:"auto", height:"auto"}}
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
