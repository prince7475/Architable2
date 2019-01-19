import React, { Component } from 'react'
import { Image, Menu, Dropdown } from 'semantic-ui-react';
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
          <Menu.Item>Add Story</Menu.Item>
          <Menu.Item>Messages (2) </Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Profile</Menu.Item>
            <Menu.Item>
              <Dropdown trigger={trigger} icon={null}>
                <Dropdown.Menu>

                  <Dropdown.Item 
                  onClick={()=> {this.dropDownHander("Messages")}}
                  >Messages (2)
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
                  >Sign Out</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
    )
  }
}
