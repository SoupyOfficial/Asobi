import React from 'react'
import NavBar from '../components/NavBar'
import { Row } from 'react-bootstrap'
import Carousel from '../components/Carousel';
import { useState } from 'react';
import { CardImg } from 'react-bootstrap';

export default function Profile() {

  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  const userId = ud.id;    
  var firstName = ud.firstName;
  //console.log(ud)

  

  
  const [watchlist, setWatchlist] = useState([]);
  
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

  const load = async event => {
    var obj = {ID:userId};
    var js = JSON.stringify(obj);
    
    try
  {
      const response = await fetch(buildPath('api/loadprofile'),
      {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
      var txt = await response.text();
      var res = JSON.parse(txt);
      if(res.watchList != null) {
      setWatchlist(res.watchList);
      }
      
  }
  catch(e)
  {
      console.log(e.toString());
  }
  }
  window.onload = load; 
  
  const watchlistcarouselItemData = watchlist.map((watchlist) => {
    return (
        <div key={watchlist.ID} className='col p-2 ms-md-auto' style={{alignContent:"center", justifyContent:"center", maxWidth:"11rem", minWidth:"11rem"}}>                                
            <div className='card bg-dark border-0'>
                <CardImg
                    className={`row_poster ${"row_posterLarge"}`}
                    src={watchlist.Poster}
                    alt={watchlist.Title}
                    key={watchlist.ID}
                    onClick={() => window.location.href = `/movie?imdbID=${watchlist.ID}`}
                    style={{ height:"255px", width:"170px", objectFit:"cover", borderRadius:"25px"}}
                    />
            </div>
        </div>
    );
});

  return (
    <>
    <NavBar/>
      <div className="primaryBackground">

        <div className="container-fluid d-flex align-items-center justify-content-center">
          <div className="picture-container">
            <div className="picture">
              <img src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png" className="picture-src" id="picturePreview" title=""></img>
            </div>
          </div>
        </div>

        <div className="header pb-6 pt-4 pt-lg-4 d-flex align-items-center">
        <span className="mask bg-gradient-default opacity-8"></span>
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="row justify-content-center">
              <div className="col-lg-100 col-md-20">
                <h1 className="display-2 text-white">Hello, {firstName}</h1>
                <a href="/settings" className="btn btn-info">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row gutters-sm">
                  <Row className='my-1 rounded bg-dark'>
                      <div onClick={() => window.location.href = `/watchlist`}><h2>Watchlist</h2></div>
                      <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
                          <Carousel
                                  show={5}
                                  infiniteLoop={true}
                              >
                                  {watchlist != null ? watchlistcarouselItemData : "Add somethin to you watchlist!"}
                          </Carousel>
                      </div>
                  </Row>
        </div>

      </div>
    </>
  )
}
