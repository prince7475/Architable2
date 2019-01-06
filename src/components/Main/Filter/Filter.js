import React, { Component } from "react";
import {
  Button,
  Dropdown,
  Menu,
  Segment,
  Grid,
  Checkbox
} from "semantic-ui-react";
import PostionButton from "./Filterbuttons/PostionButton";
import LocationButton from "./Filterbuttons/LocationButton";

export default class Filter extends Component {
  state = { 
    other : {
      o : true
    },
    postion: {
      ArchitecturalDesigner: true,
      ArchitecturalCoordinator: false,
      ArchitecturalProjectManager: false,
      Architect: false,
      Temporary: false
      }
  }

  toggle = (str) => {
    this.setState({ 
      ...this.state,
      postion: {
        ...this.state.postion,
        [str]: !this.state.postion[str]
      }
    })
  }

  render() {

    return (
      <Grid columns="equal" className="filter-component">
        <Grid.Column width={16}>

          <Segment>
          <PostionButton/>
          <LocationButton />
            
            

            <Button>Salary Offer</Button>
            <Button>Experience Level</Button>

            <Button
              basic
              color="red"
            >Clear Filter</Button>
          </Segment>

        </Grid.Column>
      </Grid>

    );
  }
}
