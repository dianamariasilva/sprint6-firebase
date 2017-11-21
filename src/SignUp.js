import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { connect } from 'redux-zero/react'
import { signIn, signOut, signUp } from './actions'
import './App.css';
import logo from './download.png'

const SignUp = ({ successSignUp }) => {
    return (
        <main id="main_container" role="main">
            <div data-reactid=".0">
                <div
                    className="view-container registrations new"
                    data-reactid=".0.0">
                    <main data-reactid=".0.0.0">
                        <header data-reactid=".0.0.0.0">
                            <img src={logo} />
                        </header>

                        {
                            successSignUp && <Redirect to="/home" />
                        }
                        <form 
                        id="sign_up_form" 
                        data-reactid=".0.0.0.1"
                        onSubmit={
                            e => {
                                e.preventDefault();
                                signUp(this.firstNameRef.value, this.lastNameRef.value, this.emailRef.value, this.passwordRef.value)
                            }
                        }>
                            <input placeholder="First Name" 
                            id="user_first_name"
                            type="text"
                            ref={e => this.firstNameRef = e} />
                            <div className="field" data-reactid=".0.0.0.1.1">
                                <input
                                id="user_last_name"
                                type="text" 
                                placeholder="Last Name" 
                                required
                                data-reactid=".0.0.0.1.1.0"
                                ref={e => this.lastNameRef = e} />
                            </div>
                            <div className="field" data-reactid=".0.0.0.1.1">
                                <input 
                                placeholder="Email"
                                id="user_email"
                                type="email" 
                                ref={e => this.emailRef = e} />
                            </div>
                            <div className="field" data-reactid=".0.0.0.1.4">
                                <input 
                                type="password" 
                                placeholder="Password" 
                                ref={e => this.passwordRef = e} />
                            </div>
                            {/* <div className="field" data-reactid=".0.0.0.1.4">
                                <input
                                id="user_password_confirmation"
                                type="password"
                                placeholder="Confirm password"
                                required
                                ref={e => this.passwordConfRef = e}
                                data-reactid=".0.0.0.1.4.0" />
                            </div> */}
                            <button type="submit">
                                Sign Up!
                            </button>
                            <div className="field" data-reactid=".0.0.0.1.4">
                                <NavLink data-reactid=".0.0.0.1.3" to="/signin">
                                    Sign in
                                </NavLink>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </main>
    );
}


const mapToProps = ({ successSignUp }) => ({ successSignUp })
export default connect(mapToProps)(SignUp);
 
