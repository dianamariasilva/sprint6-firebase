import React, { Component } from "react";
import "./App.css";
import { connect } from "redux-zero/react";
import SignIn from "./SignIn.js";

const App = ({ boards,selectItem, user  }) => {
  return (
    <div>
      <SignIn boards={boards} selectItem={selectItem} user= {user} />
    </div>
  );
};

const mapToProps = ({ boards, selectItem, user }) => ({ boards, selectItem, user });

export default connect(mapToProps)(App);
