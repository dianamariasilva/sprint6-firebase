import React, { Component } from "react";
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import { selectBoard } from "./actions";

const Newboard = ({ boards, selectItem }) => {
    return(
        <div>
            new post
        </div>
    )
};
const mapToProps = ({ boards, selectItem, selectCard }) => ({ boards, selectItem, selectCard});

export default connect(mapToProps)(Newboard);