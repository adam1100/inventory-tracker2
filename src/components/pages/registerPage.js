import React, { Component } from 'react';
import { Button } from 'react-mdl';
import {
    Link
  } from 'react-router-dom';

class RegisterPage extends Component {
  render(){
  return (
    <div>
      <form>
        <p>Register</p>
            <label>
                Your name
            </label>
            <input type="text" id="name" />
        <br />
             <label>
                Your email
            </label>
            <input type="email" id="email" />
        <br />
             <label>
                Your password
            </label>
            <input type="password" id="password"/>
            <div className="text-center mt-4">
            <Link to="#">
            <Button raised>Register</Button>
            </Link>
            </div>
      </form>
      </div>

  );
}
}
export default RegisterPage;
