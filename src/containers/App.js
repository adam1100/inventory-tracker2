import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components

import Homepage from './HomePage';
// import LoginPage from './components/pages/loginPage';
// import RegisterPage from './components/pages/registerPage';
// import InventorySearch from './components/pages/inventorySearch';
// import UserPage from './components/pages/userPage';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Homepage} />
      {/* <Route exact path='/loginPage' component={LoginPage} />
      <Route exact path='/registerPage' component={RegisterPage} />
      <Route exact path='/inventorySearch'component={InventorySearch} />
      <Route exact path='/userPage'component={UserPage} /> */}
    </div>
    </Router>
  );
}
}
export default App;
