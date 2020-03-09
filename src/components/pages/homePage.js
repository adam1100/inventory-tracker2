import React, { Component } from 'react';
import { Button } from 'react-mdl';
import {
    Link
  } from 'react-router-dom';
import { Form } from 'semantic-ui-react'
import LoginPage from './loginPage';
import InventorySearch from './inventorySearch';

class Homepage extends Component {
  render(){
  return (
    <div className="wrap">
        <Link to="/loginPage">
            <Button raised>Login</Button>
        </Link>

        <Link to="/">
            <Button raised>Home</Button>
        </Link>
        
        <Link to="/registerPage">
            <Button raised>Register</Button>
        </Link>

        <Link to="/inventorySearch">
            <Button raised>Inventory Search</Button>
        </Link>
      <LoginPage />
      <InventorySearch />

        
    </div>

  );
}
}
export default Homepage;
