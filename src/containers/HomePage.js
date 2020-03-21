import React, { Component } from 'react';

import InventorySearch from '../components/InventorySearch/InventorySearch';
import UserHandler from '../components/UserHandler/UserHandler';
import InventoryTable from '../components/UserInventory/InventoryTable';

import classes from '../style.css'

class Homepage extends Component {
  render(){
    return (
      <div>
        <h1 className="heading-primary">Inventory Share</h1>
        <InventorySearch /> 
        <hr/>
        <UserHandler />
        <InventoryTable />
      </div>
    );
  }
}
export default Homepage;
