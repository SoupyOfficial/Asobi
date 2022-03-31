import React from 'react'
import NavBar from '../components/NavBar'

export default function Profile() {
  return (
    <>
    <NavBar/>
      <div className="primaryBackground">

        <div class="container">
          <div class="main-body">
              <div class="card">
                  <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                          //image here
                          <div class="mt-3">
                              //name here
                              //information here
                              <button class="btn btn-primary">Edit</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-8">
                  <div class="card mb-3">
                      <div class="card-body">
                          <div class="row">
                              <div class="col-sm-3">
                                  <h6 class="mb-0">Top Films</h6>
                              </div>
                          </div>
                          <button class="btn btn-primary">Edit</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="container mt-3">
        <div class="mt-4 p-5 bg-primary text-white rounded">
          <h1>My Movie List</h1>
        </div>
      </div>
      
      </div>
    </>
  )
}
