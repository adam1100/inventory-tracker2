import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class LoginPage extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      username: "",
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
    <div className="wrap">
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Form.Input name="username" value={this.state.username} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input name="password" type='password' value={this.state.password} onChange={this.handleChange}/>
        </Form.Field>
        <br />
        <Button type="submit">Login</Button>
      </Form>
    </div>

  );
}
}
export default LoginPage;
