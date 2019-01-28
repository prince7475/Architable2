import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import {  
  Menu,
  Image 
} from "semantic-ui-react";
import SignedIn from "./Navs/SignedIn";
import SignedOut from "./Navs/SignedOut";
export default class DashNavbar extends Component {
  dropDownHander = (string ) => {
    console.log(string);
  };

  render() {
    const dropdown = false ? <SignedIn /> : <SignedOut />
    return (
        <Menu inverted>
          <Menu.Item
          className="architable-logo-container"
          onClick={()=> {this.dropDownHander('Architable')}}
          ><NavLink to="/landingpage"><Image className="architable-logo" src="https://i.ibb.co/W5kDKsj/logo.png" alt="logo"/></NavLink></Menu.Item>
          {dropdown}
        </Menu>
      
    );
  }
}
