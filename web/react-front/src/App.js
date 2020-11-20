import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, {PropTpes} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Treneriai from './pages/Treneriai';
import SalesRezervacija from './pages/SalesRezervacija';
import Treneris from './pages/Treneris';

function App() {
  // window.backend="http://localhost:8000/api"
  window.backend="http://78.60.101.121:8000/api"

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
