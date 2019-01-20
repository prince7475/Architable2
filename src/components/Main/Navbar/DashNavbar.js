import React, { Component } from "react";

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
    const dropdown = true ? <SignedIn /> : <SignedOut />
    return (
        <Menu inverted>
          <Menu.Item
          className="architable-logo-container"
          onClick={()=> {this.dropDownHander('Architable')}}
          ><Image className="architable-logo" src="https://i.ibb.co/W5kDKsj/logo.png" alt="logo"/></Menu.Item>
          {dropdown}
        </Menu>
      
    );
  }
}
