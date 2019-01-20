import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

class App extends Component {
  render() {
    return (
      <div>
        {/* <SignIn /> */}
        {/* <Main /> */}
        <SignUp />
      </div>
    );
  }
}

export default App;
