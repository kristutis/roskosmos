import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> 
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/profile" exact component={Profile} />
          </Switch>
      </Router>       
    </div>
  );
}

export default App;
