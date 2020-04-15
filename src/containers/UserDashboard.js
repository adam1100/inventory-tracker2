import React, { Component } from 'react';
import UserMenu from '../components/UserMenu/UserMenu';
import RecentUpdates from '../components/UserMenu/RecentUpdates';



import InventoryTable from '../components/UserInventory/InventoryTable';
//import inventory_add from  '../components';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { AuthUserContext, withAuthorisation } from '../components/Session';

var newId = 1;

class UserDashboard extends Component {
    
    state = {
        user: "",

        newItemID: "",
        newItemDesc: "",

        
        invSelected: "",

        updatesLoaded: "none",
        updateRefs: [],
        updates: [],

        userInventories: [],
        currentLoadedInventory: "",
        currentInventoryRows: [] ,
        currentInventoryFields: [],

        newRow: {row_id: "",
            column_entries: {},
            inventory_reference: "",
            queue: [],
            requester: "",
            state: "available"
    }
    }

    componentDidMount() {
        this.getUserDataAndUpdateRefs();
    }
    
    
    componentDidUpdate() {

        if(this.state.currentLoadedInventory !== this.state.invSelected && "" !== this.state.invSelected){
            this.loadCurrentInventory()
        }

        if(this.state.updatesLoaded === "none" && this.state.updateRefs.length > 0){
            this.loadUpdatesFromRefs()
        }
    }

    loadUpdatesFromRefs(){

        const db = firebase.firestore();
        const updatePromises = [];
        const updates = [];
        const updateRefs = this.state.updateRefs;
        updateRefs.forEach(ref => updatePromises.push(db.collection('row').doc(ref).get()));

        Promise.all(updatePromises)
                        .then((values) =>{
                            values.forEach(value => {
                                var seconds = value.data().changed.seconds;
                                var d = new Date(0);
                                d.setUTCSeconds(seconds);
                                updates.push({
                                    inventory: value.data().inventory_reference.id,
                                    changed: d,
                                    item: value.data().column_entries.description,
                                    requester: value.data().requester,
                                    state: value.data().state
                                }); 
                            });
                            this.setState({updates: updates, updatesLoaded: ""});
                        });
 
    }

    getUserDataAndUpdateRefs = () => {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });

        let userRef = db.collection('users').doc(firebase.auth().currentUser.uid);
        
        userRef.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    let inventoryNames = [];
                    let recentUpdates = [];
                    data.inventories.forEach(inventory => {
                        inventoryNames.push(inventory.id);
                    })
                    data.updates.forEach(update => {
                        recentUpdates.push(update.id);
                    })
                    this.setState({ updateRefs: recentUpdates, userInventories: inventoryNames  })
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });

    }
    

    // const promises = [usersPromise, posts]
    //     Promise.all(promises)
    //         .then((values) => {
    //             res.render('home', 
    //             {username: username, 
    //             posts: values[1].posts, 
    //             users: values[0], 
    //             group: values[1].group})
    //         });

    loadCurrentInventory = () => {
        const inventoryToLoad = this.state.invSelected;
        const db = firebase.firestore();
        db.collection('inventories').doc(inventoryToLoad).get()
            .then(doc => {
                 if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    let rowRefs = doc.data().rows;
                    const rowPromises = [];

                    let rowFields = doc.data().fields;
                    this.setState({currentInventoryFields: rowFields});
                   

                    rowRefs.forEach(row => {
                        rowPromises.push(db.collection('row').doc(row.id).get()) 
                    });

                    Promise.all(rowPromises)
                        .then((values) =>{
                            let rows = [];
                            values.forEach(value => {
                                if (!value.exits){
                                    console.log("doc doesnt exist")
                                }
                                let data = value.data()
                                rows.push({changed: data.changed,
                                column_entries: data.column_entries,
                                queue: data.queue,
                                requester: data.requester,
                                state: data.state})
                            });
                            
                            this.setState({currentLoadedInventory: inventoryToLoad, currentInventoryRows: rows});
                            console.log('current rows', this.state.currentInventoryRows);
                        });     
                }
            });
    }

    clickedMenuButton(inventory) {
        this.setState({ invSelected: inventory });
    }

    // clickedAddHandler() {


    //     let clone = [...this.state.userInventories]
    //     let inventory = clone.find(inventory => inventory.id === this.state.invSelected);
    //     inventory.contents.push({ id: this.state.newItemID, description: this.state.newItemDesc, status: "available" });
    //     this.setState({ userInventories: clone });
    // }

    onChangeID(event) {
        const input = event.target.value;
        console.log(input)
        this.setState({ newItemID: input });
    }

    onChangeDesc(event) {
        this.setState({ newItemDesc: event.target.value });
    }

    getUpdates(inventoryObject) {
        const currentUpdates = <RecentUpdates 
        updates={inventoryObject.updates}
            //cl={(inv, itemid, status) => this.clickedCardHandler(inv, itemid, status)} 
            />
        return currentUpdates;
    }
