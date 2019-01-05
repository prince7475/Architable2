import React, { Component } from "react";

import {  
  Menu 
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
          onClick={()=> {this.dropDownHander('Architable')}}
          >Architable</Menu.Item>
          {dropdown}
        </Menu>
      
    );
  }
}
