import React, { useState } from 'react'
import { CardImg } from 'react-bootstrap';

export default function Search() {

    //Number of Search Results
    //const [searchResults,setResults] = useState('');
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);
    
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    const userId = ud.id;   
    const firstName = ud.firstName;

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
    
    const load = async event => {
        var obj = {ID:userId};
        var js = JSON.stringify(obj);
        try
      {
          const response = await fetch(buildPath('api/loadprofile'),
          {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
          var txt = await response.text();
          var res = JSON.parse(txt);
          console.log(res.watchList)
          setWatchlist(res.watchList);
          setLoading(false);
          
      }
      catch(e)
      {
          console.log(e.toString());
      }
      }
      window.onload = load;

  return (
    <div className='primaryBackground' id="cardUIDiv">
            <br />

            <h1 className='resultsText'>{`${firstName}'s Watchlist`}</h1>

            {/* <Button type="button" id="searchCardButton" class="buttons" 
                onClick={searchMovie}> Search Media</Button> */}<br />
                <div className='container py-4'>
                    <div id="movies" className="row">
                        {watchlist.map(
                            (movie) =>    
                                    <div key={movie.ID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
                                        <div id='movie' className='card bg-dark border-0'>
                                            <CardImg
                                                className={`row_poster ${"row_posterLarge"}`}
                                                src={movie.Poster}
                                                alt={movie.Title}
                                                onClick={() => window.location.href = `/movie?imdbID=${movie.ID}`}
                                                style={{ height:"255px", width:"170px", objectFit:"cover"}}
                                                />
                                            <h3 className='d-flex my-2 p-2'>{movie.Title}</h3>
                                        </div>
                                    </div>                    
                        )}
                    </div>
                </div>
            </div>
  )
}
