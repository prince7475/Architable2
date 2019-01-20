import React, { Component } from "react";
import { Button, Dropdown, Checkbox, Input } from "semantic-ui-react";

export default class ExperienceLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minYears: "0",
      maxYears: "15"
    };
  }
  yearsHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <Button>
        <Dropdown text="Experience Level" simple item>
          <Dropdown.Menu>
            <Dropdown.Item>
              <div className="min-and-max-dropdown-text  margin-right-5-percent">
                <h4 className="grey">Min: </h4>
              </div>

            <div className="min-and-max-dropdown-text ">
              <Input
                className="experienceLevelInput"
                name="minYears"
                placeholder="Min Years"
                onChange={this.yearsHandler}
                value={this.state.minYears}
              /> - Years
            </div>
            </Dropdown.Item>

            <Dropdown.Item>

            <div className="min-and-max-dropdown-text  margin-right-5-percent">
              <h4 className="grey">Min: </h4>
            </div>

            <div className="min-and-max-dropdown-text ">
              <Input
                className="experienceLevelInput"
                name="maxYears"
                placeholder="Max Years"
                onChange={this.yearsHandler}
                value={this.state.maxYears}
              /> - Years
            </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Button>
    );
  }
}
