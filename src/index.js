import React from 'react';
import ReactDOM from 'react-dom';
// import MusicApp from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'redux-zero/react'
import store from './store'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { signIn, signOut, signUp, addNewBoard } from "./actions";
import { readBoard } from './actions'
import Home from './Home';
import Myboard from "./Board";

import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";


const Index = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/myboard" component={Myboard} />
      </Switch>
    </HashRouter>
  </Provider>
);
readBoard();

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();