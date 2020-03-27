import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUix8Nvi1yalzZPWoEQtkBnAhSKInsAFo",
  authDomain: "inventory-tracker-17668.firebaseapp.com",
  databaseURL: "https://inventory-tracker-17668.firebaseio.com",
  projectId: "inventory-tracker-17668",
  storageBucket: "inventory-tracker-17668.appspot.com",
  messagingSenderId: "998596153160",
  appId: "1:998596153160:web:5cab11fadf6c2fd124ed7d",
  measurementId: "G-VGZXE40BKN"
};


class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.fieldValue = app.firestore.FieldValue;

    this.auth = app.auth();
    this.db = app.firestore();

  }


  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');
}

export default Firebase;
