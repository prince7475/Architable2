import React, { Component } from "react";
import { Button, Dropdown, Menu, Segment, Grid } from "semantic-ui-react";
const options = [
  { key: 1, text: "100", value: 100 },
  { key: 2, text: "200", value: 200 },
  { key: 3, text: "300", value: 300 },
  { key: 4, text: "400", value: 400 },
  { key: 5, text: "100", value: 100 },
  { key: 6, text: "200", value: 200 },
  { key: 7, text: "300", value: 300 },
  { key: 8, text: "100", value: 100 },
  { key: 9, text: "200", value: 200 },
  { key: 10, text: "300", value: 300 },
  { key: 11, text: "400", value: 400 },
  { key: 12, text: "100", value: 100 },
  { key: 13, text: "200", value: 200 },
  { key: 14, text: "300", value: 300 },
];

export default class Filter extends Component {
  render() {
    return (
      
        <Grid columns="equal">
          <Grid.Column width={16}>
            
              <Segment>
                <Button>Hello</Button>
                {/* <Dropdown
                    search
                    searchInput={{ type: "string" }}
                    selection
                    options={options}
                    placeholder="Select amount..."
                /> */}
                <Button>Hello</Button>
                <Button>Hello</Button>
                <Button>Hello</Button>
                <Button>Hello</Button>
              </Segment>
           
          </Grid.Column>
        </Grid>
     
    );
  }
}
