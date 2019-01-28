import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
export default class SignedOut extends Component {
  render() {
    return (
        <Menu.Menu position="right">
            <Menu.Item>
            <NavLink to="/signin">
            Login / Sign up
            </NavLink>
                
            </Menu.Item>
        </Menu.Menu>
    )
  }
}
