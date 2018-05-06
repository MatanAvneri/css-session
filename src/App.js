import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Locations from './Locations'

import Sidebar from './Sidebar'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='app'>
          <Sidebar />

          <div className='content'>
            {
              Locations.map((loc) => {
                return (
                  <Route key={loc.path} exact path={loc.path} component={loc.component} />
                )
              })
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
