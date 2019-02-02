import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
export default class SignedOut extends Component {
  render() {
    return (
        <Menu.Menu position="right">
            <NavLink to="/signin"><Menu.Item>
            
            Login / Sign up
            
                
            </Menu.Item></NavLink>
        </Menu.Menu>
    )
  }
}
