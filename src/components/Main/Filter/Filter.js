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
import SalaryOfferButton from "./Filterbuttons/SalaryOfferButton";
import ExperienceLevel from "./Filterbuttons/ExperienceLevel";

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

  clearHandler = (e) => {
    e.preventDefault();
    console.log("clear button is clicked")
  }

  render() {

    return (
      <Grid columns="equal" className="filter-component">
        <Grid.Column width={16}>

          <Segment>
          <PostionButton/>
          <SalaryOfferButton />
          <ExperienceLevel/>

          <LocationButton />
            <Button
              basic
              color="red"
              onClick={this.clearHandler}
            >Default Filter</Button>
          </Segment>

        </Grid.Column>
      </Grid>

    );
  }
}
