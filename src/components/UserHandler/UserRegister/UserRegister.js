import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as ROUTES from '../../../constants/routes';

const userRegister = (props) => {
    
  return(
  <div className="register">
      <p className="heading-register">Create an Account</p>       
      <SignUpForm />
  </div>
  );
}


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  uid: '',

};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase.user(authUser.user.uid).set(
          {
            username,
            email,
            uid: authUser.user.uid,
          },
          { merge: true },
        );
      })

      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <br />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <br />
        <br />
        <button disabled={isInvalid} type="submit">
          Register
        </button>
      </form>
    );
  }
}



const SignUpForm = compose(
  withFirebase,
  withRouter,
)(SignUpFormBase)

export default userRegister;
export { SignUpForm };