import React from 'react'
import MovieUI from '../components/MovieUI'
import MovieUI2 from '../components/MovieUI2';
import NavBar from '../components/NavBar'

function MoviePage() {
  return (
    <>
        <div><NavBar/></div>
        <div>
          <MovieUI/>
        </div>
    </>
  )
}

export default  MoviePage;