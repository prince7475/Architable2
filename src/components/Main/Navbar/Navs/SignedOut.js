import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';

export default class SignedOut extends Component {
  render() {
    return (
        <Menu.Menu position="right">
            <Menu.Item>
                Login / Sign up
            </Menu.Item>
        </Menu.Menu>
    )
  }
}
