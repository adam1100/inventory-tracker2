import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components

import Homepage from './HomePage';
import UserDashboard from './UserDashboard';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route exact path='/dashboard' component={UserDashboard} />
    </div>
    </Router>);
  }
}
export default App;
