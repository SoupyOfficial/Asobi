import React from 'react'
import NavBar from '../components/NavBar'

export default function Profile() {

  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  var userId = ud.id;    
  var firstName = ud.firstName;
  console.log(ud)

  var obj = {ID:userId};
  var js = JSON.stringify(obj);
  
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

  try
  {
      const response = fetch(buildPath('api/loadprofile'),
      {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
      
      var txt = response.text();
      var res = JSON.parse(txt);
      console.log(res)
      
  }
  catch(e)
  {
      console.log(e.toString());
  }

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
                <p className="text-white mt-0 mb-5">Welcome to Your Profile</p>
                <a href="/settings" className="btn btn-info">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row gutters-sm">
          <div className="col-sm-6 mb-3">
            <div className="card h-100 border-0 bg-transparent">
              <div className="card-body" id="card1">
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Watchlist</i></h6>
                <div className="p-4">
                  <a href="#" className="text-underline-hover">Add</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="card h-100 border-0 bg-transparent">
              <div className="card-body" id="card2">
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">My Top Rated</i></h6>      
                <div className="p-4">
                  <a href="#" className="text-underline-hover">Add</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
