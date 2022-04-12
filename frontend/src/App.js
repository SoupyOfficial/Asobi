import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MoviePage from './pages/MoviePage';
import ProfilePage from './pages/ProfilePage';
import CardPage from './pages/CardPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CarouselPage from './pages/CarouselPage';
import SettingsPage from './pages/SettingsPage';
import Top100MoviesPage from './pages/Top100MoviesPage';
import Top100SeriesPage from './pages/Top100SeriesPage';
import Top250SeriesPage from './pages/Top250SeriesPage';
import Top250MoviesPage from './pages/Top250MoviesPage';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/cards" exact>
          <CardPage/>
        </Route>
        <Route path="/login" exact>
          <LoginPage/>
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage/>
        </Route>
        <Route path="/home" exact>
          <HomePage/>
        </Route>
        <Route path="/movie">
          <MoviePage/>
        </Route>
        <Route path="/search" exact>
          <SearchPage/>
        </Route>
        <Route path="/carousel" exact>
          <CarouselPage/>
        </Route>
        <Route path="/settings" exact>
          <SettingsPage/>
        </Route>
        <Route path="/top100movies" exact>
          <Top100MoviesPage/>
        </Route>
        <Route path="/top100series" exact>
          <Top100SeriesPage/>
        </Route>
        <Route path="/top250movies" exact>
          <Top250MoviesPage/>
        </Route>
        <Route path="/top250series" exact>
          <Top250SeriesPage/>
        </Route>
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
