import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Annotation from './Component/Annotation/Annotation';
import Testing from './Component/Testing/Testing';
import 'bootstrap'
export class App extends Component {

  
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Annotation} />
          <Route path="/testing" exact component={Testing} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    );
  }
}

export default App;
