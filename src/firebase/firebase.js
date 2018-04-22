//import all named exports
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBx1qWBpCo0nbqEVKs-GR4GVI3XKvg828M",
  authDomain: "expensify-ffcfe.firebaseapp.com",
  databaseURL: "https://expensify-ffcfe.firebaseio.com",
  projectId: "expensify-ffcfe",
  storageBucket: "expensify-ffcfe.appspot.com",
  messagingSenderId: "506561331555"
};

firebase.initializeApp(config);

// get firebase database service
firebase.database().ref().set({
  author: "Andrew Mead"
});