import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react'

class RegisterPage extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: "",
      email: ""
    }
  }
   handleChange = (e, {name, value}) => {
    console.log(name, value)
    this.setState({[name]: value})
  } 

  handleSubmit = () => {
    console.log(this.state)
    
  }


  render(){
  return (
    <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field><label>Name</label>
          <Form.Input name="name" value={this.state.name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field><label>Email</label>
          <Form.Input name="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Field>
        <Button type="submit">Submit</Button>

       
      <br />
      <br />
      <br />
      <br />
             <label>
                Your password
            </label>
            <input type="password" id="password"/>
            <div className="text-center mt-4">
            <Link to="/userPage">
            <Button raised>Register</Button>
            </Link>
            </div>
      </Form>
      </div>

  );
}
}
export default RegisterPage;
