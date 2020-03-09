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
      firstName: "",
      lastName:"",
      email: "",
      password: ""
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
        <Form.Field><label>First Name</label>
          <Form.Input name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field><label>Last Name</label>
          <Form.Input name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field><label>Email</label>
          <Form.Input name="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field><label>Password</label>
          <Form.Input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
        </Form.Field>
     
        <Button type="submit">Register</Button>
     
        

       
      <br />
      <br />
      <br />
      <br />

      </Form>
      </div>

  );
}
}
export default RegisterPage;
