import React from 'react'
import NavBar from '../components/NavBar'

export default function Profile() {
  return (
    <>
    <NavBar/>
      <div className="primaryBackground">

        <div class="container-fluid d-flex align-items-center justify-content-center">
          <div class="picture-container">
            <div class="picture">
              <img src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png" class="picture-src" id="picturePreview" title=""></img>
            </div>
          </div>
        </div>

        <div class="header pb-6 pt-4 pt-lg-4 d-flex align-items-center">
        <span class="mask bg-gradient-default opacity-8"></span>
          <div class="container-fluid d-flex align-items-center justify-content-center">
            <div class="row justify-content-center">
              <div class="col-lg-100 col-md-20">
                <h1 class="display-2 text-white">Hello, User</h1>
                <p class="text-white mt-0 mb-5">Welcome to Your Profile</p>
                <a href="#!" class="btn btn-info">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="row gutters-sm">
          <div class="col-sm-6 mb-3">
            <div class="card h-100 border-0 bg-transparent">
              <div class="card-body" id="card1">
                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Friends/Favorites/Watchlist</i></h6>
                <div class="p-4">
                  <a href="#" class="text-underline-hover">Add</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3">
            <div class="card h-100 border-0 bg-transparent">
              <div class="card-body" id="card2">
                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Friends/Favorites/Watchlist</i></h6>      
                <div class="p-4">
                  <a href="#" class="text-underline-hover">Add</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#!" class="btn btn-info">Log Out</a>

      </div>
    </>
  )
}
