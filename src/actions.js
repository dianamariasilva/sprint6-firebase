import store from "./store";
import firebase from "./firebase";
import { auth, database } from "./firebase";

let idboard;
let myboards;
export function SignUpAdd(firstName, lastName, email, password) {

  auth.createUserWithEmailAndPassword(email, password).then(user => {
    let stages = [...store.getState().stages];
    let tasks = [...store.getState().tasks];
    let newuser = {
      firstName,
      lastName,
      email,
      password,
      stages,
      tasks
    };
    database.ref("users/" + user.uid).set(newuser);
    database
      .ref("users/" + user.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();
        console.log("full info ", fullUserInfo); // en fullUserInfo se muestra toda la informacion del usuario
        store.setState({
          user: {
            id: user.uid,
            firstName: fullUserInfo.firstName,
            lastName: fullUserInfo.lastName,
            email: fullUserInfo.email,
            password: fullUserInfo.password,
          }
        });
      });
  });
}

export function signOut() {
  auth.signOut();
  store.setState({
    successLogin: false,
    user: {
      id: "",
      email: ""
    }
  });
}

export function addNewBoard(title, userId) {

  database.ref('boards/').push({
    title: title,
    user_id: userId
  }).then(res => {
    console.log('board id: ', res.key)
  });

}

export function signInUser(email, password) {
  console.log("email", email + "-" + "password", password);
  auth.signInWithEmailAndPassword(email, password).then(userObj => {
    database
      .ref("users/" + userObj.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();

        console.log("full info ", fullUserInfo);
        store.setState({
          user: {
            id: userObj.uid,
            firstName: fullUserInfo.firstName,
            lastName: fullUserInfo.lastName,
            email: fullUserInfo.email,
            password: fullUserInfo.password,
          }
        });
      });
  });
}
export function readBoard() {
  // firebase
  //   .database()
  //   .ref("/stages/")
  //   .on("value", res => {
  //     let stages = [];
  //     res.forEach(snap => {
  //       const stage = snap.val();
  //       stages.push(stage);
  //       // database.ref('users/').push(stages);
  //     });
  //     store.setState({
  //       stages: stages
  //     });
  //   });

  // firebase
  //   .database()
  //   .ref("tasks")
  //   .on("value", res => {
  //     let tasks = [];
  //     res.forEach(snap => {
  //       const task = snap.val();
  //       tasks.push(task);
  //     });
  //     store.setState({
  //       tasks: tasks
  //     });
  //   });
}

export function addStage(text, board_id) {
  let newobj = {
    title: text,
    board_id: board_id
  }
  console.log('stage', newobj)

  database.ref('stages').push(newobj);
}

export function addTask(stageId, text) {
  console.log('addTask:', stageId + ' - ' + text);

  let tasks = [...store.getState().tasks];

  let newTask = {
    id: store.getState().tasks.length,
    title: text,
    stageId: stageId
  }
  database.ref('tasks/' + newTask.id).set(newTask);
}



auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user', user);
    let usersRef = database.ref('/users');
    let userRef = usersRef.child(user.uid);

    database.ref('users/' + user.uid).once('value').then(res => {
      const fullUserInfo = res.val();

      store.setState({
        successLogin: true,
        user: {
          id: user.uid,
          firstName: fullUserInfo.firstName,
          lastName: fullUserInfo.lastName,
          email: fullUserInfo.email,
          password: fullUserInfo.password
        }
      })
    });

    database.ref('boards').on('value', res => {
      let boards = [];
      res.forEach(snap => {
        const board = snap.val();
        board.id = snap.key;
        boards.push(board)
                myboards = board.title;


      })
      store.setState({
        boards: boards.filter(board => board.user_id === user.uid)
      })
      console.log('boardtitle', myboards, user.uid)


    });

    database.ref('stages').on('value', res => {
      let stages = []
      res.forEach(snap => {
        const stage = snap.val();
        stage.id = snap.key;
        stages.push(stage);
      })
      store.setState({
        stages: stages
      })
    });

    database.ref('tasks').on('value', res => {
      let tasks = [];
      res.forEach(snap => {
        const task = snap.val();
        tasks.push(task)
      })
      store.setState({
        tasks: tasks
      })
    });

  }
});

export const selectBoard = index => {
  console.log(index);
  let selectBoard = index;
  store.setState({
    selectItem: selectBoard
  });
};
export const selectCard = index => {
  console.log(index);
  const selectCard = index;
  store.setState({});
};