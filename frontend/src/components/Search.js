import React, { useState } from 'react'
import { Button, CardImg } from 'react-bootstrap';

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


    const searchMovie = async event => 
    {
        event.preventDefault();
        document.querySelector('#movies').innerHTML = ''
        
        var obj = {Title:imdbID};
        var js = JSON.stringify(obj);
        
        try
        {
            const response = await fetch(buildPath('api/search'),
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
    <><div className='primaryBackground' id="cardUIDiv">
          <br />
          <input type="text" id="searchText" className='form-control-lg' placeholder="Movie To Search For"
              ref={(c) => search = c} /><br />
          <Button type="button" id="searchCardButton" className="buttons"
              onClick={searchMovie}> Search Media</Button><br />

          <div className='container'>
              <div id="movies" className="row">
                  {movies.map(
                      (movie) => <>

                          <div className='col p-2 ms-md-auto' style={{ alignContent: "center", justifyContent: "center", maxWidth: "11rem" }}>
                              <div className='card bg-dark border-0'>
                                  <CardImg
                                      className={`row_poster ${"row_posterLarge"}`}
                                      src={movie.poster}
                                      alt={movie.title}
                                      key={movie.imdbID}
                                      onClick={() => window.location.href = `/movie?imdbID=${movie.imdbID}`}
                                      style={{ width: "auto", height: "auto" }} />
                                  <h3 className='d-flex p-2'>{movie.title}</h3>
                              </div>
                          </div>
                      </>
                  )}
              </div>
          </div>
      </div>
      </>
  )
}
