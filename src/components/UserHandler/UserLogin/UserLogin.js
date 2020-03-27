import React, {Component} from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';

const userLogin = (props) => {
    
    return(
    <div className="login">
        <p className="heading-login">Manage an Inventory</p>
        <SignInForm />
    </div>
    );
}
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

  class SignInFormBase extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
      const { email, password } = this.state;
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)

        .then(() => {
          this.setState({ ...INITIAL_STATE });
          window.alert("logged in")
          
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
      const { email, password, error } = this.state;
      const isInvalid = password === '' || email === '';
      return (
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <br />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <br /><br />
          <button disabled={isInvalid} type="submit">
            Log In
          </button>
         
          {error && <p>{error.message}</p>}
        </form>
      );
    }
  }
  const SignInForm = compose(
    withFirebase,
  )(SignInFormBase);

  
  export { SignInForm };

export default userLogin;