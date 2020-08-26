import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './Country'
import './App.css';
import Show from './Show'
import Topten from './Topten'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
      <Route exact  path="/" component={Show}/>
      <Route path="/Country" component={Country}/> 
      <Route path="/Topten" component={Topten}/>
          </Switch>
      </Router>
  );
}

export default App;