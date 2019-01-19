import React, { Component } from 'react'
import {  Dropdown, Button, Menu } from "semantic-ui-react";
export default class Sortby extends Component {
    state = {
        current: "Location"
    }
    sortbyHandler = (e, {value}) => {
        this.setState({
            current: value
        })
    }
    render() {
        const options = [
            { key: 1, text: 'Location', value: "Location" },
            { key: 2, text: 'Title', value: 'Title' },
            { key: 3, text: 'Recent', value: 'Recent' },
            { key: 4, text: 'Most like', value: 'Most like' },
        ]
          
        return (
            <Menu compact>
                <Dropdown
                compact 
                value={this.state.current}
                placeholder='Sort By' 
                options={options} 
                onChange={this.sortbyHandler}
                selection item/>
            </Menu>
        )
    }
}
