import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, {PropTpes} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import TrainerProfile from './pages/Trainer-Profile';
import Home from './pages/Home';
import Programos from './pages/Programos';
import Treneriai from './pages/Treneriai';
import AddProgram from './pages/AddProgram';
import Klientai from './pages/Klientai';
import Mail from './pages/Mail';
import SalesRezervacija from './pages/SalesRezervacija';
import Treneris from './pages/Treneris';

function App() {
  window.backend="http://localhost:8000/api"
  // window.backend="http://78.60.101.121:8000/api"

  return (    
    <div className="App">              
        <Router>        
          <NavBar />           
            <Switch>
              <Route path="/ui/login" exact component={Home}/>
              <Route path="/" exact component={Home}/>
              <Route path="/profile" exact component={Profile} />
              <Route path="/trainer-profile" exact component={TrainerProfile} />
              <Route path="/programos" exact component={Programos} />
              <Route path="/treneriai" exact component={Treneriai} />
              <Route path="/addprogram" exact component={AddProgram} />
              <Route path="/klientai" exact component={Klientai} />
              <Route path="/mail" strict exact component={Mail} />
              <Route path="/treneriai/:id" exact component={Treneris} />
              <Route path="/sales-rezervacija" exact component={SalesRezervacija} />            
            </Switch>            
        </Router>               
      </div>
  );
}

export default App;
