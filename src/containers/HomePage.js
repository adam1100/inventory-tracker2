import React, { Component } from 'react';

import InventorySearch from '../components/InventorySearch/InventorySearch';
import UserHandler from '../components/UserHandler/UserHandler';


class Homepage extends Component {
  state = {
    userSearch: false,
    searchInput: "",
    searchResult: undefined,
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
       items: [{
         
       }]

      }
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
          showResult = { this.state.userSearch }/> 
          {/* <hr/>
          <UserHandler /> */}
        </div>
      </div>
    );
  }
}
export default Homepage;
