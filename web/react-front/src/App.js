import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Treneriai from './pages/Treneriai';
import SalesRezervacija from './pages/SalesRezervacija';
import Treneris from './pages/Treneris';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> 
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/profile" exact component={Profile} />
            <Route path="/treneriai" exact component={Treneriai} />
            <Route path="/treneriai/treneris" exact component={Treneris} />
            <Route path="/sales-rezervacija" exact component={SalesRezervacija} />            
          </Switch>
      </Router>       
    </div>
  );
}

export default App;
