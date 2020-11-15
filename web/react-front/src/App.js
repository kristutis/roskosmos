// import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/> 
          <Switch>
            <Route path="/" exact />
            <Route path="/profile" exact component={Profile} />
          </Switch>
      </Router> 
      <h1>hi</h1>
    </div>
  );
}

export default App;
