import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  onChangeHandler = (e, { value }) => {
    this.setState({
      [e.target.name]: value
    })
  }

  onSubmitHandler = (e) => {
    console.log(this.state)
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <div className='login-form'>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header textAlign='center' >
              <h2 className="interviewer-title">
                Log-in to your account
            </h2>
            </Header>
            <Form size='large'>
              <Segment stacked>
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

                <Button color='grey' fluid size='large' onClick={this.onSubmitHandler}>
                  Login
            </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='signup'> Sign Up </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
