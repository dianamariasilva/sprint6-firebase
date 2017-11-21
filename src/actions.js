import store from './store'
import {auth, database} from './firebase';
import firebase from 'firebase';

export function signUp (firstName, lastName, email, pass) 
{
   console.log ('signUp' + firstName + email + pass + lastName);

   auth.createUserWithEmailAndPassword (email, pass).then ( user => {
      let newuser = {
         firstName, lastName, email, pass
      }
      database.ref ('users/' + user.uid).set (newuser);       
      database.ref ('users/' + user.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 

         console.log ('full info ', fullUserInfo);
         store.setState ( {
            user: {
               id : user.uid,
               email :  fullUserInfo.email,
               firstName :  fullUserInfo.firstName,
               lastName :  fullUserInfo.lastName,
               passwordConf :  fullUserInfo.passwordConf                   
            }
         })
      })

   })
   
}

export function signOut () {
   auth.signOut();
   store.setState ( {
      successSignIn : false,
      user: {
         id :'',
         email :  ''
      }
   })
}

export function signIn (user, pass) {
   auth.signInWithEmailAndPassword(user, pass).then (userObj => {

      database.ref ('users/' + userObj.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 

         console.log ('full info ', fullUserInfo);
         store.setState ( {
            user: {
               id : userObj.uid,
               email :  fullUserInfo.email,
               firstName :  fullUserInfo.firstName,
               lastName :  fullUserInfo.lastName,
               passwordConf :  fullUserInfo.passwordConf             
            }
         })
      })
   })
}


auth.onAuthStateChanged(user => {
   if (user) {
      console.log('user', user);
      let usersRef = database.ref('/users');
      let userRef = usersRef.child(user.uid);
      store.setState ( {
         successSignIn : true
      })
   }
});

export function readBoard () {
    firebase.database().ref('stages').on ('value', res => {
       let stages = []
       res.forEach ( snap  => {
          const stage = snap.val();
          stages.push (stage);
       })
       store.setState ({
          stages : stages
       }) 
    });
 
    firebase.database().ref('tasks').on ('value', res => {
       let tasks = [];
       res.forEach ( snap  => {
           const task = snap.val();
           tasks.push (task)
       })      
       store.setState ({
          tasks : tasks
       }) 
    });   
 }
 
 export function  addStage (text) {
 
    let stages = [...store.getState().stages];
    stages.push (  text )
    /*store.setState ({
       stages : stages
    })  */
 
    firebase.database().ref('stages').push (text);
 }
 
 export function  addTask (stage, text) {
    console.log ('addTask:', stage + ' - ' +  text);
 
    let tasks = [...store.getState().tasks];
 
    let newTask = {
       id : store.getState().tasks.length,
       title: text,
       stage : stage
    } 
 
    firebase.database().ref('tasks/' + newTask.id).set (newTask);
    /*
    store.setState ({
       tasks : tasks
    })  */
 }

 const snapshotToArray = snapshot => {
    let comments = []
    snapshot.forEach(childSnapshot => {
       let item = childSnapshot.val();
       let key = childSnapshot.key;
       item.id = key;
       comments.push( item );
     });
    store.setState({
       comments: comments
    })
 
 };
 
 export const readAllComments = () => {
    firebase.database()
          .ref('comentarios/')
          .on('value', (res) => {
             snapshotToArray(res)
          });
 }
 
 export  async function addComments (name,comment) {
     const comments = [...store.getState().comments]
    const newcomment = {
       name: name,
       comment: comment
    };
 
    const res = await  firebase.database().ref('comentarios/').push (newcomment);
    newcomment.id = res.key;
 
    const newComment= comments.concat(newcomment);
     store.setState({
         comments: newComment
     })
 }
 
 export const deleteComments = (id) => {
    firebase.database().ref('comentarios/').child(id).remove();
 }