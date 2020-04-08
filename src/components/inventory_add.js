import React, {Component} from 'react';

import InventoryTables from '../components/UserInventory/InventoryTables';
import UserMenu from '../components/UserMenu/UserMenu';
import Inventories from "./UserInventory/Inventories";



class inventory_add extends Component {
    constructor() {
        super();
        this.state = {
            productName: '',
            id: '',
            description: '',
            qty: 0
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler(e) {       //?
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let inventoryDetails = {
            productName: this.state.productName,
            id: this.state.id,
            description: this.state.description,
            qty: this.state.qty
        }

       // let stock = {
         //   productName: this.state.productName,
         //   qty: this.state.qty
       // }
        {this.props.AddInventory(inventoryDetails)}
        console.log("inventoryDetails", inventoryDetails)
    }

    render() {
        return (
            <div ><center>
                <h1>Add New Inventory</h1>
                <form onSubmit={this.submit} >
                    <TextField
                        id="Product ID"
                        name="productName"
                        value={this.state.productName}
                        floatingLabelText="Product Name"
                        onChange={this.inputHandler}
                    /><br /><br />

                    <TextField
                        type="text"
                        hintText="description"
                        name="description"
                        value={this.state.description}
                        floatingLabelText="description"
                        onChange={this.inputHandler}
                    /><br /><br />


                    <TextField
                        type="text"
                        hintText="company"
                        name="company"
                        value={this.state.company}
                        floatingLabelText="company"
                        onChange={this.inputHandler}
                    /><br />
                    <br />

                    <RaisedButton type="submit" label="Add Product" primary={false} secondary={true} /> <br /><br />
                </form>

            </center>
            </div>
        );

    }


}

