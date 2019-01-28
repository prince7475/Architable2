import React, { Component } from 'react'
import { Image, Menu, Dropdown } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
import faker from "faker";
export default class SignedIn extends Component {

    dropDownHander = (string ) => {
        console.log(string);
      };
  render() {
    const trigger = (
        <span>
          <Image avatar src={faker.internet.avatar()} /> {faker.name.findName()}
        </span>
      );
    return (
          <Menu.Menu position="right">
          <Menu.Item><NavLink to="/interview">Add Story </NavLink></Menu.Item>
          <Menu.Item><NavLink to="/messages">Messages (2) </NavLink></Menu.Item>
          <Menu.Item><NavLink to="/settings">Settings</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/account">Account</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/landingpage">Logout</NavLink></Menu.Item>
            <Menu.Item><NavLink to="account">
              <Dropdown trigger={trigger} icon={null}>
                <Dropdown.Menu>

                  {/* <Dropdown.Item 
                  onClick={()=> {this.dropDownHander("Messages")}}
                  ><NavLink to="/messages">Messages (2)</NavLink>
                  </Dropdown.Item>

                  <Dropdown.Item 
                  onClick={()=> {this.dropDownHander("Account")}}
                  >Account
                  </Dropdown.Item>


                  <Dropdown.Item
                  onClick={()=> {this.dropDownHander("Settings")}}
                  >Settings</Dropdown.Item>

                  <Dropdown.Item
                  onClick={()=> {this.dropDownHander("Sign Out")}}
                  >Sign Out</Dropdown.Item> */}

                </Dropdown.Menu>
              </Dropdown>
              </NavLink></Menu.Item>
          </Menu.Menu>
    )
  }
}
