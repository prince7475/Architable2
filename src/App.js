import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomepageLayout from './components/Landing/LandingPage';
import InterViewForm from './components/Form/InterViewForm';
import Message from './components/Messaging/Message';
import SettingPage from './components/Setting/SettingPage';
import Account from './components/Account/Account';

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
            <Route exact path='/interview' component={InterViewForm} />
            <Route exact path='/messages' component={Message} />
            <Route exact path='/settings' component={SettingPage} />
            <Route exact path='/account' component={Account} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
