import React, { Component } from "react";
import { connect } from "redux-zero/react";
import { NavLink, Redirect } from "react-router-dom";
import { signIn, signOut, signUp, addNewBoard } from "./actions";
import "./App.css";
import Header from "./Header";
import Myboard from "./Board";

const Home = ({ successLogin, user, boards, stages, tasks }) => {
  return <div>
      <Header />
      <div>
        <h3>
          <i className="fa fa-user" />
          <span> My boards</span>
        </h3>
             {
          !successLogin && <Redirect to="/signin" />           
          }
        <div>
          {successLogin && <Redirect to="/myboard" />}
          <form className="boards" onSubmit={e => {
              e.preventDefault();
              addNewBoard(this.boardInputRef.value, user.id);
              this.boardInputRef.value = "";
            }}>
            <h3>New Board</h3>
            <input className="add" placeholder="Board Name" ref={e => (this.boardInputRef = e)} />
            <br /> <br />
            <button type="submit">Push a new Board</button>
            <span>
              or <a href="#">cancel</a>
            </span>
          </form>
        </div>
      </div>
    </div>;
};

const mapToProps = ({ successLogin, user, boards, stages, tasks }) => ({
  successLogin, user, boards, stages, tasks});
export default connect(mapToProps)(Home);