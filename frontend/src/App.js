import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MoviePage from './pages/MoviePage';
import ProfilePage from './pages/ProfilePage';
import CardPage from './pages/CardPage';
import DiscoverPage from './pages/DiscoverPage';
import SearchPage from './pages/SearchPage';
import CarouselPage from './pages/CarouselPage';
import SettingsPage from './pages/SettingsPage';
<<<<<<< HEAD
import HomePage from './pages/HomePage';
=======
>>>>>>> 628959bd62da1269de2e85ccafe663ae3e3126ed

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage/>
        </Route>
        <Route path="/cards" exact>
          <CardPage/>
        </Route>
        <Route path="/home" exact>
          <HomePage/>
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage/>
        </Route>
        <Route path="/discover" exact>
          <DiscoverPage/>
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
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
