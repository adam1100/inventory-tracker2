import React, { Component } from 'react';
import { Textfield } from 'react-mdl';

class InventorySearch extends Component {
  render(){
  return (
    <div className="wrap">

    <Textfield
        onChange={() => {}}
        label="Search..."
        style={{width: '200px'}}
    />

    </div>

  );
}
}
export default InventorySearch;
