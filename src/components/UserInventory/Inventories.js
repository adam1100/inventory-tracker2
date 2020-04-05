import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';

class Inventories extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        inventories: [],
      };
    }

    componentDidMount() {
        this.getData();
      
      }

      getData = () => {
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });

        var wholeData = []
        db.collection('inventories').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data());
            wholeData.push(doc.data())
          });
          console.log(wholeData)
          this.setState({inventories: wholeData})
          console.log(this.state.inventories)
        })
        .catch(error => {
          console.log('Error!', error);
        })
      
      };


      render() {
    
        var listOfData = this.state.inventories.map((val, key)=>{
          var name = val.inventory_name
          return (
            <li key={val.id}>{val.name}</li>
          ) 
        })
    
        return (
     
          <div>
            <ul>{listOfData}</ul>
    
          </div>
          );
        }
       }

    export default withFirebase(Inventories);