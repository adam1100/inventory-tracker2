import React, { Component } from 'react';

import InventorySearch from '../components/InventorySearch/InventorySearch';
import UserHandler from '../components/UserHandler/UserHandler';


class Homepage extends Component {
  state = {
    userSearch: false,
    searchInput: "",
    searchResult: undefined,
    selectedTableData: {id: ""},
    inventoryDb: [
      {id: "myinventory",
       description: "things i own",
       user: "casualuser123"},
      {id: "tcdscss",
       description: "equipment for trinity staff and alumni",
       user: "scss-cathal"},
      {id: "photography-gear",
       description: "photography equipment",
       user: "dupa"}
    ],
    inventoryTableDb: [
      {id: "myinventory",
       contents: [
         {id: 1,
          description: "maths book" },
         {id: 2,
          description: "screwdriver" },
         {id: 3,
          description: "chair" },
         {id: 4,
          description: "table" }
       ]},
      {id: "tcdscss",
       contents: [
         {id: 1,
          description: "robot kit" },
         {id: 2,
          description: "mouse" },
         {id: 3,
          description: "laptop" },
         {id: 4,
          description: "phone" }
       ]},
      {id: "photography-gear",
       contents: [
         {id: 1,
          description: "canon" },
         {id: 2,
          description: "50mm lens" },
         {id: 3,
          description: "tripod" },
         {id: 4,
          description: "flash" }
       ]}
    ]
  };

  searchButtonHandler = () => {
    const searchTerm = this.state.searchInput;
    const searchResult = this.state.inventoryDb.filter(inv => inv.id.includes(searchTerm) || 
                                                              inv.description.includes(searchTerm) || 
                                                              inv.user.includes(searchTerm));
    this.setState({userSearch: true, searchResult: searchResult});
  }

  searchInputChangeHandler = event => {
    this.setState({searchInput: event.target.value})
  }

  clickInventoryHandler = inventoryId => {
    let tableData = {id: ""};
    // dont show any table

    if(inventoryId != this.state.selectedTableData.id)
      tableData = this.state.inventoryTableDb.find(inv => inv.id == inventoryId)

    this.setState({selectedTableData: tableData});
  }

  render(){
    return (
      <div>
        <h1 className="heading-primary"
          onClick={() => this.setState({userSearch: false})}
        >Inventory Share</h1>
        <div className="inner">
          <InventorySearch 
          clicked = { this.searchButtonHandler }
          inputChange = { this.searchInputChangeHandler }
          searchResult = { this.state.searchResult }
          showResult = { this.state.userSearch }
          clickedInventory = { this.clickInventoryHandler }
          tableData = { this.state.selectedTableData }/> 
          {/* <hr/>
          <UserHandler /> */}
        </div>
      </div>
    );
  }
}
export default Homepage;
