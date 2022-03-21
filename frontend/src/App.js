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

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/cards" exact>
          <CardPage/>
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
        <Route path="/movie" exact>
          <MoviePage/>
        </Route>
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;