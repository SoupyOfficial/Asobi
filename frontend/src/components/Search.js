import React, { useState } from 'react'

export default function Search() {
    

    var search = '';

    const [searchResults,setResults] = useState('');
    const [movies, setMovies] = useState([]);

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

    const searchMovie = async event => 
    {
        event.preventDefault();
        document.querySelector('#movies').innerHTML = ''
        
        var obj = {Title:search.value};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(buildPath('api/search'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            
            var txt = await response.text();
            var res = JSON.parse(txt);
            var _results = res.results;
            console.log(_results)
            //_results.map((movie) => {document.querySelector('.movies').innerHTML += `<a href="/movie?imdbID=${movie.imdbID}">${movie.title}</a>` + "<br/>"})
            setResults(`${_results.length} results found`);
            setMovies(_results)
            
        }
        catch(e)
        {
            console.log(e.toString());
            setResults(e.toString());
        }
    };

  return (
    <div className='primaryBackground' id="cardUIDiv" >
            <br />
            <input type="text" id="searchText" placeholder="Movie To Search For" 
                ref={(c) => search = c} />
            <button type="button" id="searchCardButton" class="buttons" 
                onClick={searchMovie}> Search Media</button><br />
                {/*<div className='movies' style={{ height:'auto'}}></div><br /><br />*/}
                <div className='container'>
                    <div id="movies" className="row">
                        {movies.map(
                        (movie) =>                        
                            <>
                            
                            <div className='col p-2 ms-md-4' style={{maxWidth:"12rem"}}>
                                <h3 id='cardTitle' className='d-flex p-2'>{movie.title}</h3>
                                <img
                                    className={`row_poster ${"row_posterLarge"}`}
                                    src={movie.poster}
                                    alt={movie.title}
                                    key={movie.imdbID}
                                    onClick={() => window.location.href = `/movie?imdbID=${movie.imdbID}`}
                                    style={{width:"auto", height:"auto"}}
                                />
                            </div>
                            </>                        
                        )}
                    </div>
                </div>
            </div>
  )
}
