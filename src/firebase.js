import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCw75Pu3dL71RK3A6VDUb4RAHZ7LDkUVjE",
    authDomain: "proyecto-final-trello.firebaseapp.com",
    databaseURL: "https://proyecto-final-trello.firebaseio.com",
    projectId: "proyecto-final-trello",
    storageBucket: "proyecto-final-trello.appspot.com",
    messagingSenderId: "1003467906467"
  };
  firebase.initializeApp(config);

  export default firebase;
  
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  