/*
    getTable() {
        console.log('current rows', this.state.currentInventoryRows);
        const table = <InventoryTable 
          //  tableData={this.state.currentInventoryRows}
            //changeID={(event) => this.onChangeID(event)}
            //changeDesc={(event) => this.onChangeDesc(event)}
            //add={() => this.clickedAddHandler()} 
            />

    }*/
 
    ///////////
/*
    clickedMenuButton(inventory) {
        this.setState({invSelected: inventory});        //use this func to add inventory to db/homepage
    }
*/
    clickedAddHandler(){
     //   let clone = [...this.state.userInventories]
     //   let inventory = clone.find( inventory => inventory === this.state.invSelected);
     //   this.setState({userInventories: clone});
        let rowClone = JSON.parse(JSON.stringify(this.state.currentInventoryRows));
        let newRowClone = JSON.parse(JSON.stringify(this.state.newRow));
        newRowClone.row_id = newId++;

        //inventory.rows.push(newRowClone.row_id);
        rowClone.push(newRowClone);
        const db = firebase.firestore();
        let addDoc = db.collection('row').add(
            newRowClone
          ).then(ref => {
            console.log('Added document with ID: ', ref.id);
          });


        this.setState({currentInventoryRows: rowClone});
    }

    onChangeInput(event){
        const field = event.target.name;
        const input = event.target.value;
        let newRowClone = JSON.parse(JSON.stringify(this.state.newRow));
        newRowClone.column_entries[field] = input
        this.setState({newRow: newRowClone});

    }


    /*
    getUpdates(inventoryObject){
        const currentUpdates = <RecentUpdates updates = {inventoryObject.updates} 
        cl = {(inv, itemid, status) => this.clickedCardHandler(inv, itemid, status)}/>
        return currentUpdates;
    }


*/

    getTable(){

        console.log('current rows', this.state.currentInventoryRows);
     //   let row_ids = inventoryObject.rows;
     //   let tableRows = this.state.row.filter( row => row_ids.includes(row.row_id) )
        const table = <InventoryTable tableFields = {this.state.currentInventoryFields}
                                      tableRows = {this.state.currentInventoryRows}
                                      changeInput = {(event) => this.onChangeInput(event)}
                                      add = {() => this.clickedAddHandler()}/>
        return table;
    }

    clickedCardHandler(inv, itemid, status) {
        let clone = [...this.state.userInventories];
        let inventory = clone.find(inventory => inventory.id === inv);
        let update = inventory.updates.find(update => update.itemid === itemid);
        let oldIndex = inventory.updates.findIndex(update => update.itemid === itemid);
        inventory.updates.splice(oldIndex, 1);

        let newUpdate;

        let item = inventory.contents.find(item => item.id === parseInt(itemid));

        if (status === "request") {
            newUpdate = {
                type: 'loan',
                inventory: update.inventory,
                itemid: update.itemid,
                itemDescription: update.itemDescription,
                requestedBy: update.requestedBy
            };
            inventory.updates.unshift(newUpdate);
            item.status = "on loan";
        } else {
            item.status = "available"
        }
        this.setState({ userInventories: clone })
    }

    render() {

        let updates = [];
        let table = [];
        if (this.state.currentLoadedInventory === "")
            updates = <RecentUpdates updates = {this.state.updates} 
            //cl = {(inv, itemid, status) => this.clickedCardHandler(inv, itemid, status)}
            />
        // if (this.state.invSelected === "")
        //     updates = <RecentUpdates updates = {this.state.recentUpdates} 
        //     cl = {(inv, itemid, status) => this.clickedCardHandler(inv, itemid, status)}/>

        // else if(this.state.invSelected == 'inventory_add') {

        // }//Add
        // //table = <invalid  //change table to my component which is imported from inv_add

        else{
            //updates = this.getUpdates(inventoryToShow);
            table = this.getTable();
        }
     

        return (

            <div>
                <div className="dashboard-top">
                    {    <UserMenu 


                    inventories={this.state.userInventories} //changed inventories to userInventories



                    clicked={(inventory) => this.clickedMenuButton(inventory)}
                    selected = {this.state.invSelected}/> }

                    <div className="updates">
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
