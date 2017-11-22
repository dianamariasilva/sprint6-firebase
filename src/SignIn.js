import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import { NavLink, Redirect } from 'react-router-dom';
import { readAllComments, writeUserData, signInUser } from "./actions.js";
import SignUp from "./SignUp.js";
import Board from './Board';
import store from "./store";
import logo from './download.png';

const Footer = ({ boards, selectItem }) => {
  return (
    <footer id="main_footer">
      <small>
        <a href="https://trello.com/" target="_blank">
          Trello
        </a>{" "}
        tribute for educational purposes crafted with ♥ for{" "}
        <a href="https://diacode.com/">Diacode</a>
        by <a href="https://twitter.com/bigardone">@bigardone</a>
      </small>
    </footer>
  );
};
export const Header1 = ({ boards, selectItem }) => {
  return (
    <header className data-reactid=".0.0.0.0">
      <img className="logo" data-reactid=".0.0.0.0.0" src={logo} />
    </header>
  );
};


const SignIn = ({ boards, selectItem, successLogin }) => {
  return (
    <div > 
         {successLogin && <Redirect to='/home' />}
        <main id="main_container" role="main">
            <div data-reactid=".0">
                <div
                className="view-container sessions new"
                data-reactid=".0.0">
                    <main data-reactid=".0.0.0">
                    <Header1 />
                    <form 
                    id="sign_in_form" data-reactid=".0.0.0.1"
                    onSubmit={e => {
                        e.preventDefault();
                        signInUser(this.signInEmailRef.value, this.signInPassRef.value);
                        this.signInEmailRef.value = "";
                        this.signInPassRef.value = "";
                    }}
                    >
                    <div className="field" data-reactid=".0.0.0.1.1">
                        <input
                            ref={ref => {
                            this.signInEmailRef = ref;
                            }}
                            className="input"
                            type="email"
                            label="Email address"
                        />
                    </div>
                    <div className="field" data-reactid=".0.0.0.1.2">
                        <input
                            ref={ref => {
                            this.signInPassRef = ref;
                            }}
                            className="input"
                            label="Password"
                            type="password"
                        />
                    </div>
                    <button className="button" type="submit">
                        Sign In
                    </button>            
                    </form>
                    <div className="field">
                    <NavLink to='/signup' className="transparent">
                        Create new account
                    </NavLink>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    </main>
    </div>
  );
};

const mapToProps = ({ boards, selectItem, selectCard, successLogin }) => ({ boards, selectItem, selectCard, successLogin});

export default connect(mapToProps)(SignIn);