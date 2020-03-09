import React, { Component } from 'react';
import { Textfield } from 'react-mdl';
import { Button } from 'semantic-ui-react'

class InventorySearch extends Component {
  render(){
  return (
    <div className="wrap">

    <Textfield 
        onSubmit={this.handleSubmit}
        onChange={() => {}}
        label="Search..."
        style={{width: '200px'}}
        
    />
    <Button type="submit">Search</Button>

    </div>

  );
}
}
export default InventorySearch;
