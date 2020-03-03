import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import InventorySearch from './components/pages/inventorySearch';
import UserPage from './components/pages/userPage';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      
      <Header />

      <Route exact path='/' component={Homepage} />
      <Route exact path='/loginPage' component={LoginPage} />
      <Route exact path='/registerPage' component={RegisterPage} />
      <Route exact path='/inventorySearch'component={InventorySearch} />
      <Route exact path='/userPage'component={UserPage} />
      <Footer />

    </div>
    </Router>
  );
}
}
export default App;
