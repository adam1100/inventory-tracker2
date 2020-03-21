import React, {Component} from "react";
import InventoryTable from "../UserInventory/InventoryTable";


class InventoryItem extends Component {
    constructor(){
      super()
      this.state = {
        name: "",
        description: ""
      }
    }
    
    render(){
        
        const name = "iPad", description = "2018 64gb"
        

        return ({name, description});
    }

}
export default InventoryItem;