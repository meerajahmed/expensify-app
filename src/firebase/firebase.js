//import all named exports
import * as firebase from "firebase";

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PRODUCT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID
};

firebase.initializeApp(config);

// get firebase database service
/*
firebase.database().ref().set({
  author: "Andrew Mead"
});*/

const database = firebase.database();

export { firebase, database as default };