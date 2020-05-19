/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signinUser } from '../actions/index';

class SignIn extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onUsernameChange = (event) => {
    this.setState({ email: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  signIn = (event) => {
    console.log('callin this mini');
    this.props.signinUser(this.state, this.props.history);
  }

  render() {
    return (
      <div id="newPost">
        <div>
          <h2>Email</h2>
          <input id="title" onChange={this.onUsernameChange} value={this.state.email} />
        </div>
        <div id="content" onChange={this.onPasswordChange} value={this.state.password}>
          <h2>Password:</h2>
          <input />
        </div>
        <button id="submit" type="submit" onClick={this.signIn}>Sign In</button>
        <h2>Dont have a an account?</h2>
        <NavLink id="submit" to="/signup">Sign Up</NavLink>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));
