import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomepageLayout from './components/Landing/LandingPage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/landingpage' component={HomepageLayout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
