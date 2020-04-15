import React, { Component } from 'react';
import UserMenu from '../components/UserMenu/UserMenu';
import RecentUpdates from '../components/UserMenu/RecentUpdates';
import InventoryTable from '../components/UserInventory/InventoryTable';

import { AuthUserContext, withAuthorisation } from '../components/Session';


var newId = 1;

class UserDashboard extends Component {

    state = {
        user: "dupa",
        invSelected: "",
        newItemID:"",
        newItemDesc:"",
        newRow: {row_id: "new_row_id",
                 column_entries: {},
                 inventory_reference: "this_inventory_id",
                 queue: [],
                 requester: "",
                 state: "available"
        },
        userInventories: [
            {id: "1",
             inventory_name: "dupa-cameras",
             inventory_owner: "users/GpP0qBiwCwUqxwpZ5DXnK5f8n542",
             fields:["description", "location", "quantity"],
             rows: ["w7Rkzrnh4a4couXz58LT", "fGAKX0u6wmoMNv0X8q5a"],
                updates: [
                    {
                    type: 'request',
                    inventory: 'photography-gear',
                    itemid: '3',
                    itemDescription: 'tripod',
                    requestedBy: 'kuznecoe@tcd.ie'
                    },
                    {
                    type: 'request',
                    inventory: 'photography-gear',
                    itemid: '2',
                    itemDescription: '50mm lens',
                    requestedBy: 'kuznecoe@tcd.ie'
                    },
                    {
                    type: 'loan',
                    inventory: 'photography-gear',
                    itemid: '1',
                    itemDescription: 'canon',
                    requestedBy: 'kuznecoe@tcd.ie'
                    }]
            }
        ],
        row: [
          {row_id: "w7Rkzrnh4a4couXz58LT",
           column_entries: {description: "nikon",
                            location: "atrium safe"},
           inventory_reference: "dupa-cameras",
           queue: ["abc@tcd.ie"],
           requester: "kuznecoe@tcd.ie",
           state: "onLoan"
          },
          {row_id: "fGAKX0u6wmoMNv0X8q5a",
           column_entries: {description: "canon 50",
                            location: "atrium safe"},
           inventory_reference: "dupa-cameras",
           queue: [],
           requester: "",
           state: "requested"
          }
        ],
        recentUpdates: [
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '3',
                itemDescription: 'tripod',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '2',
                itemDescription: '50mm lens',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                    type: 'loan',
                    inventory: 'photography-gear',
                    itemid: '1',
                    itemDescription: 'canon',
                    requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '3',
                itemDescription: 'tripod',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '2',
                itemDescription: '50mm lens',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                    type: 'loan',
                    inventory: 'photography-gear',
                    itemid: '1',
                    itemDescription: 'canon',
                    requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '3',
                itemDescription: 'tripod',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '2',
                itemDescription: '50mm lens',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                    type: 'loan',
                    inventory: 'photography-gear',
                    itemid: '1',
                    itemDescription: 'canon',
                    requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '3',
                itemDescription: 'tripod',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '2',
                itemDescription: '50mm lens',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                    type: 'loan',
                    inventory: 'photography-gear',
                    itemid: '1',
                    itemDescription: 'canon',
                    requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '3',
                itemDescription: 'tripod',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                type: 'request',
                inventory: 'photography-gear',
                itemid: '2',
                itemDescription: '50mm lens',
                requestedBy: 'kuznecoe@tcd.ie'
            },
            {
                    type: 'loan',
                    inventory: 'photography-gear',
                    itemid: '1',
                    itemDescription: 'canon',
                    requestedBy: 'kuznecoe@tcd.ie'
            }
        ]
    }

    clickedMenuButton(inventory) {
        this.setState({invSelected: inventory});
    }
    
    clickedAddHandler(){
        let clone = [...this.state.userInventories]
        let inventory = clone.find( inventory => inventory.id === this.state.invSelected);
        let rowClone = JSON.parse(JSON.stringify(this.state.row));
        let newRowClone = JSON.parse(JSON.stringify(this.state.newRow));
        newRowClone.row_id = newId++;
        
        inventory.rows.push(newRowClone.row_id);
        rowClone.push(newRowClone);
        this.setState({row: rowClone});
        this.setState({userInventories: clone});
    }

    onChangeInput(event){
      const field = event.target.name;
      const input = event.target.value;
      let newRowClone = JSON.parse(JSON.stringify(this.state.newRow));
      newRowClone.column_entries[field] = input
      this.setState({newRow: newRowClone});
    }

    getUpdates(inventoryObject){
        const currentUpdates = <RecentUpdates updates = {inventoryObject.updates} 
        cl = {(inv, itemid, status) => this.clickedCardHandler(inv, itemid, status)}/>
        return currentUpdates;
    }

    getTable(inventoryObject){
        let row_ids = inventoryObject.rows;
        let tableRows = this.state.row.filter( row => row_ids.includes(row.row_id) )
        const table = <InventoryTable tableFields = {inventoryObject.fields}
                                      tableRows = {tableRows}
                                      changeInput = {(event) => this.onChangeInput(event)}
                                      add = {() => this.clickedAddHandler()}/>
        return table;
    }

    clickedCardHandler(inv, itemid, status){
        let clone = [...this.state.userInventories];
        let inventory = clone.find( inventory => inventory.id === inv);
        let update = inventory.updates.find( update => update.itemid === itemid);
        let oldIndex = inventory.updates.findIndex( update => update.itemid === itemid);
        inventory.updates.splice(oldIndex, 1);

        let newUpdate;

        let item = inventory.contents.find(item => item.id === parseInt(itemid));

        if(status == "request"){
            newUpdate = {
                type: 'loan',
                inventory: update.inventory,
                itemid: update.itemid,
                itemDescription: update.itemDescription,
                requestedBy: update.requestedBy
            };
            inventory.updates.unshift(newUpdate);
            console.log(inventory.contents)
            console.log(item);
            item.status = "on loan";
        }else{
            item.status = "available"
        }

        console.log(clone)
        console.log(this.state.userInventories)
        this.setState({userInventories: clone})
    }
    
    render(){ 
        let updates = [];
        let table = [];
        if (this.state.invSelected === "")
            updates = <RecentUpdates updates = {this.state.recentUpdates} 
            cl = {(inv, itemid, status) => this.clickedCardHandler(inv, itemid, status)}/>
        else{
            const inventoryToShow = this.state.userInventories.find( inventory => inventory.id === this.state.invSelected);
            updates = this.getUpdates(inventoryToShow);
            table = this.getTable(inventoryToShow);
        }

        return(
           
            <div>
                <div className="dashboard-top">
                    <UserMenu 
                    inventories={this.state.userInventories}
                    clicked={(inventory) => this.clickedMenuButton(inventory)}
                    selected = {this.state.invSelected}/>
            
                    <div className = "updates">
                      <p className="menu-heading">Recent Updates</p>
                        <div className="update-list">
                          {updates}
                        </div>
                    </div>
                </div>

                <div>
                    {table}
                </div>
            </div>
      
       ) 

    }
     
}

const condition = authUser => !!authUser;
export default withAuthorisation(condition)(UserDashboard);
