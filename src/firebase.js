import firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCtw-coVZPMWdUTCrkKTzlbpeZ5olwP0HA",
    authDomain: "proyecto-fa87e.firebaseapp.com",
    databaseURL: "https://proyecto-fa87e.firebaseio.com",
    projectId: "proyecto-fa87e",
    storageBucket: "",
    messagingSenderId: "609155621975"
  };
  firebase.initializeApp(config);

    
export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();