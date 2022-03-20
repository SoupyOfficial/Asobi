import React from 'react'
import MovieUI from '../components/MovieUI'
import NavBar from '../components/NavBar'

function MoviePage() {
  return (
    <>
        <div><NavBar/></div>
        <div className="text-center" style={{ backgroundColor: "#212121", color: "white", height: '100vh'}}><MovieUI/></div>
    </>
  )
}

export default  MoviePage;