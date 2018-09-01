import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';
import Header from './header';
import Search from './search';
import Display from './display';

class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCu7m5w1sQTJY2jiIcuT5Kmn7lM5TwPgvU",
      authDomain: "comfystay-121fc.firebaseapp.com",
      databaseURL: "https://comfystay-121fc.firebaseio.com",
      projectId: "comfystay-121fc",
      storageBucket: "comfystay-121fc.appspot.com",
      messagingSenderId: "611163272406"
    };
    firebase.initializeApp(config);
    var db= firebase.firestore();
    db.collection("hotels").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().name);
        });
    });
  }

  render() {
    return (
      <home/>
    );
  }
}

export default App;