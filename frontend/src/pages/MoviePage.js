import React from 'react'
import MovieUI from '../components/MovieUI'
import NavBar from '../components/NavBar'

function MoviePage() {
  return (
    <>
        <div><NavBar/></div>
        <div className="primaryBackground">
          <MovieUI/>
        </div>
    </>
  )
}

export default  MoviePage;