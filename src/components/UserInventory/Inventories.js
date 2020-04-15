import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { AuthUserContext, withAuthorisation } from '../Session';

class Inventories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      inventories: [],
      inventory_name: "",
      authUser: this.props.user,
      email:''

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
    let docRef = this.state.authUser.uid;
    console.log(docRef);
    var inventoryRef = [];
    let userRef = db.collection('users').doc(firebase.auth().currentUser.uid);
    let getDoc = userRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          wholeData.push(doc.data())
          console.log('Document data:', doc.data());
          var data = doc.data();
          var userName = data.username;
          inventoryRef.push(data.inventories);
          this.setState({inventories: inventoryRef})
          console.log('username: ',userName);
          console.log('inventoryRef: ', inventoryRef);
          console.log('inventories: ', this.state.inventories);
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      })
      
      

     /*  let invRef = db.collection('inventories').doc(inventoryRef);
      let query = invRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          var data = doc.data();
          var inventoryName = data.inventory_name;
          console.log('inventory name : ', inventoryName);
        }
      }) */
      ;
      

    /*         const docRef = db.collection('inventories').doc('YkOKYwrLuvQBFF9jGJ5K');
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
            }) */

  };

  getInventory = () => {
    //YkOKYwrLuvQBFF9jGJ5K
    const db = firebase.firestore();
    let inventoryRef = db.collection('inventories').doc('YkOKYwrLuvQBFF9jGJ5K');
    var wholeData = [];
    let getDoc = inventoryRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          
          wholeData.push(doc.data())
          console.log('Document data:', doc.data());
    

        }
      })


  }






  render() {
    if(this.state.inventories.length > 0){this.getInventory();}
    return (

      <h1>{this.state.authUser.email}</h1>

    )
  }
}

export default withFirebase(Inventories);