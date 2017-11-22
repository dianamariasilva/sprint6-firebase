import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import { NavLink, Redirect } from 'react-router-dom';
import { SignIn } from "./SignIn";
import Board from './Board';
import Home from './Home';
import { SignUpAdd } from "./actions";
import {Header1} from './SignIn'

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <small>
          <a href="https://trello.com/" target="_blank">
            Trello
          </a>{" "}
          tribute for educational purposes crafted with ♥ for{" "}
          <a href="https://diacode.com/">Diacode</a>
          by <a href="https://twitter.com/bigardone">@bigardone</a>
        </small>
      </footer>
    </div>
  );
};
const Header = () => {
  return (
    <header>
      <div className="logo" />
    </header>
  );
};

const SignUp = ({ successLogin, user }) => {
  return (
    <div>
         {successLogin && <Redirect to='/home' />}
            <Header1 />
            <form
              onSubmit={e => {
                e.preventDefault();
                SignUpAdd(
                  this.firstNameRef.value,
                  this.lastNameRef.value,
                  this.emailRef.value,
                  this.passwordRef.value
                );
              }}
            >
                  <input
                    ref={e => (this.firstNameRef = e)}
                    className="input"
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    ref={e => (this.lastNameRef = e)}
                    className="input"
                    type="text"
                    placeholder="Last name"
                  />
                  <input
                    ref={e => (this.emailRef = e)}
                    className="input"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    ref={e => (this.passwordRef = e)}
                    className="input"
                    type="password"
                    placeholder="password"
                  />
              <button type="submit" className="button">
                Sign Up
              </button>
          <NavLink to='/signin' className="transparent">
                sign in
            </NavLink>
            </form>
        <Footer />
    </div>
  );
};

const mapToProps = ({ successLogin, user }) => ({ successLogin, user });

export default connect(mapToProps)(SignUp);