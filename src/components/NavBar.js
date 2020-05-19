/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../actions/index';


function mapStateToProps(reduxState) {
  return {
    auth: reduxState.auth.authenticated,
  };
  // eslint-disable-next-line no-unreachable
  console.log(this);
}

// worked on this with Alex Feng
const authHelp = (auth, signout, history) => {
  if (auth) {
    console.log('history');
    console.log(history);
    return <button id="link" type="submit" onClick={() => signout(history)}>Sign Out</button>;
  } else {
    return (
      <div>
        <li><NavLink id="link" to="/signin">Sign In</NavLink></li>
        {/* <li><NavLink id="link" to="/signup">Sign Up</NavLink></li> */}
      </div>
    );
  }
};

const NavBar = (props) => {
  console.log('historhy 2');
  console.log(props.history);
  console.log(props.signoutUser);
  return (
    <nav id="nav">
      <ul>
        <li><NavLink id="link" to="/" exact>Posts</NavLink></li>
        <li><NavLink id="link" to="/posts/new">New Post</NavLink></li>
        {authHelp(props.auth, props.signoutUser, props.history)}
      </ul>
    </nav>
  );
};

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
