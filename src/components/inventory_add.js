import React, {Component} from 'react';
//import InventoryTable from
//import TableRow from
//import _button from

//import * as firebase from 'firebase';

class inventory_add extends Component {
    constructor() {
        super();
        this.ItemID = {
            Description: ''
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        let storeDetails = {
            ItemId: this.state.ItemId,
            Description: this.state.Description
        }
        //console.log(storeDetails)
       // {
        //    this.props.AddStoreRequest(storeDetails)
       // }
    }

    render() {
        function addItem() {

        }

        //BUTTON FOR ADDING Inventory - need to be implemented
        addItem()
        {
            AlertIOS.prompt(
                'Add Item',
                null,
                [
                    {text: 'Cancel', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: (text) => this.itemsRef.push({title: text})},
                ],
            )
        }
    }


}
