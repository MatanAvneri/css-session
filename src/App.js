import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Position from './Position'
import Specificity from './Specificity';
import Display from './Display';

import Sidebar from './Sidebar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Sidebar />

          <div className='content'>
            <Route exact path="/" component={Home} />
            <Route path="/position" component={Position} />
            <Route path="/specificity" component={Specificity} />
            <Route path="/display" component={Display} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
