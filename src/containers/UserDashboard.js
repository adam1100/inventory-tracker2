import React, { Component } from 'react';
import UserMenu from '../components/UserMenu/UserMenu';
import RecentUpdates from '../components/UserMenu/RecentUpdates';
import InventoryTable from '../components/UserInventory/InventoryTable';

class UserDashboard extends Component {
    state = {
        user: "dupa",
        invSelected: "",
        newItemID:"",
        newItemDesc:"",
        userInventories: [
            {id: "photography-gear",
                contents: [
                    {id: 1,
                    description: "canon",
                    status: "on loan" },
                    {id: 2,
                    description: "50mm lens",
                    status: "requested" },
                    {id: 3,
                    description: "tripod" ,
                    status: "requested"},
                    {id: 4,
                    description: "flash",
                    status: "available" }],
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
                    }
        ]
    }

    clickedMenuButton(inventory) {
        this.setState({invSelected: inventory});
    }

    clickedAddHandler(){
        

        let clone = [...this.state.userInventories]
        let inventory = clone.find( inventory => inventory.id === this.state.invSelected);
        inventory.contents.push({id: this.state.newItemID, description: this.state.newItemDesc, status: "available"});
        this.setState({userInventories: clone});
    }

    onChangeID(event){
        const input = event.target.value;
        console.log(input)
        this.setState({newItemID: input});
    }

    onChangeDesc(event){
        this.setState({newItemDesc: event.target.value});
    }
    
    getUpdates(inventoryObject){
        const currentUpdates = <RecentUpdates updates = {inventoryObject.updates} 
        cl = {(inv, itemid, status) => this.clickedCardHandler(inv, itemid, status)}/>
        return currentUpdates;
    }

    getTable(inventoryObject){
        const table = <InventoryTable tableData = {inventoryObject}
                                        changeID = {(event) => this.onChangeID(event)}
                                        changeDesc = {(event) => this.onChangeDesc(event)}
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
                        {updates}
                    </div>
                </div>

                <div>
                    {table}
                </div>
            </div>
        );
    }
}

export default UserDashboard;