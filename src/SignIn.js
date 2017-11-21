import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react'
import { signIn, signOut, signUp } from './actions'
import './App.css';
import logo from './download.png';
import SignUp from './SignUp';

const SignIn = ({ successSignIn }) => {
  return (
    <div>
      <main id="main_container" role="main">
        <div data-reactid=".0">
          <div
            className="view-container sessions new"
            data-reactid=".0.0">
            <main data-reactid=".0.0.0">
              <header data-reactid=".0.0.0.0">
                <img className="logo" data-reactid=".0.0.0.0.0" src={logo} />
              </header>
              {
                successSignIn && <Redirect to="/home" />
              }
              <form id="sign_in_form" data-reactid=".0.0.0.1" onSubmit={
                e => {
                  e.preventDefault();
                  signIn(this.emailInputRef.value, this.passwordInputRef.value)
                }
              }>
                <div className="field" data-reactid=".0.0.0.1.1">
                  <input
                    type="Email"
                    placeholder="email"
                    id="user_email"
                    data-reactid=".0.0.0.1.1.0"
                    ref={e => this.emailInputRef = e} />
                </div>
                <div className="field" data-reactid=".0.0.0.1.2">
                  <input
                    type="password"
                    placeholder="password"
                    id="user_password"
                    data-reactid=".0.0.0.1.2.0"
                    ref={e => this.passwordInputRef = e} />
                </div>
                <button type="submit" >
                  SignIn
                </button>
                <div className="field">
                  <NavLink data-reactid=".0.0.0.2" to="/signup">
                    Create a new account
                  </NavLink>
                </div>
              </form>
            </main>
          </div>
        </div>
      </main>
      <footer id="main_footer">
        <small>
          <a href="https://trello.com/" target="_blank">Trello</a> tribute for educational purposes
            crafted with ♥ for <a href="https://diacode.com/">Diacode</a>
          by <a href="https://twitter.com/bigardone">@bigardone</a>
        </small>
      </footer>
    </div>
  );
}
const mapToProps = ({ successSignIn }) => ({ successSignIn })
export default connect(mapToProps)(SignIn);
