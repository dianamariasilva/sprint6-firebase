import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import { NavLink, Redirect } from 'react-router-dom';
import SignUp from "./SignUp.js";
import { selectBoard, signOut } from "./actions.js";

const Header = ({ user, successLogin}) =>{ 
    return (
        <header className="main-header">
     
          <nav>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-columns" />
                  <span> Boards</span>
                </a>
              </li>
            </ul>
          </nav>
          <a href="/" ><span className="logo"></span></a>
          <nav className="right">
            <ul >
              <li >
                <a className="current-user" >
                  <img alt="Gravatar "
                  className='react-gravatar'
                   src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" 
                   srcSet="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" />
                  <span >{user.email}</span>
               </a>
               </li>
                <li>
              <button className='buttonhome' onClick={signOut}>
                SignOut
              </button>
                </li>
              </ul>
          </nav>
        </header>)
}
const mapToProps = ({ boards, selectItem, selectCard, user, successLogin }) => ({ boards, user, selectItem, selectCard, successLogin});

export default connect(mapToProps)(Header);