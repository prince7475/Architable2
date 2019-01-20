import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Main/Dashboard/Dashboard';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Main/> */}
        <SignIn />
      </div>
    );
  }
}

export default App;
