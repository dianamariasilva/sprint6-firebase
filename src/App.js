import React, { Component } from 'react';
import {connect} from 'redux-zero/react'

import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp, readAllComments, addComments, deleteComments} from './actions';
import './App.css';


const App  = ({successSignIn, user}) => {
    return (
      <div className="App">
         {
            !successSignIn  && <Redirect to = "/signin" />
         }
         <h1> TRELLO </h1>
         <button onClick = {signOut}>
            SignOut
         </button>   
          <div>
                {user.email} - {user.firstname} - {user.lastname} -  {user.passWordConf}
          </div>
      </div>
    );
} 
const mapToProps = ({successSignIn,user})  => ({successSignIn, user}) 
export default connect(mapToProps)(App) ;