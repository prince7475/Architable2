import React, { Component } from "react";
import { Dropdown} from "semantic-ui-react";

export default class LocationButton extends Component {
    state = {
        current : "All Locations"
    }
handleChange = (e, {value}) => {
    this.setState({
        current : value
    })
}
render() {
    const options = [
        { key: 1, text: 'All Locations', value: "All Locations" },
        { key: 7, text: 'Texas', value: "Texas" },
        { key: 2, text: 'Dallas, Texas', value: "Dallas, Texas" },
        { key: 3, text: 'Austin, Texas', value: "Austin, Texas" },
        { key: 4, text: 'San Antonio, Texas', value: "San Antonio, Texas" },
        { key: 5, text: 'El Paso, Texas', value: "El Paso, Texas" },
        { key: 6, text: 'Houston, Texas', value: "Houston, Texas" },
    ]
    console.log(this.state.current)
    return (

        <Dropdown
            className="allLocationFilter"
            value={this.state.current}
            search
            searchInput={{ type: 'string' }}
            selection
            options={options}
            placeholder='Location'
            onChange={this.handleChange}
        >
        </Dropdown>
    
    );
}
}
