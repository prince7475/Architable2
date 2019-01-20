import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn';

class App extends Component {
  render() {
    return (
      <div>
        {/* <SignIn/> */}
        <Main/>
      </div>
    );
  }
}

export default App;
