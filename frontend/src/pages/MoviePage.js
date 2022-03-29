import React from 'react'
import { Link } from 'react-router-dom';
import MovieUI from '../components/MovieUI'
import MovieUI2 from '../components/MovieUI2';
import NavBar from '../components/NavBar'

function MoviePage() {
  return (
    <>
      <NavBar/>
        <div className="primaryBackground">
          <MovieUI/>
        </div>
        
    </>
  )
}

export default  MoviePage;