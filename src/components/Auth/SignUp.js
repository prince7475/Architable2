import React, { Component } from 'react'
import { Grid, Header, Form, Segment, Button, Message, Checkbox, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    anonymous: false
  }

  onChangeHandler = (e, { value }) => {
    this.setState({
      [e.target.name]: value
    })
  }

  checkBoxHandler = (e) => {
    this.setState({
      anonymous: !this.state.anonymous
    })
  }

  onSubmitHandler = (e) => {
    console.log(this.state)
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      anonymous: false
    })
  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header className="oauth-form-title" textAlign='center' >
              <h2 className="interviewer-title ">Create an account</h2>
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' name="firstName" placeholder='First Name' value={this.state.firstName} onChange={this.onChangeHandler} />
                <Form.Input fluid icon='user' iconPosition='left' name="lastName" placeholder='Last Name' value={this.state.lastName} onChange={this.onChangeHandler} />
                <Form.Input fluid icon='envelope' iconPosition='left' name="email" placeholder='E-mail address' value={this.state.email} onChange={this.onChangeHandler} />


                <Form.Input
                  name="password"
                  onChange={this.onChangeHandler}
                  value={this.state.password}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Form.Input
                  name="confirmPassword"
                  onChange={this.onChangeHandler}
                  value={this.state.confirmPassword}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirm Password'
                  type='password'
                />
                <div className="oauth-sign-up-form">
                  <Checkbox onChange={this.checkBoxHandler} label='I want to be anonymous' />
                </div>
                <Button color='grey' fluid size='large' onClick={this.onSubmitHandler}>
                  Sign up
            </Button>
              </Segment>
            </Form>
            <Message>
              Already a member ?  <Link to='signin'> Log In </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
